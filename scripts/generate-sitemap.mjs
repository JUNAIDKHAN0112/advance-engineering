import { writeFileSync } from 'node:fs';
import { publicPaths, siteOrigin } from '../src/data/routeInfo.js';
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${publicPaths.map(path => `  <url><loc>${siteOrigin}${path}</loc></url>`).join('\n')}\n</urlset>\n`;
writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`Generated ${publicPaths.length} current-catalogue sitemap entries.`);
