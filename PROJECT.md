# Cero Yuyo: website

## Goal
One-page website for Cero Yuyo, a lawn care service in Tacuarembó, Uruguay, run by Gustavo González. The site is also a real proof project for his web studio, Tacuara Lab. It must be honest about that.

## Decisions
- Name: Cero Yuyo (exact spelling, two words).
- Spanish only, single page, plain direct Spanish (voseo), no jargon.
- Services offered today: Corte de pasto; Bordeado; Limpieza de terrenos; Poda de arbustos y árboles chicos; Canteros y plantaciones.
- Pruning is offered for small shrubs and trees. The owner has no ladder yet, so no tall work.
- No price list. The hook is: "Mandame una foto del terreno" and get a free quote.
- Contact: WhatsApp only. Number: wa.me/59898871858 with a prefilled message. No form, no email.
- Honest label: the site states it is Gustavo's own business, built by Tacuara Lab. No fake testimonials, no fake or stock photos of jobs, no "coming soon".
- Real owner-supplied photos are live: `hero.jpg` and original job pairs 1 and 3, in that order. Processed assets are `hero.webp`, `job1-before.webp`, `job1-after.webp`, `job2-before.webp` and `job2-after.webp`; processed job2 comes from original trabajo3.
- Service area: only the city of Tacuarembó.
- The typed `jobs` array contains two before/after pairs with neutral alt text and empty optional descriptions. `Trabajos recientes`, its exact supplied intro and the footer's `Trabajos` link render only when at least one complete pair exists, between Cómo trabajo and Quién soy.
- Optional typed `heroImage` uses imported Astro image metadata for intrinsic dimensions. Astro's built-in Image serves responsive WebP sizes; hero is eager/high priority, job photos lazy. Hero uses two columns on desktop and text then photo on mobile; pairs sit side by side from tablet up and stack on mobile.
- Photo privacy: `photos-originals/` stays ignored and is never committed or served. Only five metadata-free processed copies are published. The owner selected the photos; visual review found outdoor work, only the owner's face in the hero and no readable house numbers or plates in the published selection. Original job pair 2 is excluded because `trabajo2-despues.jpg` has a readable house number; the owner's final decision revoked the temporary exception. Pairs 4-8 remain unselected and unprocessed. `trabajoterminado.webp`, `trabajoterminado2.webp` and `trabajoterminado3.webp` are excluded because they have no matching pair.
- Warm cream, deep green and decorative lime palette documented in DESIGN.md; tokens live in src/styles/global.css.
- Temporary `noindex` is active until the accountant answers whether registration is required before advertising. Remove it before promoting the site.
- Canonical is omitted because config has no complete workers.dev URL. No structured data, social preview image or analytics in this task.
- Fast (Lighthouse 90+), mobile first.
- Hosted on Cloudflare Workers static assets, free workers.dev URL for now. No custom domain until the owner decides.

## Status
- [x] Real photos (2026-11-22): hero and Trabajos live with 2 complete pairs (original trabajo1, then trabajo3), exact supplied heading/intro/labels and conditional footer link. Existing copy, palette, WhatsApp message and noindex preserved. No client scripts or new dependencies.
- [x] Photo privacy/optimization: reviewed hero and original pairs 1, 2 and 3. Excluded pair 2 for its readable house number; excluded all unselected/unpaired files as detailed above. Only the selected five files were processed with installed sharp (quality 80, max long edge 2000px, orientation preserved); WebP chunks and metadata programmatically checked, with no EXIF/GPS, ICC, XMP or IPTC. All originals remain ignored, untracked and unstaged.
- [x] Photo local verification: Node 24.22.1 build passed; astro check 0 errors/warnings/hints. Home 200, missing route 404, favicon 200; originals return 404. One H1, no scripts or empty blocks, five unchanged WhatsApp URLs, responsive dimensions/srcsets, eager/high-priority hero and lazy pairs verified. No overflow at 375/768/1024/1280/1536px; keyboard skip/focus and mobile/desktop hero/Trabajos screenshots reviewed in ignored .qa/.
- [x] Photo Lighthouse mobile (2026-11-22, v13.6.0): Performance 98, Accessibility 100, Best Practices 100, SEO 63 (intentional noindex); no run warnings. LCP 1.4s, CLS 0. Five processed source images total 4,046,742 bytes; largest job1-before.webp 1,044,214 bytes. Local report: .qa/photos-lighthouse.report.html.
- [x] Photo fresh-clone verification: cloned main into ignored .qa/, used Node 24.22.1 with its bundled npm 11.19.1, and passed npm ci, npm run build and npx astro check (0 errors/warnings/hints). Clone stayed clean and its generated home/404 HTML matched the locally reviewed build. Package-lock content is unchanged from 92adfe1 (checkout applies CRLF only). Programmatic checks of every committed image, including favicon.svg, and all generated WebP variants found no EXIF/GPS; committed images total 4,047,004 bytes including favicon. Temporary clone removed after verification.
- [x] Visual/copy polish (2026-11-21): five exact services and centered consultation note, updated description, shared decorative grass mark/SVG favicon and chat icon, centered tinted closing section, linked phone numbers and green responsive footer with in-page navigation. Palette, section order, other copy, WhatsApp message and noindex preserved.
- [x] Polish verification: npm ci/build passed; astro check 0 errors/warnings/hints. Home 200, missing route 404, favicon 200. One H1, no client scripts, no empty visible blocks, no added image asset except public/favicon.svg. Five identical encoded WhatsApp links, phone tap targets 48px, navigation/focus and mobile/desktop screenshots reviewed. No overflow at 375/768/1024/1280/1536px. .qa/ remains ignored and untracked.
- [x] Polish Lighthouse mobile (2026-11-21, v13.6.0): Performance 99, Accessibility 100, Best Practices 100, SEO 60 (intentional noindex); device CPU calibration warning. Local report: .qa/polish-lighthouse.report.html.
- Lockfile regenerated with Node 24.22.1 to fix Cloudflare npm ci failure.
- [x] Task 1: scaffold (Astro + Tailwind, wrangler config, placeholder home and 404)
- [x] Cloudflare Git connection: GitHub app access to this repo fixed on 2026-11-21; first build triggered after GitHub app access was fixed; result pending.
- [x] Design direction and palette: documented in DESIGN.md, WCAG AA text contrast verified.
- [x] Home page content: exact supplied Spanish copy, typed content, shared encoded WhatsApp helper, optional hero image and hidden empty Trabajos section.
- [x] Page title, description, es-UY and temporary noindex; no placeholder canonical.
- [x] Local verification: npm ci and build passed; astro check reported 0 errors, 0 warnings and 0 hints. Home 200, missing route 404, one H1, no client scripts, no empty visible blocks, exact copy and all three WhatsApp URLs verified. No horizontal overflow at 375/768/1024/1280/1536px. Desktop/mobile screenshots and keyboard skip/focus reviewed.
- [ ] Structured data and social preview image (outside this task).
- [x] Lighthouse local mobile (2026-11-21, v13.6.0): Performance 98, Accessibility 100, Best Practices 100, SEO 60. SEO is reduced by the intentional noindex. Lighthouse warned that this device's CPU is slower than its calibration expects. Reports and screenshots are stored locally in ignored .qa/.
- [ ] Deploy to Cloudflare

## Rules for agents
Read this file first. Update Status when you finish something. Commit after each task.
