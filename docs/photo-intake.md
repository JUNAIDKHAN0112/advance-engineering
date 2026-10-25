# Distinct machinery photos — upload and publishing gate

The user-provided `NATIONALPICS.zip` contained multiple repeated photos and screenshots.

A separate downloadable delivery pack (`National_Engineering_10_Unique_Product_Photos.zip`)
contains ten verified **different machine categories** and a source-to-product audit table.
Source images were not arbitrarily assigned to missing products.

## To publish

1. Confirm you own/have publication rights for each supplied photograph, and that its
   visible equipment matches your manufactured model. Images with someone else's
   logo or watermark must not be misrepresented as your own.
2. Unzip the reviewed pack into repository root. This creates
   `public/product-photos/<slug>.webp` for all 10 listed products.
3. In `src/data/productPhotoRegistry.js`, switch each verified/uploaded item's status
   from `staged` to `ready`. The site automatically prefers those WebP images.
4. Run `npm test`, `npm run build` and inspect mobile/desktop product pages before merging.

The tests block duplicate files, reused source hashes, mismatched asset hashes,
unsupported WebP files, and missing ready images. Non-published products keep
unique fallback SVG concept illustrations; **never reuse another machine's photo.**

## Consistent visual treatment

Source shapes are preserved. Brand colour accent #5197a8; neutral #c9c9c9;
white studio-like background; 'National Engineering' watermark outside the machine.
The pack is for a provisional catalogue, not proof of the provenance of each photo.

## Additional machine renders (25 October 2026)

Three distinct, brand-free digital product renders are now mapped as:

- `rill.webp` — Rill Machine (customer identified)
- `cumin-stick-cutter.webp` — Cumin Stick Cutter (customer identified)
- `reel-machine.webp` — Reel Screening Machine (tentative inference from exposed perforated screen drum; customer has **not** confirmed identity)

These are AI-assisted digital renders based on supplied reference images, **not actual photographs** of manufactured machinery. The new images use white-background catalogue presentation, teal #5197A8, grey #C9C9C9 and National Engineering watermark. They preserve machine silhouettes but must not be treated as certified product specifications.

Do not reuse any product image for another model. The reel-machine source identity must be confirmed before portraying that render as a product reference beyond the clearly marked illustrative designation. The image source material includes competitor-branded samples; clarify permission to use the visual reference material commercially before deploying to a public site.
