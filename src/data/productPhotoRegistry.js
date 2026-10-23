// One machine => one approved asset. Entries remain staged until corresponding
// WebP files are added and rights/manufacturing details are checked.
// Never reuse a source photo for a different machine to fill a missing slot.
export const productPhotoRegistry = [
  {
    "slug": "destoner",
    "machine": "Vibro de-stoner",
    "sourceFile": "WhatsApp Image 2026-10-23 at 13.23.54 (2).jpeg",
    "sourceSha256": "ad87783682160b82d7023aadacc68d15faad9ef3aa770ba1542a3068421c9b49",
    "assetSha256": "4ad17e5b2f0f21a546771ea6e113994b454e17bab9952666f6ecd83b2d216eb1",
    "status": "staged"
  },
  {
    "slug": "elevator",
    "machine": "Bucket elevator",
    "sourceFile": "WhatsApp Image 2026-10-23 at 13.24.13 (2).jpeg",
    "sourceSha256": "a8f6116eab621e0afd69473f822b737496a0b6ff46c42fe27636b42504494971",
    "assetSha256": "e3fed7eb629a67dca5a11858a0c10befd606376feefbfa980a36c91204113c06",
    "status": "staged"
  },
  {
    "slug": "cyclone",
    "machine": "Horizontal cyclone",
    "sourceFile": "WhatsApp Image 2026-10-23 at 13.24.10 (1).jpeg",
    "sourceSha256": "fbecf528bee1b856252732ac7457b57b4bec0a66d93c09652dd04c68ca321feb",
    "assetSha256": "fe0b4f296ccb2fcae1cfbecc1105726405bd3edf79f00481ead433f73c683443",
    "status": "staged"
  },
  {
    "slug": "fatka",
    "machine": "Fatka machine",
    "sourceFile": "WhatsApp Image 2026-10-23 at 13.23.59.jpeg",
    "sourceSha256": "6a25d2aeba227a1a884804593612fdd1930ce83b4fda80048e30d861c88eb043",
    "assetSha256": "c08e7e28b88e63bde0c2fc12701fa7dcb6fb4c8229ce5771c3c292dafbe926c6",
    "status": "staged"
  },
  {
    "slug": "buff",
    "machine": "Buff polisher",
    "sourceFile": "WhatsApp Image 2026-10-23 at 13.23.53 (1).jpeg",
    "sourceSha256": "bafa537f8c26e14509c7598a5aa6c0a20fe1c9cfb29823699c57d7adcf9e38e3",
    "assetSha256": "5287bac4a966b831252c327d4302d372e06ca810a6f7eedef4366b4aa0136635",
    "status": "staged"
  },
  {
    "slug": "dal",
    "machine": "Dal polisher",
    "sourceFile": "WhatsApp Image 2026-10-23 at 13.24.12 (2).jpeg",
    "sourceSha256": "993aec8738b2b2ee47907eb4058fc4d6090b08b3bed53d3f760ee4d415178398",
    "assetSha256": "d31e7a4b9d49c63b3f79a41e27505855aa9c51c3623bac604903897a1b71a8da",
    "status": "staged"
  },
  {
    "slug": "conveyor",
    "machine": "Screw conveyor",
    "sourceFile": "WhatsApp Image 2026-10-23 at 13.23.57 (2).jpeg",
    "sourceSha256": "36e430e227cf2bd9b9a8e57aa072e9c6ee1681ea1088211f3c7047844c5c0c87",
    "assetSha256": "12643f6ab57a5854ad49d41cbd57694a5ead91b4f978891f5f15d6b5eaa07ada",
    "status": "staged"
  },
  {
    "slug": "blower",
    "machine": "Industrial blower",
    "sourceFile": "WhatsApp Image 2026-10-23 at 13.24.09.jpeg",
    "sourceSha256": "d37fd93ae6234ef03a768938823d33ac3da7c7e3bf8a311e8f0b5d7a1050e2ee",
    "assetSha256": "8cb81a53a60e3b4c1e1fc6d31ee27fc820c1bc29982a3c107eda2fca98d5b0c0",
    "status": "staged"
  },
  {
    "slug": "rotary",
    "machine": "Rotary airlock",
    "sourceFile": "WhatsApp Image 2026-10-23 at 13.23.51.jpeg",
    "sourceSha256": "d1eebe390d7d4ae054cf5835ae5a7c0dedaf8f1456cade674f0afb4e75ccf9ea",
    "assetSha256": "60994088be4743896df81aa916eb5d8e9f48043c956d8605aed5613d545e9de0",
    "status": "staged"
  },
  {
    "slug": "classifier-separator",
    "machine": "Classifier separator",
    "sourceFile": "WhatsApp Image 2026-10-23 at 13.24.04.jpeg",
    "sourceSha256": "2df0b9cbe1cde54369cd1dec6099414e220710ab300a9fb871223befb93549dd",
    "assetSha256": "bad8a30a48b9bbb286c49f2c07a9b89b37a9f9ff0f8e143f17853136ae4775e6",
    "status": "staged"
  }
];

const publishedSlugs = new Set(productPhotoRegistry
  .filter((item) => item.status === "ready")
  .map((item) => item.slug));

export function productImageSrc(product) {
  return publishedSlugs.has(product.slug)
    ? `/product-photos/${product.slug}.webp`
    : `/product-images/${product.slug}.svg`;
}

export function productImageAlt(product) {
  return publishedSlugs.has(product.slug)
    ? `Product reference photograph of ${product.name}`
    : `Concept illustration of ${product.name}`;
}
