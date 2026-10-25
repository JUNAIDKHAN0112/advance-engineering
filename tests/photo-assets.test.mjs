import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { products } from '../src/data/catalogue.js';
import { retiredProductSlugs } from '../src/data/catalogueScope.js';
import { productPhotoRegistry, productImageSrc, productImageAlt, productImageCaption } from '../src/data/productPhotoRegistry.js';
const publicFile = path => new URL(`../public${path}`, import.meta.url);
test('active registry uses only unique approved machine identities and source hashes', () => {
  const slugs = new Set(products.map(p => p.slug));
  for (const field of ['slug','sourceFile','sourceSha256','assetSha256']) assert.equal(new Set(productPhotoRegistry.map(p => p[field])).size, productPhotoRegistry.length, field);
  for (const image of productPhotoRegistry) {
    assert.ok(slugs.has(image.slug), image.slug);
    assert.match(image.sourceSha256, /^[0-9a-f]{64}$/);
    assert.match(image.assetSha256, /^[0-9a-f]{64}$/);
    assert.ok(['staged','ready'].includes(image.status));
  }
});
test('ready images exist, have a WebP header and retain their reviewed hashes', () => {
  for (const image of productPhotoRegistry.filter(p => p.status === 'ready')) {
    const bytes = readFileSync(publicFile(productImageSrc(image)));
    assert.equal(bytes.toString('ascii',0,4),'RIFF');
    assert.equal(bytes.toString('ascii',8,12),'WEBP');
    assert.equal(createHash('sha256').update(bytes).digest('hex'), image.assetSha256, image.slug);
  }
});
test('every active product has its own existing fallback illustration', () => {
  for (const p of products) assert.ok(existsSync(publicFile(`/product-images/${p.slug}.svg`)), p.slug);
});
test('renders are never labelled real photographs and retired images never resolve', () => {
  const rill = products.find(p => p.slug === 'rill');
  assert.match(productImageAlt(rill), /render/i);
  assert.match(productImageCaption(rill), /render/i);
  for (const slug of retiredProductSlugs) assert.equal(productImageSrc({slug}), null, slug);
});
