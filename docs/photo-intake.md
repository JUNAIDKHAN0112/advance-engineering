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
