# Experimento 4.4 · Prompt vago frente a prompt estructurado

## Cómo se hace

1. Crear dos carpetas **vacías y fuera de este repositorio** (por ejemplo,
   `Uni/experimento-vago` y `Uni/experimento-estructurado`). Así la IA no lee
   `CLAUDE.md` ni nada del proyecto.
2. Abrir **una sesión nueva** de Claude Code en cada carpeta.
3. Pegar el prompt correspondiente **una sola vez** y aceptar lo que genere,
   sin corregir nada.
4. Abrir el resultado en el navegador y pasar la misma checklist (V01-V15 y los
   defectos de la tabla 4.5).
5. Guardar capturas en `docs/capturas/experimento-*.png` y rellenar las tablas.

## Prompt 1 · Vago

```
Hazme una web para una cooperativa de productos locales
```

## Prompt 2 · Estructurado

```
CONTEXTO: Sitio web estático para «Huerta Serrana S. Coop.», cooperativa de cuatro
productores de la Sierra Norte de Madrid. Público: familias y jóvenes, 80 % desde
móvil. Tono: cercano, directo, sin superlativos. Lema: «De la huerta a tu mesa en
menos de 48 horas». Reparto en Madrid capital y la sierra los jueves y sábados;
pedidos con 48 h de antelación. Contacto: pedidos@huertaserrana.example · 910 000 000.

TAREA: Crea 4 páginas: index.html (portada, cómo funciona en 3 pasos, 3 cestas,
aviso de temporada), catalogo.html (12 productos en tarjetas), productores.html
(4 fichas article + un aside) y contacto.html (formulario de pedido + tabla
comparativa de cestas). CSS en css/tokens.css, base.css, layout.css y components.css.

CONTENIDO (únicos datos permitidos, no inventes ninguno):
Productos (id;producto;categoría;precio €;unidad;productor;temporada;alérgenos):
P01;Tomate rosa de la sierra;Verdura;3,90;kg;Huerto Los Álamos;Verano;—
P02;Calabaza de invierno;Verdura;1,80;kg;Huerto Los Álamos;Otoño;—
P03;Judías verdes;Verdura;4,20;kg;Huerto Los Álamos;Verano;—
P04;Manzana reineta;Fruta;2,60;kg;Huerto Los Álamos;Otoño;—
P05;Queso curado de cabra;Lácteo;18,50;kg;Quesería La Peña;Todo el año;Leche
P06;Yogur natural de oveja;Lácteo;2,10;unidad;Quesería La Peña;Todo el año;Leche
P07;Miel de romero;Despensa;7,50;bote 500 g;Apiarios del Jarama;Primavera;—
P08;Miel de brezo;Despensa;8,90;bote 500 g;Apiarios del Jarama;Verano;—
P09;Pan de centeno de masa madre;Panadería;3,40;hogaza;Horno de Piedra;Todo el año;Gluten
P10;Magdalenas de aceite de oliva;Panadería;3,95;caja 6 uds;Horno de Piedra;Todo el año;Gluten, huevo
P11;Huevos camperos;Despensa;3,20;docena;Huerto Los Álamos;Todo el año;Huevo
P12;Mermelada de higo;Despensa;4,80;bote 250 g;Horno de Piedra;Otoño;—
Productores (nombre;localidad;especialidad;desde;descripción):
Huerto Los Álamos;Buitrago del Lozoya;Hortalizas, fruta y huevos;2009;Finca familiar de 6 hectáreas con riego por goteo y certificación ecológica en trámite.
Quesería La Peña;Lozoyuela;Quesos y yogures;2014;Rebaño de 120 cabras y 80 ovejas.
Apiarios del Jarama;El Atazar;Miel;2011;Cuarenta colmenas trashumantes entre el romero de primavera y el brezo de verano.
Horno de Piedra;Torrelaguna;Pan y repostería;2017;Horno de leña con masa madre propia y harinas de molino local.
Cestas (nombre;precio/mes €;personas;contenido;entrega):
Cesta Pareja;38;1-2;Verdura y fruta de temporada, 1 pan, 1 huevos;Semanal
Cesta Familia;62;3-4;Verdura y fruta de temporada, 2 panes, 1 docena de huevos, 1 queso o yogures;Semanal
Cesta Despensa;45;2-4;Miel, mermelada, queso curado, magdalenas y 1 pan;Quincenal
Paleta: --color-primario #2F5D3A, --color-fondo #FAF6EC, --color-acento #B5532A,
--color-texto #1F2A22, --color-superficie #E8E2D2, --color-destacado #F2B134 (solo
decorativo), --color-apagado #8A8F86 (no apto para texto).

RESTRICCIONES: HTML5 semántico (header, nav, main, section, article, aside, footer);
un solo h1 por página sin saltar niveles; lang="es", meta viewport y title único;
sin frameworks, sin CDN ni fuentes externas (system-ui y Georgia); todos los colores,
tamaños y espaciados con variables CSS; tamaños de letra en rem; clases BEM; sin estilos
en línea, sin !important, sin IDs para estilar; mobile-first con breakpoints 768 y
1280 px; menú plegable en móvil con details/summary y enlace «saltar al contenido»;
formulario con label, type y autocomplete correctos y consentimiento RGPD sin marcar;
tabla de cestas con caption y th scope; imágenes con alt, width y height.

DEFINITION OF DONE: 0 errores en el validador W3C; contraste ≥ 4,5:1 en texto normal;
sin scroll horizontal a 360, 768 y 1280 px; navegable con teclado y foco visible;
0 peticiones a otros dominios; ≤ 500 KB por página. No marques nada como terminado
si algo no se cumple.
```


## Cómo se ejecutó realmente

- **Fecha:** 2026-11-18 · **Herramienta:** Claude Code (Claude Opus 5.5).
- Cada prompt se lanzó en un **subagente nuevo de Claude Code** (sin el contexto de
  la conversación ni el `CLAUDE.md` del proyecto), en una carpeta vacía:
  `Uni/experimento-vago` y `Uni/experimento-estructurado`.
- **Limitación:** un subagente no es exactamente una sesión nueva abierta a mano
  (comparte modelo y configuración global de la herramienta). Se indica para la defensa.
- Ambos resultados se midieron igual: validador Nu del W3C en local (`vnu.jar`
  26.10.12), Lighthouse 13.6.0 en modo móvil, servidor local sin caché
  (`http-server -c-1`), comprobación de scroll a 360/768/1280 px en el navegador
  y un script de auditoría del CSS/HTML.
- Observación: el subagente estructurado envió por su cuenta su HTML a
  validator.w3.org y su CSS a jigsaw.w3.org para cumplir la DoD. Los datos son
  ficticios, pero es un envío a un servicio externo que nadie pidió.

## Resultados

### Lo primero: ¿hizo lo que se pedía?

| | Vago | Estructurado |
|---|---|---|
| Páginas | **1** (todo en `index.html`) | **4**, las pedidas |
| Cooperativa | Inventada: «La Huerta Común» | Huerta Serrana |
| Productos | **16 inventados** con precios inventados | Los 12 del Anexo B |
| Ficheros | `index.html`, `styles.css`, `script.js` | 4 HTML, 4 CSS, 1 JS (439 B), 2 SVG |

### Checklist V01-V15

| Id | Criterio | Vago | Estructurado | Qué explica la diferencia |
|---|---|---|---|---|
| V01 | Documento válido (W3C) | ❌ 1 error: `role="tab"` sin `tabpanel` | ✅ 0 errores, 0 avisos (4 páginas) | El prompt exigía 0 errores en la DoD y la IA lo comprobó. |
| V02 | Un h1, sin saltos | ✅ | ✅ | Ambos lo hacen bien por defecto. |
| V03 | Imágenes con alt y medidas | ✅ (no hay `img`, solo SVG en línea) | ✅ | — |
| V04 | Teclado y foco visible | ⚠️ Lighthouse: elementos enfocables dentro de `aria-hidden` | ✅ Enlace «saltar al contenido», estilos `:focus-visible` (prueba manual pendiente) | Restricción explícita de «saltar al contenido» y foco visible. |
| V05 | Contraste ≥ 4,5:1 | ❌ Lighthouse marca contraste insuficiente | ✅ Mínimo 4,59:1 | El prompt dio la paleta y avisó de qué colores no valen para texto. |
| V06 | Formulario accesible | ⚠️ Buscador sin `label` | ✅ `label`, `type` y `autocomplete` correctos | Restricción explícita. |
| V07 | Sin scroll horizontal | ✅ | ✅ | — |
| V08 | ≤ 500 KB | ✅ 146,5 KB (la mayoría, fuentes de Google) | ✅ 25-30 KB por página | Fuentes del sistema frente a fuentes descargadas. |
| V09 | ≤ 15 peticiones | ✅ 6 | ✅ 7-8 | — |
| V10 | Lighthouse rendimiento ≥ 85 | ✅ 94 | ✅ 100 (las 4) | — |
| V11 | Lighthouse A11y/BP/SEO ≥ 90 | ✅ 94 / 96 / 100 | ✅ 100 / 100 / 100 | — |
| V12 | 0 peticiones externas | ❌ `fonts.googleapis.com`, `fonts.gstatic.com` | ✅ 0 | El prompt prohibía CDN y fuentes externas. |
| V13 | Todo con variables | ❌ 10 colores y 83 espaciados sueltos | ✅ 0 valores sueltos | Restricción explícita. |
| V14 | BEM, sin inline, sin IDs | ❌ 6 selectores BEM, 4 `style=""`, 2 `!important` | ✅ 50 selectores BEM, 0 inline, 0 `!important` | Restricción explícita. |
| V15 | Historial (no aplica: sin repositorio) | — | — | — |

### Defectos típicos (tabla 4.5)

| # | Defecto | Vago | Estructurado | Ejemplo concreto |
|---|---|---|---|---|
| 1 | Sopa de div | Parcial | No | Vago: 46 `div` y 6 `header` (usa `header` dentro de tarjetas). |
| 2 | Varios h1 o saltos | No | No | — |
| 3 | img sin alt / medidas | No | No | — |
| 4 | Colores y tamaños sueltos | **Sí** | No | Vago: `color: #fff`, `left: 16px`, `margin: 0 0 1em`. |
| 5 | Estilos en línea, `!important` | **Sí** | No | Vago: 4 atributos `style`, 2 `!important`. |
| 6 | CDN / Google Fonts | **Sí** | No | Vago: Fraunces e Inter desde Google Fonts. |
| 7 | Formulario sin label | Parcial | No | Vago: buscador sin etiqueta. |
| 8 | Falta lang, viewport o title | No | No | — |
| 9 | Contraste insuficiente | **Sí** | No | Detectado por Lighthouse en el vago. |
| 10 | Menú solo con `:hover` | Sin comprobar | No | Estructurado: `details/summary`. |
| 11 | **Contenido inventado** | **Sí, masivo** | **Leve** | Vago: «34 familias», «Calle de la Huerta, 12», horarios, distancias en km, 16 productos. Estructurado: muestra «No declarados» para alérgenos «—» y añade al formulario dirección, código postal, localidad y día de entrega, que no se pedían. |
| 12 | Enlaces rotos o `#` | No | No | — |
| 13 | Técnicas obsoletas | No | No | — |
| 14 | Paquetes inventados | No | No | — |

Otros hallazgos:

- **Vago:** el catálogo se pinta con JavaScript (`innerHTML`): sin JS no hay productos. Guarda un carrito en `localStorage`, algo que nadie pidió y que choca con «sin cookies».
- **Estructurado:** el aviso de temporada está fijo en otoño (habrá que editarlo cada estación). Copia «1 huevos» tal cual, sin señalar la errata.
- **Formulario del estructurado:** pedir dirección y día de entrega parece razonable para un reparto, pero el cliente pidió «solo los datos imprescindibles» y el RF5 lista los campos. Es una decisión de producto que la IA tomó sola.

## Conclusión

Con el prompt vago la IA **no hizo el encargo**: una página, otra cooperativa y
datos inventados. Aun así sacó buena nota en Lighthouse (94-100). Esa es la lección
principal: **las herramientas automáticas no detectan que el contenido es falso ni
que faltan páginas**. Eso solo lo ve quien conoce el briefing.

Con el prompt estructurado, el contexto, los datos y la Definition of Done
convirtieron casi cada restricción en un criterio cumplido: 0 errores W3C, 0
terceros, 0 valores sueltos y 100 en Lighthouse. Los fallos que quedan son más
sutiles: campos de datos personales no pedidos y textos interpretados («No
declarados»). Para verlos hay que dominar el RGPD y el Anexo B. La IA rinde según
lo bien que se especifica, y revisar sigue siendo trabajo nuestro.
