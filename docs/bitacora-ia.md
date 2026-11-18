# Bitácora de uso de IA

Herramienta: **Claude Code** (Anthropic). Reglas del proyecto en `CLAUDE.md`.
Cada entrada resume el prompt, qué devolvió la IA, si era correcto y qué cambió
el equipo. Las marcadas con ⚠️ son los **cinco fallos más graves** detectados.

| # | Fecha | Fase | Prompt (resumen) | Resultado | ¿Correcto? | ¿Qué cambié y por qué? |
|---|---|---|---|---|---|---|
| 1 | 2026-11-18 | Preparación | Leer el enunciado, los CSV y los temas UD1-UD3 y proponer stack. | Propuso HTML/CSS + JS vanilla como mejora progresiva, sin frameworks, para no romper V08, V12, V13 y V14. | Sí | Aceptado: el profesor permite JS, pero la checklist sigue exigiendo peso bajo, 0 terceros y BEM. |
| 2 | 2026-11-18 | Diseño | Calcular los ratios WCAG de la paleta. | Script con la fórmula WCAG 2.x; los 6 ratios del enunciado coinciden. | Sí | Añadimos parejas que el enunciado no daba: **Tierra sobre Arena = 3,83** (no pasa AA) → prohibido Tierra como texto en tarjetas. |
| 3 | 2026-11-18 | Datos | Copiar los CSV del Anexo B al repositorio. | Al revisarlos, `productores.csv` tiene un `;` dentro de la descripción de PR2: esa fila tiene 7 campos y la cabecera 6. | Defecto en los datos de origen | Se usa el texto del PDF («Rebaño de 120 cabras y 80 ovejas»); queda como riesgo R2 para confirmar con el cliente. |
| 4 | 2026-11-18 | Diseño | Redactar tokens en dos capas (paleta → roles) y modo oscuro. | `tokens.css` con 8 colores de marca, 15 roles y escalas en `rem`. | Revisar | El modo oscuro necesitó un color nuevo (`#2A382E`). Se documenta en el doc 02 porque no está en el Anexo C. |
| 5 | 2026-11-18 | Diseño | Proponer direcciones visuales con maquetas móviles. | Tres maquetas (Mercado, Cuaderno de campo, App) con paleta y datos reales. | Sí | Elegimos **B como base + etiquetas de precio de A**. C descartada por genérica. Decisión documentada en el doc 02. |
| 6 | 2026-11-18 | Diseño | Maquetar Inicio y Catálogo a 360 y 1280 px con la dirección elegida. | Wireframes en alta. El primer borrador del catálogo incluía la frase «Precios con IVA». | ⚠️ No | **Dato inventado**: el Anexo B no dice nada del IVA. Se eliminó antes de aprobar la maqueta. |
| 7 | 2026-11-18 | Diseño | Ajustar `tokens.css` a la cabecera clara. | Eliminó los roles de cabecera verde. | Sí | Motivo comprobado: Tierra sobre Verde da 1,54:1, el foco no se vería en una cabecera verde. |
| 8 | 2026-11-18 | Experimento 4.4 | Prompt vago y prompt estructurado, cada uno en un subagente nuevo sin contexto. | Vago: una sola página de otra cooperativa con datos inventados. Estructurado: 4 páginas, 0 errores W3C, Lighthouse 100. | ⚠️ Vago no / Estructurado casi | El estructurado añadió **campos de datos personales no pedidos** (dirección, CP, localidad, día) y envió el HTML a validator.w3.org por su cuenta. Lo anotamos para nuestro formulario: solo los campos del RF5. |
