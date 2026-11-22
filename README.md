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
- `jobs` contiene los pares reales trabajo1, trabajo3, trabajo6 y trabajo8, en ese orden. Trabajos y su enlace del footer solo se generan si hay al menos una pareja completa.
- `noindex` está activo hasta que el contador responda. **Retirarlo antes de promocionar el sitio.**
- Se omite canonical mientras no haya una URL completa de Workers en la configuración. Datos estructurados, imagen social y analítica quedan fuera de esta tarea.

Los archivos locales de verificación se guardan en `.qa/`, ignorado por Git. Lighthouse se ejecuta como herramienta temporal, sin modificar las dependencias del proyecto.

## Optimizar fotografías manualmente

Los originales privados deben estar en `photos-originals/`, que está ignorado por Git. No se modifican, borran ni publican. Antes de agregar una pareja, revisá ambas fotos por números de puerta, matrículas, nombres de calles legibles, personas y documentos. No se recorta ni difumina ninguna imagen automáticamente.

Con las dependencias del lockfile instaladas mediante `npm ci`, ejecutá desde la raíz:

```sh
node scripts/optimize-photos.mjs
npm run build
node scripts/optimize-photos.mjs --verify-dist
npm run check
```

El script usa el sharp que ya instala Astro, sin dependencias adicionales. Es manual y no forma parte del build: una copia del repositorio puede compilar sin los originales.

La selección revisada está fijada en el script: `hero.jpg`; `trabajo1-antes.jpg`/`trabajo1-despues.jpg`; `trabajo3-antes.jpg`/`trabajo3-despues.jpg`; `trabajo6-antes.webp`/`trabajo6-despues.webp`; y `trabajo8-antes.webp`/`trabajo8-despues.webp`. Se generan `hero.webp` y `job1` a `job4` con sufijos `-before.webp`/`-after.webp` en `src/assets/photos/`, sin partir de copias procesadas.

Se aplica primero la orientación EXIF y se exporta WebP con calidad 78, effort 6 y smart subsampling. El hero tiene un máximo de 1600px de ancho y las parejas un máximo de 1200px, sin agrandar originales más chicos. Cada pareja conserva su proporción y comparte dimensiones; si las proporciones originales difieren, el script se detiene antes de escribir copias. No recorta ni estira.

Ambos comandos del script imprimen un informe JSON con dimensiones, bytes y ausencia de EXIF/GPS, ICC, XMP e IPTC. El modo `--verify-dist` revisa todas las imágenes que se van a servir, incluidas las variantes responsivas y el favicon. Astro genera atributos width/height; el hero mantiene carga eager y prioridad alta, y las parejas carga lazy. Las únicas leyendas visibles son «Antes» y «Después»; las descripciones opcionales siguen vacías.
