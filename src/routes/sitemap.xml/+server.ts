import { works } from '#lib/data/works';
import type { RequestHandler } from './$types';

export const prerender = true;

const BASE = 'https://morkie.is-a.dev';

export const GET: RequestHandler = () => {
  const pages = ['', '/about', '/work', '/contact', ...works.map((w) => `/work/${w.slug}`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `\t<url><loc>${BASE}${p}</loc></url>`).join('\n')}
</urlset>`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
