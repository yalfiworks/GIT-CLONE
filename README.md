# Northstar web starter

Una base web estática, ligera y extensible, construida con HTML semántico, CSS moderno y JavaScript nativo. No requiere dependencias ni proceso de compilación: abre `index.html` directamente o sirve el directorio con cualquier servidor estático.

## Estructura

```text
.
├── .agents/skills/modern-web-guidance/  # Guías instaladas por el instalador oficial
├── app.js                              # Mejoras progresivas e interacción mínima
├── index.html                          # Documento semántico y contenido inicial
├── styles.css                          # Tokens, layout responsive y estados visuales
├── AGENTS.md                           # Convenciones de trabajo del repositorio
└── README.md                           # Esta guía
```

## Ejecutar localmente

```powershell
python -m http.server 8080
```

Después visita <http://localhost:8080>. También puedes usar cualquier servidor estático equivalente.

## Decisiones de la base

- HTML5 semántico con un único `main`, landmarks, skip link, `details` nativo y controles nativos.
- CSS por capas (`@layer`), tokens centralizados, tipografía fluida, layout mobile-first y soporte para modo oscuro.
- JavaScript como mejora progresiva: cambio de tema persistente, año dinámico, navegación móvil y aparición al entrar en viewport.
- Sin imágenes externas, fuentes remotas ni dependencias para favorecer el rendimiento inicial.
- Foco visible, zonas táctiles cómodas, `prefers-reduced-motion` y soporte de alto contraste.

## Validación rápida

Comprueba manualmente teclado, zoom, móvil estrecho, modo oscuro, reduced motion y los estados abiertos/cerrados de FAQ y navegación. Para una revisión posterior, añade un servidor de CI y validadores HTML/CSS según el producto final.

Las reglas instaladas se encuentran en `.agents/skills/modern-web-guidance/` y se registran en `AGENTS.md`.
