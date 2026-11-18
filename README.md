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
y Live Server (`.vscode/extensions.json`). Navegador de pruebas: *anotar versión
de Chrome (chrome://version)*.

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
│   ├── layout.css        Contenedor, cabecera, pie y rejillas
│   └── components.css    Componentes BEM (tarjeta, botón, tabla, formulario…)
├── js/main.js            Mejoras progresivas (opcionales)
├── img/                  SVG propios
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
| JavaScript solo como mejora progresiva | Todo el contenido está en el HTML; JS añade el filtro del catálogo y ayudas del formulario. Con JS desactivado la web funciona igual. |
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
| `05-informe-verificacion.md` | Checklist V01-V15 con evidencias |
| `datos/` | CSV oficiales del caso (Anexos B, C y D) |

## Créditos de imágenes

Todas las imágenes son **SVG dibujados para este proyecto** (código propio,
sin recursos de terceros). No se usan bancos de imágenes.

## Política de uso de IA del equipo

1. La IA escribe borradores; el equipo especifica, revisa y verifica cada línea.
2. Las reglas del proyecto están en `CLAUDE.md` para no repetirlas en cada prompt.
3. Todo prompt significativo se registra en `docs/bitacora-ia.md`, con sus fallos.
4. Ningún dato sale de fuera de `docs/datos/`: si la IA inventa contenido, es un defecto.
5. No se pegan credenciales ni datos personales en la herramienta.
6. Si la IA propone instalar algo, se comprueba en el registro oficial antes.
7. «Funciona» no es una prueba: cada entrega se verifica con la checklist V01-V15.
