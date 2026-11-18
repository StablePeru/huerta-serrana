# 05 · Informe de verificación

> Informe en construcción. La checklist V01-V15 completa, con capturas, se
> rellena en la fase D y tras el despliegue.

## Registro de bugs

| Id | Fecha | Página | Gravedad | Descripción | Causa | Corrección | Origen |
|---|---|---|---|---|---|---|---|
| B01 | 2026-11-18 | contacto.html | Media | Scroll horizontal de 90 px a 360 px (falla V07). | El `select` toma el ancho de su opción más larga («Productos sueltos del catálogo…»). | `max-width: 100%` en `input`, `select` y `textarea` (`base.css`). Ahora: 17 px. | IA (fase A: texto largo en la opción) |
| B02 | 2026-11-18 | contacto.html | Media | Sigue habiendo 17 px de scroll horizontal a 360 px. | La tabla comparativa de 5 columnas no cabe en móvil. | La tabla se desliza dentro de su caja (`overflow-x: auto`, `tabindex="0"`, `role="region"`). Ahora: 0 px en las 4 páginas a 360/768/1280. | Diseño (tabla sin adaptar) |
| B03 | 2026-11-18 | css/layout.css | Baja | El validador CSS marca un error en `minmax(min(100%, var(--tarjeta-min)), 1fr)`. | Limitación del validador con `var()` dentro de `min()`: el CSS es válido. | Se movió el `min()` al token: `--tarjeta-min: min(100%, 16rem)`. 0 errores. | IA (fase B) |
| B04 | 2026-11-18 | index.html | Baja | En «Cómo funciona», el texto del paso 1 no se alinea con el de los pasos 2 y 3. | Columna del número en `auto`: el «1» de Georgia es más estrecho que el «2». | Columna fija `var(--espacio-6)`. | IA (fase C) |
| B05 | 2026-11-18 | Todas | Baja | Lighthouse «Buenas prácticas» 96: error de consola 404 en `/favicon.ico`. | El navegador pide un favicon por defecto si la página no declara uno. | `img/favicon.svg` propio enlazado con `<link rel="icon">`. Buenas prácticas: 100. | Persona del equipo (olvido) |
| B06 | 2026-11-18 | catalogo.html (impresión) | Baja | En papel se imprimía «Mostrando 12 de 12 productos». | El contador del filtro no estaba en la lista de elementos ocultos al imprimir. | Añadido `.filtro__estado` a la regla `@media print`. Comprobado con captura en modo print. | IA (fase D) |
| B07 | 2026-11-18 | catalogo.html | Media | Lighthouse: CLS 0,02 (desplazamiento de diseño). | `main.js` insertaba el contador del filtro tras cargar y empujaba las tarjetas. | El párrafo va vacío en el HTML con `min-height` de una línea; JS solo lo rellena. CLS: 0. | IA (fase D) |

## Medidas parciales (fase C, 2026-11-18, servidor local sin caché)

| Página | Lighthouse móvil (Rend. / A11y / BP / SEO) | Peso | W3C | Scroll a 360/768/1280 |
|---|---|---|---|---|
| index.html | 100 / 100 / 96 → 100 tras B05 | 35 KB | 0 errores | 0 / 0 / 0 |
| catalogo.html | 100 / 100 / 96 → 100 tras B05 | 38 KB | 0 errores | 0 / 0 / 0 |
| productores.html | 100 / 100 / 96 → 100 tras B05 | 32 KB | 0 errores | 0 / 0 / 0 |
| contacto.html | 100 / 100 / 100 (tras B05) | 36 KB | 0 errores | 0 / 0 / 0 |

## Medidas tras la fase D (2026-11-18, servidor local sin caché, Lighthouse 13.6 móvil)

| Página | Rend. / A11y / BP / SEO | Peso | Peticiones | LCP | CLS | W3C HTML y CSS |
|---|---|---|---|---|---|---|
| index.html | 100 / 100 / 100 / 100 | 45 KB | 7 | 1,1 s | 0 | 0 errores |
| catalogo.html | 100 / 100 / 100 / 100 | 48 KB | 7 | 1,1 s | 0 (tras B07) | 0 errores |
| productores.html | 100 / 100 / 100 / 100 | 42 KB | 7 | 1,1 s | 0 | 0 errores |
| contacto.html | 100 / 100 / 100 / 100 | 46 KB | 7 | 1,1 s | 0 | 0 errores |

Otras comprobaciones:

- **Teclado (escritorio):** el primer Tab muestra «Saltar al contenido»; orden: logo, 4 enlaces del menú, acciones de la portada. Contorno de foco Tierra de 3 px.
- **Menú en escritorio** sin JavaScript (`::details-content`); en móvil, botón «Menú».
- **Aviso de temporada (JS):** probado simulando enero, abril, julio y octubre: título, meses resaltados y productos correctos en las 4 estaciones.
- **Formulario (JS):** vacío no se envía (nombre, correo, pedido y consentimiento marcados como inválidos); con datos válidos compone `mailto:` con asunto y una línea por dato.
- **Impresión:** captura `docs/capturas/catalogo-impresion.png`.
- **Pendiente de explicar:** Lighthouse marca `bf-cache` porque el servidor de pruebas envía `Cache-Control: no-store` (opción `-c-1`). Se repetirá en el sitio publicado.

Capturas: `docs/capturas/inicio-1280.png`, `inicio-360-oscuro.png`, `catalogo-1280.png`, `catalogo-impresion.png`, `productores-1280.png`, `contacto-360.png`.
