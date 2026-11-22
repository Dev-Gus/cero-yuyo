import type { APIRoute, GetStaticPaths } from 'astro';
import { INDEXABLE, SITE_URL } from '../data/site';

// Returning no paths omits sitemap.xml entirely while noindex is active.
export const getStaticPaths: GetStaticPaths = () => INDEXABLE
  ? [{ params: { sitemap: 'sitemap' } }]
  : [];

export const GET: APIRoute = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?>\n`
    + `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
    + `<url><loc>${new URL('/', SITE_URL).href.replaceAll('&', '&amp;')}</loc></url></urlset>\n`,
  { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
);
