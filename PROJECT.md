# Cero Yuyo: website

## Goal
One-page website for Cero Yuyo, a lawn care service in Tacuarembó, Uruguay, run by Gustavo González. The site is also a real proof project for his web studio, Tacuara Lab. It must be honest about that.

## Decisions
- Name: Cero Yuyo (exact spelling, two words).
- Spanish only, single page, plain direct Spanish (voseo), no jargon.
- Services offered today: corte de pasto, bordeado, limpieza, plantación de arbustos chicos. No poda (pruning). Nothing else.
- No price list. The hook is: "Mandame una foto del terreno" and get a free quote.
- Contact: WhatsApp only. Number: wa.me/59898871858 with a prefilled message. No form, no email.
- Honest label: the site states it is Gustavo's own business, built by Tacuara Lab. No fake testimonials, no fake or stock photos of jobs, no "coming soon".
- Real job photos and 2-3 example jobs will be added later by the owner.
- Service area: only the city of Tacuarembó.
- The typed `jobs` array is empty; the entire Trabajos section stays hidden until real job photos exist.
- The hero has no photo for now. An optional typed `heroImage` supports src, alt, width and height without leaving an empty container when absent.
- Warm cream, deep green and decorative lime palette documented in DESIGN.md; tokens live in src/styles/global.css.
- Temporary `noindex` is active until the accountant answers whether registration is required before advertising. Remove it before promoting the site.
- Canonical is omitted because config has no complete workers.dev URL. No structured data, social preview image or analytics in this task.
- Fast (Lighthouse 90+), mobile first.
- Hosted on Cloudflare Workers static assets, free workers.dev URL for now. No custom domain until the owner decides.

## Status
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
