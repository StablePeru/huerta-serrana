# Contexto para la IA · Proyecto Huerta Serrana

Sitio web estático de 4 páginas para una cooperativa ficticia (caso práctico de
Ingeniería Web I, UAX 2026-27). La IA escribe borradores; el equipo decide,
revisa línea a línea y verifica. Nada se da por terminado sin evidencia.

## Reglas obligatorias

1. **Sin frameworks ni librerías.** HTML5 + CSS3 escritos a mano. JavaScript
   vanilla permitido por el profesor solo como **mejora progresiva**: cada página
   debe funcionar y mostrar todo su contenido con JS desactivado.
2. **Sin recursos externos en tiempo de ejecución**: nada de CDN, Google Fonts,
   analítica, iframes ni imágenes remotas. El sitio funciona con la red cortada.
3. **Contenido solo de `docs/datos/` (CSV del Anexo B)** (productos, productores, cestas, datos
   de la cooperativa). No inventar precios, certificaciones, testimonios,
   productores, horarios ni direcciones. Si falta un dato, preguntar.
4. **CSS**
   - Colores, tamaños, espaciados y radios **solo** con variables de
     `css/tokens.css`. Cero valores sueltos fuera de ese fichero.
   - Clases **BEM** en español (`.tarjeta`, `.tarjeta__titulo`, `.tarjeta--destacada`).
   - Sin estilos en línea, sin `!important`, sin IDs para estilar, sin `float`
     para maquetar. Mobile-first con `min-width: 48em` (768 px) y `80em` (1280 px).
   - Tamaños de letra en `rem`, nunca en `px`.
5. **HTML**
   - Semántico: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`.
   - Un solo `h1` por página, sin saltar niveles.
   - `lang="es"`, `meta viewport`, `title` y `meta description` únicos por página.
   - Toda `img` con `alt` significativo (o `alt=""` si es decorativa) y `width`/`height`.
   - Formularios con `label` asociada, `type` y `autocomplete` correctos.
6. **Accesibilidad**: foco visible, todo usable con teclado, contraste ≥ 4,5:1
   en texto normal. Miel (`--color-destacado`) y Gris musgo nunca como color de texto
   sobre Crema. Tierra no se usa como texto sobre Arena (3,83:1).
7. **JavaScript**: `"use strict"` implícito con `type="module"`, `const`/`let`,
   `addEventListener`, sin `innerHTML` con datos del usuario, sin dependencias.
8. **Git**: commits pequeños con Conventional Commits (`feat:`, `fix:`, `docs:`,
   `style:`, `refactor:`, `test:`, `chore:`). Una rama por funcionalidad.

## Estructura

```
index.html · catalogo.html · productores.html · contacto.html
css/tokens.css → base.css → layout.css → components.css
js/main.js        (mejoras progresivas)
img/              (SVG propios)
docs/             (briefing, diseño, bitácora, verificación, reflexión)
```

## Definition of Done de cada petición

- Validador W3C sin errores.
- Contraste ≥ 4,5:1 en texto normal.
- Sin scroll horizontal a 360, 768 y 1280 px.
- Navegable con Tab / Mayús+Tab y foco visible.
- Explicar en pocas líneas qué hace cada regla nueva.
- No marcar nada como terminado si algo no se cumple.
