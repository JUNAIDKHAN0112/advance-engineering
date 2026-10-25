import assert from 'node:assert/strict';
import { test, after } from 'node:test';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { PassThrough } from 'node:stream';
import { StaticRouter } from 'react-router-dom/server.js';
import { createServer } from 'vite';
const server = await createServer({ server: { middlewareMode: true }, optimizeDeps: { noDiscovery: true, include: [] }, appType: 'custom' });
after(() => server.close());
async function renderPath(location) {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  return new Promise((resolve,reject) => {
    const output = new PassThrough(); let html = '';
    output.on('data', chunk => { html += chunk; }); output.on('end', () => resolve(html)); output.on('error',reject);
    const stream = renderToPipeableStream(React.createElement(StaticRouter, { location }, React.createElement(App)), { onAllReady() { stream.pipe(output); }, onError: reject });
  });
}
const { publicPaths, routeAliases } = await server.ssrLoadModule('/src/data/routeInfo.js');
const { products } = await server.ssrLoadModule('/src/data/catalogue.js');
const { retiredProductSlugs } = await server.ssrLoadModule('/src/data/catalogueScope.js');
const allowedLinks = new Set([...publicPaths,...Object.keys(routeAliases)]);
for (const path of publicPaths) test(`${path}: one main, heading and footer; no broken catalogue links`, async () => {
  const html = await renderPath(path);
  assert.equal((html.match(/<main[\s>]/g)||[]).length,1,path);
  assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,path);
  assert.equal((html.match(/<footer[\s>]/g)||[]).length,1,path);
  assert.ok(!html.includes('**'),path);
  for (const match of html.matchAll(/href="(\/[^"#?]*)[^\"]*"/g)) assert.ok(allowedLinks.has(match[1]), `${path}: dead internal link ${match[1]}`);
});
for (const slug of retiredProductSlugs) test(`/${slug} does not advertise an excluded product`, async () => {
  const html = await renderPath(`/${slug}`);
  assert.ok(html.includes('Page not found'));
  assert.ok(!html.includes(`/quote?machine=${slug}`));
});
test('enquiry links preserve retained products; excluded products are absent from options', async () => {
  for (const slug of ['rill','pulse-processing-plant','c-type-bucket-elevator']) {
    const html = await renderPath(`/${slug}`);
    assert.ok(html.includes(`/quote?machine=${slug}`));
  }
  const quote = await renderPath('/quote?machine=rill');
  assert.match(quote, /<option[^>]*value="rill"[^>]*selected/);
  assert.ok(quote.includes('mailto:nationalengineering973@gmail.com'));
  for (const slug of retiredProductSlugs) assert.ok(!quote.includes(`value="${slug}"`));
});
test('case-insensitive material search, category filtering and empty state render', async () => {
  const result = await renderPath('/machines?category=milling-finishing&q=WHEAT');
  assert.ok(result.includes('Twin Atta Chakki'));
  assert.ok(result.includes('/machines/category/milling-finishing'));
  const empty = await renderPath('/machines?q=no-match-9382671');
  assert.ok(empty.includes('No machinery found.'));
  assert.ok(empty.includes('Clear search and filters'));
});
test('pulse guide defines pulses, explains dal and includes source-backed process steps', async () => {
  const html = await renderPath('/processes/pulse-processing');
  for (const text of ['What are pulses? What is dal?','Moong','Dehusk and split','Common questions','Further reading']) assert.ok(html.includes(text),text);
});
test('all current products remain complete and unbranded', () => {
  assert.equal(products.length,32);
  assert.equal(products.filter(p => p.category === 'Turnkey plants').length,5);
  for (const p of products) assert.ok(!/nice engineering/i.test(JSON.stringify(p)));
});
