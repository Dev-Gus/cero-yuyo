# Cero Yuyo

Scaffold estático de Astro con TypeScript estricto y Tailwind CSS. Leé PROJECT.md antes de trabajar.

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

Para desplegar cuando se autorice, ejecutá el build y luego `npx wrangler deploy` con una cuenta de Cloudflare autenticada. Este scaffold no realiza ningún despliegue.

## Alcance actual

Solo existen `/` y la página 404, en español (`es-UY`), sin JavaScript cliente. Los colores neutros provisionales y la tipografía de sistema están centralizados en `src/styles/global.css`. El contenido y el diseño quedan pendientes.
