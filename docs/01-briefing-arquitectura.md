# 01 · Briefing y arquitectura

Proyecto: sitio web de Huerta Serrana S. Coop. · Ingeniería Web I · 2026-27

## 1. Objetivos SMART

| # | Objetivo | Indicador y cómo se mide | Plazo |
|---|---|---|---|
| O1 | Que el 90 % de las personas encuentre el precio de un producto en menos de 15 s desde el móvil. | Prueba con 5 personas en un móvil real, cronometrando desde Inicio hasta leer el precio de «Miel de brezo». | Final de la semana 2 |
| O2 | Que cada página cargue rápido en móvil: Lighthouse móvil ≥ 85 en Rendimiento y ≥ 90 en Accesibilidad, Buenas prácticas y SEO. | Informe de Lighthouse de las 4 páginas (V10, V11). | Final de la semana 2 |
| O3 | Que una persona pueda enviar una solicitud de pedido en menos de 2 minutos sin errores de validación sin explicar. | Prueba con teclado y móvil; el formulario indica qué campo falla y por qué. | Final de la semana 2 |

## 2. Usuarios y desafíos

**Marta, 34 años, Madrid capital.** Trabaja y vuelve a casa en metro. Compra desde
el móvil con una mano, a menudo con poca cobertura. Quiere saber qué hay de
temporada y cuánto cuesta la cesta familiar sin tener que escribir a nadie.

**Luis, 67 años, Torrelaguna.** Usa una tableta con el texto ampliado al 150 %.
Le cuesta leer letra pequeña o de poco contraste y desconfía de las webs que
piden demasiados datos. Quiere ver quién produce lo que compra.

| Desafío (UD1) | Cómo afecta a Huerta Serrana | Decisión concreta del sitio |
|---|---|---|
| **Heterogeneidad** | 80 % de visitas desde móvil; también tabletas, escritorio, lectores de pantalla y texto ampliado. | Diseño *mobile-first*, rejillas fluidas (Grid con `auto-fit`), tamaños en `rem`, HTML semántico, menú sin JS con `details/summary`, modo oscuro y movimiento reducido. |
| **Distribución** | Visitantes repartidos entre Madrid y la sierra, con conexiones lentas en la sierra. | Ficheros estáticos servidos desde la CDN del hosting (copias cerca del usuario); páginas pequeñas (≤ 500 KB). |
| **Seguridad** | El formulario recoge nombre, correo y teléfono. | Sin servidor propio ni base de datos que atacar; HTTPS del hosting; formulario mínimo (RGPD, minimización de datos); sin scripts de terceros; consentimiento explícito sin marcar. |
| **Rendimiento** | Público móvil impaciente; cada KB cuesta tiempo y energía. | Fuentes del sistema, SVG en vez de fotos pesadas, CSS en 4 ficheros pequeños, JS diferido y opcional, `width`/`height` en imágenes para evitar saltos (CLS). |

## 3. Historias de usuario (MoSCoW)

**Iteración 1 (semana 1) · Objetivo: esqueleto navegable con todo el contenido real.**

| Id | Historia | Criterios de aceptación | Prioridad |
|---|---|---|---|
| HU01 | Como visitante quiero navegar entre las 4 páginas desde el móvil para encontrar lo que busco. | Menú visible en todas las páginas; en < 768 px se pliega y abre sin JS; la página actual se marca con `aria-current`. | Must |
| HU02 | Como usuaria de teclado quiero saltar directamente al contenido para no recorrer el menú en cada página. | Primer Tab muestra «Saltar al contenido»; al activarlo el foco va a `main`. | Must |
| HU03 | Como visitante quiero ver los 12 productos con precio, unidad, productor, temporada y alérgenos. | Las 12 tarjetas coinciden con el Anexo B; precio con formato «3,90 €». | Must |
| HU04 | Como familia quiero comparar las 3 cestas para elegir la que me conviene. | Tabla con `caption` y `th scope`; legible a 360 px sin scroll horizontal de página. | Must |
| HU05 | Como visitante quiero conocer a los 4 productores para saber de dónde viene lo que compro. | Una ficha `article` por productor con localidad, especialidad, año y descripción. | Must |
| HU06 | Como clienta quiero entender cómo funciona el pedido en 3 pasos. | Sección en Inicio con 3 pasos numerados (lista ordenada). | Must |

**Iteración 2 (semana 2) · Objetivo: pedido accesible, calidad verificada y publicación.**

| Id | Historia | Criterios de aceptación | Prioridad |
|---|---|---|---|
| HU07 | Como clienta quiero solicitar un pedido o suscripción desde la web. | Formulario con nombre, correo, teléfono, cesta y comentarios; `label` en cada campo; validación nativa; RGPD sin marcar y obligatorio. | Must |
| HU08 | Como visitante quiero saber cómo se tratan mis datos. | Pie con responsable, finalidad, base jurídica, conservación y derechos (Anexo A). | Must |
| HU09 | Como visitante quiero filtrar el catálogo por temporada para ver solo lo que hay ahora. | Filtro por temporada; sin JS se ven todos los productos; con JS el filtro anuncia cuántos productos quedan. | Should |
| HU10 | Como visitante quiero resolver dudas frecuentes sin escribir. | Preguntas frecuentes con `details/summary` usando solo datos del Anexo A. | Should |
| HU11 | Como persona con sensibilidad al movimiento o que usa modo oscuro quiero que la web respete mis preferencias. | `prefers-reduced-motion` desactiva transiciones; `prefers-color-scheme: dark` cambia a la paleta oscura con contraste AA. | Could |
| HU12 | Como cooperativa quiero imprimir el catálogo para el mercado. | `@media print`: sin menú ni pie, tarjetas sin cortes entre páginas. | Could |
| HU13 | Como cooperativa quiero pago en línea. | Fuera de alcance: requiere servidor y pasarela (ver ADR). | Won't |

## 4. Decisión de arquitectura (ADR-001)

**Contexto.** 4 páginas de contenido que cambia pocas veces al año (precios,
temporadas). Presupuesto de alojamiento cero. Lo mantendrá una persona sin
formación técnica. Requisito de privacidad: sin cookies ni analítica.

**Pregunta clave (UD1): ¿qué necesita estado?** HTTP es un protocolo sin estado:
cada petición es independiente. Ver el catálogo, las cestas o los productores es
**contenido sin estado**: es igual para todo el mundo y se puede servir como
fichero. Lo único con estado sería *guardar un pedido*, y hoy el cliente ya lo
gestiona por correo/WhatsApp. Por tanto, el formulario puede componer un correo
(`mailto:`) o enviarse a un servicio de formularios en el futuro, sin servidor de
aplicaciones propio.

| Criterio | A · Estático (HTML/CSS en CDN, JAMstack sin JS obligatorio) | B · Monolito PHP + MySQL (XAMPP / hosting) | C · SPA + API + BD |
|---|---|---|---|
| Coste | 0 € (GitHub Pages / Netlify / Cloudflare Pages) | Hosting con PHP y BD: de pago o gratuito con límites | Dos despliegues (front + API) y BD: el más caro |
| Mantenimiento | Editar un HTML legible; sin actualizaciones de servidor | Panel de gestión cómodo, pero hay que actualizar PHP, BD y parches | Requiere perfil técnico (build, dependencias) |
| Rendimiento | Máximo: ficheros pequeños cacheados en CDN | Cada visita genera HTML en el servidor | Descarga inicial de JS pesada; peor en móvil lento |
| Seguridad | Superficie mínima: no hay código en servidor ni BD | Inyección SQL, XSS, credenciales de BD | Autenticación, CORS, API expuesta |
| Escalabilidad | La CDN absorbe picos sin coste | Limitada por el servidor | Buena, pero sobredimensionada para 4 páginas |

**Decisión: opción A, sitio estático.** Es la única que cumple a la vez coste
cero, privacidad, rendimiento móvil y mantenimiento sencillo. JavaScript se
añade solo como mejora progresiva (filtro y ayudas del formulario), nunca como
requisito para ver el contenido.

**¿Cuándo dejaría de servir?** Si mañana el cliente pidiera **pagos en línea**,
stock en tiempo real o cuentas de usuario. Eso exige estado en servidor
(sesiones, pedidos, inventario) y tratamiento seguro de pagos. Evolución
prevista sin rehacer el sitio: mantener las páginas estáticas y añadir una
pasarela de pago alojada (redirección al proveedor) o funciones *serverless*
para el pedido, en línea con JAMstack (UD1). Si además hubiera que gestionar
stock y usuarios a diario, se pasaría a un CMS o a un backend con BD (opción B o C).

## 5. Riesgos

| Id | Tipo | Riesgo | Prob. | Impacto | Respuesta |
|---|---|---|---|---|---|
| R1 | Uso de IA | La IA inventa datos (precios, certificaciones, testimonios). | Alta | Alto | Regla en `CLAUDE.md`; revisión dato a dato contra `docs/datos/`; registro en bitácora. |
| R2 | Contenido | Los datos oficiales tienen erratas o inconsistencias (p. ej., PR2 en `productores.csv` tiene un `;` dentro de la descripción y rompe el CSV; C1 dice «1 huevos»). | Media | Medio | Usar el texto del PDF como fuente; anotar la incidencia y confirmarla con el cliente antes de publicar. |
| R3 | Accesibilidad | Colores de marca con contraste insuficiente (Miel 1,75:1, Gris musgo 3,06:1, Tierra sobre Arena 3,83:1). | Alta | Alto | Restringir su uso (doc 02) y verificar con DevTools (V05). |
| R4 | Legal (RGPD) | Recoger más datos de los necesarios o casillas premarcadas; cargar recursos de terceros que filtran la IP. | Media | Alto | Formulario mínimo, consentimiento sin marcar, 0 peticiones externas (V12), aviso de privacidad del Anexo A. |
| R5 | Técnico | El formulario no puede guardar pedidos sin servidor. | Alta | Medio | Envío vía `mailto:` documentado como limitación; evolución prevista en el ADR. |
| R6 | Técnico | Dependencia de JS para ver contenido. | Baja | Alto | Mejora progresiva: probar cada página con JS desactivado. |
| R7 | Plazo | Dos semanas con equipo pequeño. | Media | Medio | Iteraciones con objetivo claro, MoSCoW y commits pequeños. |
