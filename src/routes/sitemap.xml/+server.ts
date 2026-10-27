import { site } from '#lib/data/site';
import { works } from '#lib/data/works';
import type { RequestHandler } from './$types';

export const prerender = true;

// site.lastUpdated is 'MM.DD.YYYY' — reuse it so footer and sitemap share one source
const [mm, dd, yyyy] = site.lastUpdated.split('.');
const lastmod = `${yyyy}-${mm}-${dd}`;

export const GET: RequestHandler = () => {
  const pages = ['', '/about', '/work', '/contact', ...works.map((w) => `/work/${w.slug}`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => `\t<url><loc>${site.url}${p}</loc><lastmod>${lastmod}</lastmod></url>`)
  .join('\n')}
</urlset>`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
