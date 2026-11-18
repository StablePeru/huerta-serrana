# 02 · Diseño y sistema visual

## 0. Dirección visual

Comparamos tres direcciones con maquetas móviles: **A · Puesto de mercado**
(precios como etiquetas), **B · Cuaderno de campo** (editorial, temporada como
protagonista) y **C · App de pedidos** (tarjetas redondeadas, chips).

**Decisión: B como base + las etiquetas de precio de A.**

- B transmite el tono del cliente («cercano, sobrio, nada de granja de postal»):
  mucho aire, titulares en Georgia, líneas finas y una ilustración lineal de la
  sierra. Es la más ligera (texto y SVG).
- Las etiquetas de A se usan donde hay precio (catálogo y cestas): el precio es
  lo más visible, que es lo que mide el objetivo O1 («precio en < 15 s»).
- C se descarta por genérica y porque pierde la identidad serrana.

Decisiones fijadas en la maqueta en alta (Inicio y Catálogo, 360 y 1280 px):

| Elemento | Decisión | Motivo |
|---|---|---|
| Cabecera | Fondo Crema con línea fina Gris musgo; logo en Georgia cursiva Verde | El verde sólido pesaba demasiado; el verde se reserva para títulos, enlaces y botón principal. |
| Precios | Etiqueta Arena con el precio grande a la derecha y la unidad debajo | El precio es lo primero que se ve (objetivo O1). |
| Aviso de temporada | Franja de 12 meses; los meses actuales con fondo Miel y texto Tinta | Miel solo como fondo (7,87:1 con Tinta). |
| Filtro | Chips por temporada; sin JS se ven los 12 productos | Mejora progresiva. |
| Alérgenos | Píldora solo si el producto los tiene; con «—» no se muestra | Menos ruido; la ausencia se entiende. |
| Pie | Fondo Arena con la privacidad del Anexo A | Separa visualmente el contenido legal. |

## 1. Mapa del sitio y encabezados

```
                 ┌──────────────┐
                 │  index.html  │  Inicio
                 └──────┬───────┘
     ┌──────────────────┼──────────────────┐
┌────┴─────────┐ ┌──────┴──────────┐ ┌─────┴────────┐
│catalogo.html │ │productores.html │ │contacto.html │
└──────────────┘ └─────────────────┘ └──────────────┘
Navegación plana: las 4 páginas están en el menú de todas las páginas.
```

| Página | h1 | h2 | h3 |
|---|---|---|---|
| Inicio | De la huerta a tu mesa en menos de 48 horas | Temporada de otoño (`aside`) · Cómo funciona · Nuestras cestas | Cada paso · Cada cesta |
| Catálogo | Catálogo de temporada | Productos (el filtro va dentro, como `fieldset` con `legend`) | Nombre de cada producto |
| Productores | Quiénes producen | Una por productor (h2 dentro de su `article`) · La cooperativa en datos (`aside`) | — |
| Contacto y pedido | Contacto y pedido | Solicita tu pedido · Compara las cestas · Preguntas frecuentes · Contacto directo | — |

El pie (`footer`) de todas las páginas usa h2 «Aviso legal y privacidad».

## 2. Wireframes (Inicio y Catálogo)

**Inicio · 360 px**

```
┌─────────────────────────┐
│[Saltar al contenido]    │ ← enlace oculto hasta recibir foco
│ HEADER  logo   [Menú ▾] │ ← nav dentro de details/summary
├─────────────────────────┤
│ MAIN                    │
│ ┌ section.portada ────┐ │
│ │ h1 titular          │ │
│ │ subtítulo           │ │
│ │ [Ver cestas] [Pedir]│ │
│ │ ilustración SVG     │ │
│ └─────────────────────┘ │
│ ┌ aside.aviso ────────┐ │ ← aviso de temporada
│ └─────────────────────┘ │
│ ┌ section Cómo func. ─┐ │
│ │ 1 · 2 · 3 (apilados)│ │
│ └─────────────────────┘ │
│ ┌ section Cestas ─────┐ │
│ │ [tarjeta C1]        │ │
│ │ [tarjeta C2]        │ │
│ │ [tarjeta C3]        │ │
│ └─────────────────────┘ │
├─────────────────────────┤
│ FOOTER privacidad       │
└─────────────────────────┘
```

**Inicio · 1280 px**

```
┌──────────────────────────────────────────────────────────┐
│ HEADER  logo        Inicio  Catálogo  Productores  Contacto│ ← nav en línea
├──────────────────────────────────────────────────────────┤
│ MAIN  ┌ section.portada ─────────────┬──────────────────┐ │
│       │ h1 · subtítulo · botones      │  ilustración SVG │ │
│       └───────────────────────────────┴──────────────────┘ │
│       ┌ aside.aviso de temporada ──────────────────────────┐│
│       ┌ Cómo funciona: [ 1 ]   [ 2 ]   [ 3 ]  (3 columnas)┐ │
│       ┌ Cestas:        [ C1 ]  [ C2 ]  [ C3 ] (3 columnas)┐ │
├──────────────────────────────────────────────────────────┤
│ FOOTER  aviso legal y privacidad (2 columnas)            │
└──────────────────────────────────────────────────────────┘
```

**Catálogo · 360 px / 1280 px**

```
360 px                         1280 px
┌──────────────────┐           ┌───────────────────────────────────────────┐
│ HEADER           │           │ HEADER                                     │
├──────────────────┤           ├───────────────────────────────────────────┤
│ h1               │           │ h1 Catálogo de temporada                   │
│ form.filtro      │           │ form.filtro (temporadas en una fila)       │
│ (radios apilados)│           │ ┌──────┐┌──────┐┌──────┐┌──────┐            │
│ ┌──────────────┐ │           │ │ P01  ││ P02  ││ P03  ││ P04  │ 4 columnas │
│ │ article P01  │ │           │ └──────┘└──────┘└──────┘└──────┘            │
│ └──────────────┘ │           │ … 3 filas (Grid auto-fit, minmax 16rem)    │
│ … 12 tarjetas    │           │                                            │
├──────────────────┤           ├───────────────────────────────────────────┤
│ FOOTER           │           │ FOOTER                                     │
└──────────────────┘           └───────────────────────────────────────────┘
```

## 3. Design tokens (`css/tokens.css`)

| Grupo | Tokens | Decisión y motivo |
|---|---|---|
| Paleta | `--color-primario` … `--color-apagado` | Copia literal del Anexo C, con el mismo nombre de token. |
| Roles | `--ui-fondo`, `--ui-texto`, `--ui-enlace`, `--ui-boton-fondo`… | Los componentes no usan la paleta directamente, sino el **rol**. Así el modo oscuro redefine 13 roles y no toca ningún componente. |
| Tipografía | `--fuente-texto: system-ui…`, `--fuente-titulos: Georgia…` | Fuentes del sistema: 0 KB y 0 peticiones externas. Georgia da calidez a los titulares sin sonar a «granja de postal». |
| Escala de texto | `--tam-xs` (0,8 rem) … `--tam-xl` (1,953 rem), `--tam-hero` con `clamp()` | Escala modular 1,25. En `rem` para respetar el tamaño de letra que elige cada persona (Luis usa 150 %). |
| Espaciado | `--espacio-1` (4 px) … `--espacio-8` (64 px) | Múltiplos de 4 px: ritmo vertical coherente y fácil de recordar. |
| Radios | `--radio-sm/md/lg/pildora` | Esquinas suaves y sobrias. |
| Maquetación | `--ancho-max: 72rem`, `--ancho-lectura: 65ch`, `--tarjeta-min: 16rem`, `--objetivo-tactil: 2,75rem` | Líneas legibles; 44 px mínimo para objetivos táctiles (WCAG 2.5.5). |

**Breakpoints:** 48em (768 px) y 80em (1280 px). Van en `em` y no en variables
porque CSS no permite `var()` dentro de `@media`.

## 4. Tabla de contraste

Calculada con la fórmula WCAG 2.x. La comprobación medida en la web publicada
está en `docs/05-informe-verificacion.md` (apartado V05).

| Texto sobre fondo | Ratio | AA normal (≥ 4,5) | AA grande (≥ 3) | Decisión de uso |
|---|---|---|---|---|
| Tinta sobre Crema | 13,78 | Sí | Sí | Texto de cuerpo |
| Verde sierra sobre Crema | 7,08 | Sí | Sí | Títulos y enlaces |
| Blanco sobre Verde sierra | 7,64 | Sí | Sí | Botón principal, cabecera |
| Tierra sobre Crema | 4,59 | Sí (por poco) | Sí | Solo como **fondo** del botón secundario (Blanco sobre Tierra: 4,96) y como contorno de foco. No como texto de párrafo: con un tono algo más claro o a 12 px dejaría de ser legible. |
| Miel sobre Crema | 1,75 | No | No | **Prohibido como texto.** Solo decorativo (bordes, iconos) o como fondo con Tinta encima (7,87). |
| Gris musgo sobre Crema | 3,06 | No | Sí | **Prohibido como texto.** Solo bordes de campos y separadores (contraste de componentes ≥ 3:1). |

Parejas adicionales comprobadas por el equipo:

| Texto sobre fondo | Ratio | Decisión |
|---|---|---|
| Tinta sobre Arena | 11,50 | Texto dentro de tarjetas |
| Verde sierra sobre Arena | 5,91 | Títulos dentro de tarjetas |
| **Tierra sobre Arena** | **3,83** | **No pasa AA para texto normal.** No se usa Tierra dentro de tarjetas. |
| Tierra sobre Verde sierra | 1,54 | Por esto la cabecera no es verde: el foco Tierra no se vería sobre ella. |
| Crema sobre Tinta (oscuro) | 13,78 | Texto en modo oscuro |
| Miel sobre Tinta (oscuro) | 7,87 | Títulos y enlaces en modo oscuro |
| Crema sobre `#2A382E` (oscuro) | 11,42 | Texto en tarjetas en modo oscuro |
| Miel sobre `#2A382E` (oscuro) | 6,52 | Títulos en tarjetas en modo oscuro |

**¿Por qué Tierra pasa tan justo?** 4,59 está a solo 0,09 del umbral. Un tono
ligeramente más claro bajaría de 4,5 y suspendería. Y a 12 px el texto es más
fino, así que aunque el ratio sea el mismo, se lee peor: WCAG pide 4,5 para
texto normal precisamente porque los trazos finos se pierden antes.

**Modo oscuro:** `#2A382E` es el único color nuevo. Es Tinta aclarado para
distinguir tarjetas del fondo; se documenta aquí porque no está en el Anexo C.

## 5. Textos de la portada

**Titular (h1):** De la huerta a tu mesa en menos de 48 horas

**Subtítulo:** Somos cuatro productores de la Sierra Norte de Madrid. Vendemos
sin intermediarios verdura, fruta, queso, miel y pan, y lo repartimos en Madrid
capital y en la sierra los jueves y los sábados.

**Cómo funciona (3 pasos):**

1. **Elige.** Mira el catálogo de temporada o escoge una de nuestras tres cestas.
2. **Pide con 48 horas de antelación.** Rellena el formulario de pedido o
   escríbenos a pedidos@huertaserrana.example.
3. **Recibe.** Repartimos los jueves y los sábados en Madrid capital y en los
   municipios de la sierra.

Todos los datos salen de los Anexos A y B (lema, productores, zona, días de
reparto y antelación). No se añaden testimonios, certificaciones ni promesas.
