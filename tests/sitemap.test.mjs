import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { publicPaths, siteOrigin } from '../src/data/routeInfo.js';
import { retiredProductSlugs } from '../src/data/catalogueScope.js';
test('sitemap lists exactly the canonical public routes and no retired products', () => {
  const xml = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  assert.deepEqual(urls.sort(), publicPaths.map(path => siteOrigin + path).sort());
  for (const slug of retiredProductSlugs) assert.ok(!urls.includes(`${siteOrigin}/${slug}`));
});
