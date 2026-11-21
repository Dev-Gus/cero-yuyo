# Cero Yuyo

Sitio estático de Cero Yuyo, hecho con Astro, TypeScript estricto y Tailwind CSS. Leé PROJECT.md antes de trabajar.

## Node e instalación

El requisito del proyecto es Node `>=22.23.4`. La versión fijada para despliegue es **24.22.1**, registrada en `.node-version`. Configurá también `NODE_VERSION=24.22.1` en el entorno de build de Cloudflare.

```sh
npm ci
```

## Desarrollo

```sh
npm run dev
```

## Build y verificación

```sh
npm run build
npx astro check
npm run preview
```

El build genera `dist/`. Preview permite revisar ese resultado localmente.

## Cloudflare Workers

- Nombre del proyecto y Worker: `cero-yuyo`.
- Versión de Node del build: `24.22.1`.
- Comando de build: `npm run build`.
- Directorio de salida: `dist`.
- Comando de despliegue: `npx wrangler deploy`.
- Configuración: `wrangler.jsonc`, solo assets estáticos, sin script de Worker.
- Las rutas inexistentes usan `dist/404.html` con estado 404 (`not_found_handling: "404-page"`).
- URL de Workers: `workers.dev`; sin dominio personalizado.

La conexión Git de Cloudflare usa este repositorio. Para un despliegue manual autorizado, ejecutá el build y luego `npx wrangler deploy` con una cuenta de Cloudflare autenticada.

## Alcance actual

Existen `/` y la página 404, en español (`es-UY`), sin JavaScript cliente ni dependencias nuevas. La página incluye servicios, proceso, presentación de Gustavo y contacto exclusivo por WhatsApp.

- Texto y tipos: `src/data/site.ts`.
- Enlace compartido de WhatsApp: `src/lib/whatsapp.ts` y `src/components/WhatsAppLink.astro`.
- Paleta, tipografía y medidas: `src/styles/global.css`; decisiones documentadas en `DESIGN.md`.
- `heroImage` es opcional; si no existe, no se genera una imagen ni un contenedor vacío.
- `jobs` es un array tipado vacío; Trabajos solo se genera al agregar trabajos reales.
- `noindex` está activo hasta que el contador responda. **Retirarlo antes de promocionar el sitio.**
- Se omite canonical mientras no haya una URL completa de Workers en la configuración. Datos estructurados, imagen social y analítica quedan fuera de esta tarea.

Los archivos locales de verificación se guardan en `.qa/`, ignorado por Git. Lighthouse se ejecuta como herramienta temporal, sin modificar las dependencias del proyecto.
