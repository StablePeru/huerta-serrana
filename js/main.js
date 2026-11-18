/* ==========================================================================
   main.js · Mejoras progresivas de Huerta Serrana
   --------------------------------------------------------------------------
   La web funciona y muestra todo su contenido SIN este fichero. Si el
   navegador lo carga, añade pequeñas ayudas. Cada función comprueba si su
   página tiene el elemento que necesita; si no, no hace nada.

   Se carga con type="module": se ejecuta en modo estricto y después de que
   el HTML esté leído (como defer), así que el DOM ya existe.
   ========================================================================== */

/* ---- 1. Aviso de temporada según la fecha de hoy (index.html) ----------
   El HTML trae el aviso de otoño escrito a mano (lo que se ve sin JS).
   Aquí se recalcula con la fecha real. Las estaciones se toman por meses
   completos (meteorológicas); los productos salen del Anexo B. */
const TEMPORADAS = [
  { nombre: "primavera", meses: [2, 3, 4], productos: "miel de romero" },
  { nombre: "verano", meses: [5, 6, 7], productos: "tomate rosa de la sierra, judías verdes y miel de brezo" },
  { nombre: "otoño", meses: [8, 9, 10], productos: "calabaza de invierno, manzana reineta y mermelada de higo" },
  { nombre: "invierno", meses: [11, 0, 1], productos: null }, // El catálogo no tiene productos de invierno
];

// getMonth() devuelve 0 (enero) … 11 (diciembre)
const temporadaDelMes = (mes) => TEMPORADAS.find((temporada) => temporada.meses.includes(mes));

function actualizarAvisoTemporada() {
  const aviso = document.querySelector(".aviso");
  if (!aviso) return;

  const temporada = temporadaDelMes(new Date().getMonth());

  aviso.querySelector(".aviso__titulo").textContent = `Temporada de ${temporada.nombre}`;

  aviso.querySelectorAll(".meses__mes").forEach((mes, indice) => {
    mes.classList.toggle("meses__mes--actual", temporada.meses.includes(indice));
  });

  aviso.querySelector(".aviso__texto").textContent = temporada.productos
    ? `Ahora es temporada de ${temporada.productos}.`
    : "En invierno no hay productos de temporada en nuestro catálogo.";
}

actualizarAvisoTemporada();

/* ---- 2. Contador accesible del filtro (catalogo.html) ------------------
   El filtro ya funciona solo con CSS (:has). Lo que CSS no puede hacer es
   avisar a un lector de pantalla de cuántos productos quedan: lo hace un
   párrafo con role="status", que se lee en voz alta al cambiar. */
function anunciarResultadosFiltro() {
  const catalogo = document.querySelector(".catalogo");
  if (!catalogo) return;

  const filtro = catalogo.querySelector(".filtro");
  const productos = [...catalogo.querySelectorAll(".catalogo__item")];

  // El párrafo ya está en el HTML (vacío y con su altura reservada) para que
  // rellenarlo no desplace las tarjetas (CLS, bug B07).
  const estado = catalogo.querySelector(".filtro__estado");

  const contarVisibles = () => {
    const visibles = productos.filter((producto) => getComputedStyle(producto).display !== "none");
    estado.textContent = `Mostrando ${visibles.length} de ${productos.length} productos.`;
  };

  filtro.addEventListener("change", contarVisibles);
  contarVisibles();
}

anunciarResultadosFiltro();

/* ---- 3. Correo de pedido legible (contacto.html) -----------------------
   Sin JS, el formulario se envía con action="mailto:" y el correo llega en
   formato «nombre=Ana». Con JS se compone un correo con asunto y una línea
   por dato. El evento submit solo se dispara si la validación nativa del
   navegador (required, type="email") ha pasado. */
function prepararCorreoPedido() {
  const formulario = document.querySelector(".formulario");
  if (!formulario) return;

  const aviso = document.createElement("p");
  aviso.className = "formulario__aviso";
  aviso.setAttribute("role", "status");
  formulario.after(aviso);

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const datos = new FormData(formulario);
    const lineas = [
      `Nombre: ${datos.get("nombre")}`,
      `Correo: ${datos.get("correo")}`,
      `Teléfono: ${datos.get("telefono") || "no indicado"}`,
      `Pedido: ${datos.get("pedido")}`,
      `Comentarios: ${datos.get("comentarios") || "ninguno"}`,
      "Consentimiento de privacidad: aceptado",
    ];

    const destino = formulario.getAttribute("action"); // mailto:pedidos@huertaserrana.example
    const asunto = encodeURIComponent(`Solicitud de pedido: ${datos.get("pedido")}`);
    const cuerpo = encodeURIComponent(lineas.join("\n"));

    window.location.href = `${destino}?subject=${asunto}&body=${cuerpo}`;

    aviso.textContent =
      "Hemos preparado el correo en tu programa de correo. Si no se ha abierto, escríbenos a pedidos@huertaserrana.example.";
  });
}

prepararCorreoPedido();
