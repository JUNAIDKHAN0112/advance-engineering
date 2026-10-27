# Product-image intake

The owner selected exactly 32 catalogue products on 25 October 2026. Only images matching that current selection may be published in product cards, details or navigation.

`src/data/productPhotoRegistry.js` is the active image registry. Rill retains the supplied digital render; all other selected entries use their own explicitly labelled concept illustrations. Earlier photos of excluded machines are not substitutes for missing images.

For a new photo: confirm its machine identity and publication rights, assign a unique product slug, keep a source SHA-256 and reviewed WebP SHA-256, and use `kind: 'render'` for digitally generated renders. Never describe renders as verified photographs. Add `public/product-photos/<slug>.webp` and switch its status to ready only when the file is present and reviewed. Tests validate active scope, source uniqueness, file headers, hashes and fallbacks.

Run npm test and npm run build, then inspect desktop/mobile presentation before merging. The full source history remains recoverable in git; keep this document aligned with the active catalogue rather than the superseded 63-item list.
