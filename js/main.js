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
