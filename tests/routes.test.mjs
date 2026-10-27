import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, existsSync } from 'node:fs';
import { products } from '../src/data/catalogue.js';
import { retiredProductSlugs } from '../src/data/catalogueScope.js';
const routes = await import('../src/data/routeInfo.js').catch(() => null);
test('approved product and education routes have individual metadata', () => {
  assert.ok(routes, 'Route metadata module must exist');
  assert.equal(routes.publicPaths.length, 48);
  assert.equal(new Set(routes.publicPaths).size, routes.publicPaths.length);
  for (const path of routes.publicPaths) {
    const meta = routes.routeMetadata(path);
    assert.ok(meta && meta.title && meta.description, path);
  }
});
test('unapproved product URLs cannot resolve to product metadata', () => {
  assert.ok(routes, 'Route metadata module must exist');
  assert.equal(retiredProductSlugs.length, 31);
  for (const slug of retiredProductSlugs) assert.equal(routes.routeMetadata(`/${slug}`), null, slug);
});
test('only spelling aliases of retained plants redirect', () => {
  assert.ok(routes, 'Alias map must exist');
  assert.equal(routes.routeAliases['/whole-wheat-flour-mill-plant'], '/whole-wheat-flour-plant');
  assert.equal(routes.routeAliases['/seed-cleaning-grading-plant'], '/seed-cleaning-plant');
  for (const to of Object.values(routes.routeAliases)) assert.ok(products.some(p => `/${p.slug}` === to));
});
test('category and process page components exist and are connected to routes', () => {
  const appFile = new URL('../src/App.jsx', import.meta.url);
  assert.ok(existsSync(appFile), 'Application routes must be updated');
  const app = readFileSync(appFile, 'utf8');
  for (const name of ['CategoryPage','ProcessIndex','ProcessGuidePage']) assert.ok(app.includes(name), name);
  assert.ok(app.includes('categoryDefinitions.map'));
  assert.ok(app.includes('processGuides.map'));
});
