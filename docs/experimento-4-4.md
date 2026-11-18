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

## Resultados

Fecha de la prueba: ______ · Herramienta: Claude Code (modelo: ______)

### Checklist V01-V15

| Id | Criterio | Vago | Estructurado | Qué explica la diferencia |
|---|---|---|---|---|
| V01 | Documento válido (W3C) | | | |
| V02 | Un h1, sin saltos | | | |
| V03 | Imágenes con alt y medidas | | | |
| V04 | Teclado y foco visible | | | |
| V05 | Contraste ≥ 4,5:1 | | | |
| V06 | Formulario accesible | | | |
| V07 | Sin scroll horizontal | | | |
| V08 | ≤ 500 KB | | | |
| V09 | ≤ 15 peticiones | | | |
| V10 | Lighthouse rendimiento ≥ 85 | | | |
| V11 | Lighthouse A11y/BP/SEO ≥ 90 | | | |
| V12 | 0 peticiones externas | | | |
| V13 | Todo con variables | | | |
| V14 | BEM, sin inline, sin IDs | | | |
| V15 | (no aplica: no hay repositorio) | — | — | — |

### Defectos típicos (tabla 4.5)

| # | Defecto | ¿Vago? | ¿Estructurado? | Ejemplo concreto |
|---|---|---|---|---|
| 1 | Sopa de div | | | |
| 2 | Varios h1 o saltos de nivel | | | |
| 3 | img sin alt / sin medidas | | | |
| 4 | Colores y tamaños sueltos, px | | | |
| 5 | Estilos en línea, !important | | | |
| 6 | CDN / Google Fonts | | | |
| 7 | Formulario sin label, type incorrecto | | | |
| 8 | Falta lang, viewport o title | | | |
| 9 | Contraste insuficiente | | | |
| 10 | Menú solo con :hover | | | |
| 11 | Contenido inventado | | | |
| 12 | Enlaces rotos o href="#" | | | |
| 13 | Técnicas obsoletas | | | |
| 14 | Comandos o paquetes inventados | | | |

### Conclusión (máx. 150 palabras)

_Pendiente de redactar con los resultados._
