# Huerta Serrana · sitio web

Sitio web estático de **Huerta Serrana S. Coop.** (cooperativa ficticia de cuatro
productores de la Sierra Norte de Madrid). Presenta la cooperativa, el catálogo de
temporada, las cestas de suscripción y un formulario para solicitar pedidos.

Caso práctico de **Ingeniería Web I** (UAX, 2026-27), construido con ayuda de una
IA generadora de código bajo la responsabilidad del equipo.

> Todos los datos son ficticios. Dominio de pruebas: `huertaserrana.example`.

## Cómo ejecutarlo en local

No hace falta instalar nada: son ficheros HTML, CSS y JS.

- **Opción 1 · VS Code + Live Server**: abrir la carpeta, clic derecho en
  `index.html` → *Open with Live Server*.
- **Opción 2 · Node.js**: desde la raíz del proyecto:

  ```bash
  npx http-server -c-1 .
  ```

  y abrir `http://localhost:8080`. (`-c-1` desactiva la caché para medir bien.)

Entorno usado: Node.js 24.20.0 · npm 11.11.0 · Git 2.41 · VS Code con Prettier
y Live Server (`.vscode/extensions.json`). Mediciones con Chrome 157 (Lighthouse
13.6.0 en modo móvil) y validador Nu del W3C 26.10.12.

## Estructura

```
huerta-serrana/
├── index.html            Inicio
├── catalogo.html         Catálogo de los 12 productos
├── productores.html      Los 4 productores
├── contacto.html         Contacto y formulario de pedido
├── css/
│   ├── tokens.css        Variables: colores, tipografía, espaciado, radios
│   ├── base.css          Reset, tipografía y elementos HTML
│   ├── layout.css        Cabecera, menú, pie, rejillas, breakpoints e impresión
│   └── components.css    Componentes BEM (etiqueta, botón, filtro, tabla…)
├── js/main.js            Mejoras progresivas: la web funciona sin él
├── img/favicon.svg       Icono propio (la ilustración va en línea en index.html)
├── docs/                 Documentación del proyecto (ver abajo)
├── CLAUDE.md             Reglas del proyecto para la IA
└── README.md
```

Las hojas se cargan en este orden: de lo general (tokens) a lo particular
(componentes), para que la cascada sea predecible.

## Decisiones principales

| Decisión | Motivo |
|---|---|
| Sitio estático (HTML/CSS) en hosting gratuito | Coste cero, sin servidor que mantener ni atacar, carga rápida. Ver ADR en `docs/01-briefing-arquitectura.md`. |
| Sin frameworks CSS | Peso mínimo y código que una persona sin formación técnica puede leer. |
| JavaScript solo como mejora progresiva | Todo el contenido está en el HTML. JS solo actualiza el aviso de temporada según la fecha, anuncia cuántos productos quedan al filtrar y compone un correo de pedido legible. Con JS desactivado la web funciona igual. |
| Filtro del catálogo con CSS (`:has()`) | Funciona sin JavaScript. Los productos de «Todo el año» aparecen en cada estación porque también están disponibles en ella. |
| Menú plegable con `details/summary` | Se abre sin JavaScript; en escritorio se muestra siempre gracias a `::details-content`. |
| Pedido por correo (`mailto:`) | Sin servidor ni servicios de terceros que reciban datos personales. Limitación asumida (ver ADR, riesgo R5). |
| Tabla de cestas con desplazamiento propio en móvil | Mantiene la semántica de tabla para lectores de pantalla y la página no hace scroll horizontal. |
| CSS sin minificar y comentado | La persona que lo mantendrá no tiene formación técnica; el sitio completo pesa 72 KB. |
| Fuentes del sistema | Cero descargas y cero peticiones a terceros (privacidad, RGPD). |
| Tokens en dos capas (paleta → roles) | El modo oscuro solo redefine roles; los componentes no cambian. |
| BEM en español | Nombres legibles por la persona que mantendrá la web. |

## Documentación (`docs/`)

| Documento | Contenido |
|---|---|
| `01-briefing-arquitectura.md` | Objetivos SMART, personas, historias de usuario, ADR, riesgos |
| `02-diseno-sistema-visual.md` | Mapa del sitio, wireframes, tokens, tabla de contraste, textos |
| `bitacora-ia.md` | Registro de prompts, fallos de la IA y correcciones |
| `experimento-4-4.md` | Prompt vago frente a prompt estructurado |
| `capturas/` | Capturas de evidencia (escritorio, móvil, modo oscuro, impresión) |
| `05-informe-verificacion.md` | Checklist V01-V15 con evidencias |
| `datos/` | CSV oficiales del caso (Anexos B, C y D) |

## Cómo cambiar el contenido (para la persona que mantiene la web)

- **Precio de un producto:** en `catalogo.html`, busca el nombre del producto y
  cambia las dos cifras de su línea de precio, por ejemplo
  `<data value="3.90">3,90 €</data>` (la primera con punto, la segunda con coma).
- **Precio de una cesta:** está en `index.html` (tarjetas) y en `contacto.html`
  (tabla y desplegable del formulario). Cámbialo en los tres sitios.
- **Temporada de un producto:** en `catalogo.html`, cambia el texto de
  «Temporada» y el atributo `data-temporada` de su `<li>` (`primavera`,
  `verano`, `otono` o `todo-el-ano`). Si cambia qué hay en cada estación,
  actualiza también la lista `TEMPORADAS` de `js/main.js` y el aviso de `index.html`.
- **Colores:** solo en `css/tokens.css`.
- Después de cualquier cambio, pasa el validador W3C (https://validator.w3.org).

## Publicación

URL del sitio publicado: *pendiente del despliegue en GitHub Pages*.

## Pendiente de confirmar con el cliente

- La cesta Pareja dice «1 huevos» en el Anexo B: parece una errata y se ha
  copiado tal cual hasta que el cliente lo confirme.
- En `productores.csv`, la descripción de Quesería La Peña lleva un `;` que rompe
  la fila; se usa el texto del PDF del enunciado.

## Créditos de imágenes

Todas las imágenes son **SVG dibujados para este proyecto** (la ilustración
lineal de la sierra y el favicon), sin recursos de terceros. No se usan bancos
de imágenes ni tipografías externas.

## Política de uso de IA del equipo

1. La IA escribe borradores; el equipo especifica, revisa y verifica cada línea.
2. Las reglas del proyecto están en `CLAUDE.md` para no repetirlas en cada prompt.
3. Todo prompt significativo se registra en `docs/bitacora-ia.md`, con sus fallos.
4. Ningún dato sale de fuera de `docs/datos/`: si la IA inventa contenido, es un defecto.
5. No se pegan credenciales ni datos personales en la herramienta.
6. Si la IA propone instalar algo, se comprueba en el registro oficial antes.
7. «Funciona» no es una prueba: cada entrega se verifica con la checklist V01-V15.
