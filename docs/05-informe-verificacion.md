# 05 · Informe de verificación

> Informe en construcción. La checklist V01-V15 completa, con capturas, se
> rellena en la fase D y tras el despliegue.

## Registro de bugs

| Id | Fecha | Página | Gravedad | Descripción | Causa | Corrección | Origen |
|---|---|---|---|---|---|---|---|
| B01 | 2026-11-18 | contacto.html | Media | Scroll horizontal de 90 px a 360 px (falla V07). | El `select` toma el ancho de su opción más larga («Productos sueltos del catálogo…»). | `max-width: 100%` en `input`, `select` y `textarea` (`base.css`). Ahora: 17 px. | IA (fase A: texto largo en la opción) |
| B02 | 2026-11-18 | contacto.html | Media | Sigue habiendo 17 px de scroll horizontal a 360 px. | La tabla comparativa de 5 columnas no cabe en móvil. | Pendiente: componente tabla responsive en la fase C (RF7). | Diseño (tabla sin adaptar) |
| B03 | 2026-11-18 | css/layout.css | Baja | El validador CSS marca un error en `minmax(min(100%, var(--tarjeta-min)), 1fr)`. | Limitación del validador con `var()` dentro de `min()`: el CSS es válido. | Se movió el `min()` al token: `--tarjeta-min: min(100%, 16rem)`. 0 errores. | IA (fase B) |
