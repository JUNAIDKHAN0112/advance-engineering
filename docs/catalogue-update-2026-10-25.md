# Owner-selected catalogue and process education

## Scope
The owner selected 32 products in four screenshots and approved implementing that selection. The public catalogue now has exactly 6 cleaning/separation products, 12 milling/finishing products, 5 handling/conveying products, 4 air/dust products and 5 turnkey plants. The other 31 entries are excluded from routes, metadata, enquiry choices, searches and related-item listings. This includes the ten old entries outside the latest selection. The selection overrides earlier catalogue expansion requests.

## Design and implementation
The existing React/React Router/Vite application and company identity are retained. `catalogueScope.js` defines the selection; `machineProfiles.js` supplies substantive product information; `catalogue.js` is the single catalogue used across the UI. No new dependencies are needed.

Added a processing-guide index, five individual source-backed process guides and five category explanation pages. Each retained product now includes an overview, working principle, applications, material guidance, design considerations, capacity/sizing notes and enquiry links. No numerical capacities, performance guarantees or certifications were invented.

Pulses and dal are explained separately, with common crop examples. Routes are crop- and output-specific; conditioning, drying and polishing are not described as mandatory in every plant. Sources are provided as further reading, not proof of any manufacturer's specifications.

## Images
Only the Rill render belongs to the new selection and has a dedicated ready asset. Its source/asset hashes are preserved and it is labelled as a digital render, not a real photograph. The other 31 selected products retain individually addressed concept illustrations. Images of excluded products are not reassigned to different machines. Existing media remains recoverable in version history.

## Routing
There are 48 canonical pages: 5 existing general pages, 32 product pages, 5 category pages, a guide index and 5 guides. Existing selected product slugs are preserved. Alternative wheat/seed plant spellings redirect only to the equivalent retained product. Excluded product URLs show the recovery page and receive client-side noindex metadata. The static hosting layer still serves the SPA shell; this is not a server-side HTTP 410 implementation.

## Verification
Data/route tests were written first and observed failing before implementation; subsequent local data checks passed. JSX syntax was checked. This environment cannot resolve GitHub/npm hosts to install frontend dependencies, so a full build is not asserted from local checks. The Catalogue checks workflow runs npm ci, all tests, sitemap validation and npm run build on GitHub. Review the workflow outcome before merging.

The change is prepared for draft PR #2 only. No merge or live deployment is part of this update.
