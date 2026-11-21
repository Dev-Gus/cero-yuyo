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

- Encabezado con nombre de texto, marca decorativa compartida de tres hojas de pasto y botón a WhatsApp. Marca de altura de mayúsculas; mismo dibujo en el favicon SVG. En el footer se apoya sobre crema para conservar los colores de las hojas.
- Hero de fondo verde, texto crema y una línea pequeña lima. Sin foto ni contenedor de imagen vacío. `heroImage?: SiteImage` permite agregar una imagen con `src`, `alt`, `width` y `height` desde el contenido tipado.
- Cinco servicios como lista simple; dos columnas donde hay espacio, con el último ocupando la fila completa, y una en pantallas pequeñas. Nota centrada debajo.
- Proceso como lista ordenada; tres columnas en escritorio y una en móvil.
- Cierre centrado, ancho de lectura limitado y fondo de mezcla de 6% verde con crema, sin cambiar la paleta. Número como enlace con objetivo táctil mínimo de 44px.
- Footer verde con texto crema, navegación interna y WhatsApp; dos columnas en escritorio, una centrada en móvil. Foco crema sobre verde. Contraste de texto verde sobre el fondo del cierre: 6,80:1.
- Botones y números reutilizan WhatsAppLink, con un icono de conversación decorativo compartido, sin logo oficial. Head común para inicio y 404.
- `jobs: Job[]` empieza vacío. La sección Trabajos completa, incluido su título, solo existe cuando hay trabajos reales.
- Un H1, jerarquía de títulos, regiones con nombre, foco visible y enlace de salto «Saltar al contenido». Esta etiqueta funcional acompaña el enlace de accesibilidad solicitado; el texto comercial es el suministrado.
- Contenido estático disponible sin JavaScript y sin scripts de cliente.

## Contenido y contacto

El texto está centralizado en `src/data/site.ts`. `src/lib/whatsapp.ts` construye un único enlace con `encodeURIComponent`; todos los botones usan `WhatsAppLink.astro`.

El área de atención es únicamente la ciudad de Tacuarembó. No se agregan precios, fotografías, testimonios ni otros servicios. Tacuara Lab aparece como texto, sin enlace.

## Indexación

`noindex` está activo en inicio y 404 hasta que el contador responda. Debe retirarse antes de promocionar el sitio. Se omite canonical porque la configuración no contiene una URL completa de Workers. No se agregan datos estructurados, imagen social ni analítica.
