# Diseño de Cero Yuyo

## Dirección

Sitio cálido, limpio y práctico para un servicio local. Diseño mobile first, tipografía de sistema, títulos fuertes y texto directo. Sin fuentes externas, animaciones ni dependencias nuevas.

## Tokens y contraste

Todos los tokens están centralizados en `src/styles/global.css`:

- Fondo crema: `#F6F4EC`.
- Texto: `#1B2A1F`; contraste sobre crema: **13,65:1**.
- Verde profundo principal: `#1F5A2E`; contraste con crema: **7,45:1** en ambas direcciones.
- Acento lima: `#A8D13E`, exclusivamente decorativo. Su contraste sobre crema es 1,61:1, por lo que no se usa para texto ni indicadores de foco.
- Contenedor único: máximo de `70rem`, con márgenes adaptables.
- Espaciado de secciones y radios compartidos, definidos junto a los colores.

Las combinaciones de texto, botones, hover y foco superan WCAG AA. El foco usa verde sobre crema y crema sobre el hero verde. Los botones comparten un componente y una clase; en el hero se invierten los mismos colores.

## Composición y accesibilidad

- Encabezado con nombre de texto y botón a WhatsApp.
- Hero de fondo verde, texto crema y una línea pequeña lima. Sin foto ni contenedor de imagen vacío. `heroImage?: SiteImage` permite agregar una imagen con `src`, `alt`, `width` y `height` desde el contenido tipado.
- Servicios como lista simple; dos columnas donde hay espacio y una en pantallas pequeñas.
- Proceso como lista ordenada; tres columnas en escritorio y una en móvil.
- Presentación personal y cierre con la zona de atención y WhatsApp.
- `jobs: Job[]` empieza vacío. La sección Trabajos completa, incluido su título, solo existe cuando hay trabajos reales.
- Un H1, jerarquía de títulos, regiones con nombre, foco visible y enlace de salto «Saltar al contenido». Esta etiqueta funcional acompaña el enlace de accesibilidad solicitado; el texto comercial es el suministrado.
- Contenido estático disponible sin JavaScript y sin scripts de cliente.

## Contenido y contacto

El texto está centralizado en `src/data/site.ts`. `src/lib/whatsapp.ts` construye un único enlace con `encodeURIComponent`; todos los botones usan `WhatsAppLink.astro`.

El área de atención es únicamente la ciudad de Tacuarembó. No se agregan precios, fotografías, testimonios ni otros servicios. Tacuara Lab aparece como texto, sin enlace.

## Indexación

`noindex` está activo en inicio y 404 hasta que el contador responda. Debe retirarse antes de promocionar el sitio. Se omite canonical porque la configuración no contiene una URL completa de Workers. No se agregan datos estructurados, imagen social ni analítica.
