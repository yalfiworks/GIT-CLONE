# Guías de trabajo

## Alcance

Este repositorio es una base web estática sin framework. Los cambios deben preservar una experiencia rápida, semántica, accesible y usable con teclado, lector de pantalla, móvil y escritorio.

## Estructura

- `index.html`: estructura y contenido semánticos.
- `styles.css`: tokens de diseño, componentes y responsive.
- `app.js`: mejoras progresivas, sin asumir que JavaScript está disponible para leer el contenido.
- `README.md`: puesta en marcha y decisiones del starter.
- `.agents/skills/modern-web-guidance/`: guías instaladas desde `GoogleChrome/modern-web-guidance` mediante `npx modern-web-guidance@latest install`.

## Convenciones

1. Preferir HTML nativo antes que ARIA o controles simulados.
2. Mantener un único `main`, landmarks bien definidos, jerarquía de encabezados y skip link.
3. Mantener `:focus-visible`, navegación por teclado, contraste y soporte de `prefers-reduced-motion`.
4. Diseñar mobile-first y evitar alturas fijas que corten contenido o provoquen scroll horizontal.
5. No incorporar dependencias, fuentes remotas o imágenes pesadas sin una razón de producto.
6. Verificar cambios en móvil y escritorio antes de hacer commit.

## Modern Web Guidance aplicado

Se consultaron y aplicaron las guías `accessibility`, `html`, `css`, `responsive-design`, `performance` y `natural-interactions`. El instalador y el bloqueo de versiones quedan registrados en `skills-lock.json`.
