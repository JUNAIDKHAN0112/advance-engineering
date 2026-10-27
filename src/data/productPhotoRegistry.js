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
  {
    slug: 'gravity-separator', machine: 'Gravity Separator',
    sourceFile: '0d052a35-19f8-4607-8c62-5a3ff2335a6c 2.pdf#page=4',
    sourceSha256: 'b14096cd4f91bf2050f4e35a3c858df87cf6460703963c5b6cf89bf7960bdc1e',
    assetSha256: 'f2fe720b29db784ab69c9c471663de3ff93336400d3ec93f336a0b187b7a219b',
    kind: 'reference', status: 'ready', identity: 'confirmed',
  },
  {
    slug: 'air-box', machine: 'Aspiration Air Box',
    sourceFile: '0d052a35-19f8-4607-8c62-5a3ff2335a6c 2.pdf#page=13',
    sourceSha256: '652c2e20a4340e30c224f2c425fdcb2693198d04401a08bfd812eef45a9e4914',
    assetSha256: '30a78283194b3f9187cf23f1d1fd7c8b9dafc0a6667e6bd2d0e6af3376d1be3f',
    kind: 'reference', status: 'ready', identity: 'confirmed',
  },
  {
    slug: 'z-bucket-elevator', machine: 'Z-Type Bucket Elevator',
    sourceFile: '0d052a35-19f8-4607-8c62-5a3ff2335a6c 2.pdf#page=7',
    sourceSha256: '3d97000735003afebfa139a505d36cbd1d3a01dfa8b58af9921bec697bc395bb',
    assetSha256: '735979800c648508c55d627615d18ce8e478f7b5001a8008a249b94d6919c7f8',
    kind: 'reference', status: 'ready', identity: 'confirmed',
  },
  {
    slug: 'vertical-cyclone-separator', machine: 'Vertical Cyclone Separator',
    sourceFile: '0d052a35-19f8-4607-8c62-5a3ff2335a6c 2.pdf#page=10',
    sourceSha256: '01dc20e35f78eb4f93776b6b8a8764598a8b73a781215dc27a4a47852d3d06cc',
    assetSha256: '5077f4d4df197bbb07b056d7891abef1a9e7b1599fb9dd48a4a7b188abaeeaf7',
    kind: 'reference', status: 'ready', identity: 'confirmed',
  },
  {
    slug: 'emery-roll-machine', machine: 'Emery Roll Dehusker',
    sourceFile: '0d052a35-19f8-4607-8c62-5a3ff2335a6c 2.pdf#page=11',
    sourceSha256: 'e8bc3e68f509795df0273edbd5dd51c8d997b10fbc1ffd5d5ccb6af9fd7c96b4',
    assetSha256: '6fff659df2b94b8f8a9a5be477ec7b581e44301289a453c3a07fb3e1fb56bc20',
    kind: 'reference', status: 'ready', identity: 'confirmed',
  },
  {
    slug: 'huller-machine', machine: 'Huller Machine',
    sourceFile: '0d052a35-19f8-4607-8c62-5a3ff2335a6c 2.pdf#page=16',
    sourceSha256: 'a2c775f4d58a726fd78ceadbef05ef1ae68d62d93a81132853cb85567f1b4b9a',
    assetSha256: '59d13b466014a630655b666ffbc23bf56f3172c05b40c9f01156492f5d487862',
    kind: 'reference', status: 'ready', identity: 'confirmed',
  },
  {
    slug: 'gravity-de-stoner', machine: 'Gravity De-Stoner',
    sourceFile: '0d052a35-19f8-4607-8c62-5a3ff2335a6c 2.pdf#page=18',
    sourceSha256: 'e3124d9432628081b2914898aa9277ea43d20bee71732d56b2d44c241b336d4c',
    assetSha256: 'da95cdf3be8390a2cc0dbfa6bbd126ed6ba7ebfd5c4073ae783ac54918fc436d',
    kind: 'reference', status: 'ready', identity: 'confirmed',
  },
  {
    slug: 'drum-sieve', machine: 'Rotary Drum Sieve',
    sourceFile: '0d052a35-19f8-4607-8c62-5a3ff2335a6c 2.pdf#page=19',
    sourceSha256: 'd4dadc0a639bab96ac2d9e9d179816609adb59fe88a5dd91a437ac1266f57059',
    assetSha256: '8cf42892e5383f044f270a1aab23f53d48e5204796b80ecd28e70c749e3eb6cb',
    kind: 'reference', status: 'ready', identity: 'confirmed',
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
  return image.kind === 'render' ? `Illustrative digital render of ${product.name}` : `Product reference image of ${product.name}`;
}
export function productImageCaption(product) {
  const image = photoFor(product);
  if (!image) return 'CONCEPT ILLUSTRATION / ACTUAL MACHINE SPECIFICATIONS ON ENQUIRY';
  return image.kind === 'render'
    ? 'ILLUSTRATIVE DIGITAL RENDER / CONFIGURATION CONFIRMED ON ENQUIRY'
    : 'PRODUCT REFERENCE IMAGE / CONFIGURATION CONFIRMED ON ENQUIRY';
}
