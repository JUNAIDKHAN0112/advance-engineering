import { approvedProductSlugs } from './catalogueScope.js';
// Only assets belonging to the owner's current selection may be used publicly.
// Historical assets stay recoverable; they must never fill another product's slot.
export const productPhotoRegistry = [
  {
    slug: 'rill', machine: 'Rill Machine',
    sourceFile: 'Screenshot 2026-10-25 at 12.32.26 PM.png',
    sourceSha256: 'f5322b3c36be0ba6144c30679c931e12a216638148cc548c1839193b855ac6b2',
    assetSha256: '8d52751157eb5968514404d28f5dc9783fa58e11d8f1bb91d47ea0c5b205cce5',
    kind: 'render', status: 'ready', identity: 'confirmed',
  },
];
const active = new Set(approvedProductSlugs);
const photoFor = product => productPhotoRegistry.find(p => p.slug === product.slug && p.status === 'ready');
export function productImageSrc(product) {
  if (!active.has(product.slug)) return null;
  return photoFor(product) ? `/product-photos/${product.slug}.webp` : `/product-images/${product.slug}.svg`;
}
export function productImageAlt(product) {
  if (!active.has(product.slug)) return 'Product outside the current catalogue';
  const image = photoFor(product);
  if (!image) return `Concept illustration of ${product.name}`;
  return image.kind === 'render' ? `Illustrative digital render of ${product.name}` : `Product reference photograph of ${product.name}`;
}
export function productImageCaption(product) {
  const image = photoFor(product);
  if (!image) return 'CONCEPT ILLUSTRATION / ACTUAL MACHINE SPECIFICATIONS ON ENQUIRY';
  return image.kind === 'render'
    ? 'ILLUSTRATIVE DIGITAL RENDER / CONFIGURATION CONFIRMED ON ENQUIRY'
    : 'PRODUCT REFERENCE IMAGE / CONFIGURATION CONFIRMED ON ENQUIRY';
}
