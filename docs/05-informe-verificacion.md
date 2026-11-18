# 05 · Informe de verificación

> Sitio publicado: https://stableperu.github.io/huerta-serrana/

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
| B08 | 2026-11-18 | contacto.html (publicada) | Alta | En GitHub Pages, Buenas prácticas baja a 77 (falla V11): `is-on-https` e `inspector-issues` por contenido mixto. En local no aparecía. | Chrome trata un formulario con `action="mailto:"` en una página HTTPS como envío inseguro. El servidor local era HTTP. | Se quita el `action`; el formulario solo se muestra con JavaScript y sin JS se muestra el correo. Primer intento con `hidden` + JS: CLS 0,332 y rendimiento 84 (falla V10). Solución final: script mínimo en el `<head>` que añade la clase `js` antes de pintar. Resultado: 100/100/100/100 y CLS 0. | Persona del equipo (decisión de arquitectura del formulario) |

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
- **`bf-cache`:** en local Lighthouse lo marcaba porque el servidor de pruebas envía `Cache-Control: no-store` (opción `-c-1`). En el sitio publicado pasa en las 4 páginas: no era un fallo del sitio.

Capturas: `docs/capturas/inicio-1280.png`, `inicio-360-oscuro.png`, `catalogo-1280.png`, `catalogo-impresion.png`, `productores-1280.png`, `contacto-360.png`.

## Medidas de la versión v1.0 (2026-11-18, local)

| Página | Rend. / A11y / BP / SEO | Peso | Peticiones | Externas | CLS |
|---|---|---|---|---|---|
| index.html | 100 / 100 / 100 / 100 | 46 KB | 7 | 0 | 0 |
| catalogo.html | 100 / 100 / 100 / 100 | 49 KB | 7 | 0 | 0 |
| productores.html | 100 / 100 / 100 / 100 | 43 KB | 7 | 0 | 0 |
| contacto.html | 100 / 100 / 100 / 100 | 47 KB | 7 | 0 | 0 |

W3C: 0 errores y 0 avisos en las 4 páginas y en las 4 hojas CSS. Auditoría CSS:
0 colores o espaciados sueltos, 0 `!important`, 0 IDs para estilar, 0 `float`.
## Medidas del sitio publicado (2026-11-18, GitHub Pages, Lighthouse 13.6 móvil, tras B08)

URL: https://stableperu.github.io/huerta-serrana/

| Página | Rend. / A11y / BP / SEO | Transferido | Peticiones | LCP | CLS | bf-cache |
|---|---|---|---|---|---|---|
| index.html | 100 / 100 / 100 / 100 | 16 KB | 7 | 1,0 s | 0 | Sí |
| catalogo.html | 100 / 100 / 100 / 100 | 16 KB | 7 | 1,0 s | 0 | Sí |
| productores.html | 100 / 100 / 100 / 100 | 16 KB | 7 | 0,8 s | 0 | Sí |
| contacto.html | 100 / 100 / 100 / 100 | 17 KB | 7 | 1,0 s | 0 | Sí |

El peso transferido es menor que en local (43-49 KB) porque GitHub Pages
comprime con gzip; el servidor de pruebas no.

Antes de B08, contacto.html daba 100 / 100 / 77 / 100 en el sitio publicado.

Caso límite conocido: si el script del `<head>` se ejecuta pero `js/main.js` no
llega a cargar, el formulario se ve pero no abre el correo. El correo de
contacto sigue visible en «Contacto directo» y en el pie.

Pendiente: repetir V08-V12 en un móvil real (apartado 6.1).

## Análisis de huella (apartado 5.6)

Medido el 2026-11-18 sobre el sitio publicado, con Lighthouse 13.6 en modo móvil
(red simulada de 1,6 Mbit/s de bajada y 150 ms de latencia, CPU 4 veces más
lenta). 1 KB = 1.024 bytes.

### Peso total de cada página

| Página | Recursos | Peso sin comprimir | Transferido | Tiempo de descarga de los datos* |
|---|---|---|---|---|
| index.html | 7 | 43,9 KB | 16,1 KB | 0,08 s |
| catalogo.html | 7 | 46,9 KB | 15,9 KB | 0,08 s |
| productores.html | 7 | 41,3 KB | 15,5 KB | 0,08 s |
| contacto.html | 7 | 45,5 KB | 16,6 KB | 0,08 s |

\* Solo el tiempo de bajar los bytes a 1,6 Mbit/s, sin latencia. El tiempo real
hasta ver la página lo da el LCP: de 0,8 a 1,0 s con el mismo perfil.

- GitHub Pages comprime con gzip: se transfiere un 64 % menos de lo que pesan los
  ficheros. Por eso no minificamos: el código sigue legible para quien lo
  mantenga y la compresión hace la mayor parte del trabajo.
- Las 4 páginas comparten 6 ficheros (4 CSS, `main.js` y el favicon: 13,2 KB
  transferidos). El servidor los marca con `Cache-Control: max-age=600`, así que
  en los 10 minutos siguientes no se vuelven a descargar. Recorrer las 4 páginas
  cuesta 24,3 KB en lugar de 64,1 KB.

### Ahorro si el 10 % de las visitas fueran de móviles con conexión lenta

No tenemos datos de tráfico del cliente. Calculamos sobre **1.000 visitas**, de
las que **100** llegan desde un móvil con la conexión lenta descrita arriba, y
contamos una página por visita, el caso más desfavorable para la caché.
Comparamos nuestra página media (16,0 KB) con dos referencias medidas en este
proyecto:

| Referencia | Peso por página | Descarga a 1,6 Mbit/s | Ahorro por visita | Ahorro en 100 visitas lentas |
|---|---|---|---|---|
| Página en el límite del criterio V08 | 500 KB | 2,44 s | 484 KB y 2,4 s | 47,3 MB y 236 s de espera |
| Versión del prompt vago (experimento 4.4) | 146,5 KB | 0,72 s | 130,5 KB y 0,6 s | 12,7 MB y 64 s de espera |

Fórmula para aplicarla con las visitas reales:
`ahorro = visitas × 0,10 × (peso de referencia − 16,0 KB)`.

El peso de la versión vaga se midió en local y sin comprimir. Casi todo eran
fuentes WOFF2, que ya van comprimidas, así que su transferencia sería parecida.

### Relación con el desarrollo web sostenible (UD1)

La UD1 (§6.2) presenta el desarrollo web sostenible como crear sitios
eficientes en energía y recursos para reducir su huella ambiental. Cada byte que
no viaja ahorra trabajo en el servidor, en la red y en la batería del móvil. Las
decisiones del proyecto que lo consiguen son las mismas que la UD1 (§3) cita
para el rendimiento: comprimir recursos, hacer pocas peticiones HTTP, usar
imágenes ligeras (SVG en lugar de fotos) y servir desde una CDN. A eso se suman
las fuentes del sistema y que no hay recursos de terceros. En la sierra, con
cobertura irregular, esa diferencia también se nota en el tiempo de espera.

No convertimos los bytes a gramos de CO₂: el resultado depende del modelo de
cálculo y de su factor de energía por GB, y no hemos verificado ninguno. El dato
que sí hemos medido es el volumen transferido.
