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

## Medidas parciales (fase C, 2026-11-18, servidor local sin caché)

| Página | Lighthouse móvil (Rend. / A11y / BP / SEO) | Peso | W3C | Scroll a 360/768/1280 |
|---|---|---|---|---|
| index.html | 100 / 100 / 96 → 100 tras B05 | 35 KB | 0 errores | 0 / 0 / 0 |
| catalogo.html | 100 / 100 / 96 → 100 tras B05 | 38 KB | 0 errores | 0 / 0 / 0 |
| productores.html | 100 / 100 / 96 → 100 tras B05 | 32 KB | 0 errores | 0 / 0 / 0 |
| contacto.html | 100 / 100 / 100 (tras B05) | 36 KB | 0 errores | 0 / 0 / 0 |
