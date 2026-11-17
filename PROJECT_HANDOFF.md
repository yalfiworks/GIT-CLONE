# Project handoff

## Estado

- Repositorio: `yalfiworks/GIT-CLONE`.
- Rama local: `main`.
- Estado: base web estática creada, validada localmente y lista para push.
- Último commit: `19dd3fe chore: bootstrap modern web starter`.
- No se ha hecho push desde este entorno.

## Qué incluye

- `index.html`: página inicial semántica con navegación, hero, principios, workflow y FAQ nativa.
- `styles.css`: capas CSS, tokens, responsive mobile-first, modo oscuro, foco visible y reduced motion.
- `app.js`: tema persistente, navegación móvil, año dinámico y reveal progresivo como mejora opcional.
- `AGENTS.md` y `README.md`: estructura, decisiones y convenciones.
- `.agents/skills/modern-web-guidance/` y `skills-lock.json`: reglas instaladas desde GoogleChrome/modern-web-guidance.

## Verificación realizada

```powershell
node --check app.js
git diff --check
python -m http.server 8765
Invoke-WebRequest http://127.0.0.1:8765/
```

La respuesta local fue `200` y el documento incluyó `main`, `styles.css` y `app.js`.

## Siguiente paso

Desde este directorio, subir la rama:

```powershell
git push -u origin main
```

Después conviene revisar el sitio en móvil, teclado, modo oscuro y `prefers-reduced-motion` antes de abrir el Pull Request si el repositorio está configurado para PRs.
