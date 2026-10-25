// Owner-approved selection, transcribed from the four screenshots on 25 October 2026.
// This is the only public product allowlist; order follows the owner's categories.
export const categoryDefinitions = [
  {
    slug: 'cleaning-separation', name: 'Cleaning & separation',
    summary: 'Prepare grain, pulses and seeds by separating unwanted material before the next process.',
    explanation: 'Screening separates by size, aspiration by aerodynamic behaviour, and gravity equipment by density. These methods complement one another; a sieve is not a substitute for a de-stoner or a magnetic separator.',
    selection: ['Crop and incoming impurity profile', 'Required size fractions and acceptable product loss', 'Feed consistency, aspiration and discharge layout'],
    products: ['rill','magnetic-separator','vibro-screener-open-type','gravity-de-stoner','gravity-separator','drum-sieve'],
  },
  {
    slug: 'milling-finishing', name: 'Milling & finishing',
    summary: 'Dehusk, split, grind, dry and finish material according to the final product you need.',
    explanation: 'Removing a seed coat, splitting a kernel and milling flour are different operations. Equipment selection starts with the crop, its condition and the desired output, not just a nominal motor size. Finishing and drying stages are included only where the process requires them.',
    selection: ['Raw material and target finished product', 'Moisture, fineness, breakage and finish requirements', 'Cleaning access, wear parts and upstream feed'],
    products: ['centrifugal-besan-grader','twin-psyllium-chakki','pulse-splitter-machine','dal-dryer','huller-machine','rubber-roll-machine','brush-roll-polisher','polisher-machine','pulverizer-machine','emery-roll-machine','vibro-dal-cooler','twin-atta-chakki'],
  },
  {
    slug: 'handling-conveying', name: 'Handling & conveying',
    summary: 'Connect intake, cleaning and processing equipment with a considered material-handling layout.',
    explanation: 'Transfer distance, elevation, bulk density and product fragility determine the handling arrangement. A complete layout also needs access for cleaning, safe inspection points and room to maintain drives and moving parts.',
    selection: ['Lift height, horizontal reach and site drawings', 'Bulk density, particle size and required transfer rate', 'Discharge positions, clean-out access and guarding'],
    products: ['c-type-bucket-elevator','belt-conveyor','z-bucket-elevator','intake-hoppers','bulk-vacuum-conveying-system'],
  },
  {
    slug: 'air-dust-management', name: 'Air & dust management',
    summary: 'Manage aspiration, particle separation and material discharge as parts of one air system.',
    explanation: 'Air-handling components must be selected together with the connected machines and the full air circuit. A cyclone is a particle separator, not a universal final filter; any additional filtration, ducting or safety scope must be confirmed separately.',
    selection: ['Air volume, pressure and connected equipment', 'Dust characteristics and collection arrangement', 'Discharge sealing, inspection and maintenance access'],
    products: ['vibro-aspiration-channel','air-box','double-airlock','vertical-cyclone-separator'],
  },
  {
    slug: 'turnkey-plants', name: 'Turnkey plants',
    summary: 'Plan the equipment, connections and operating sequence for five focused processing applications.',
    explanation: 'A plant proposal should define the raw material, process stages, utilities, installation responsibilities and handover criteria. Turnkey does not mean that every accessory is automatically included; the agreed quotation defines the supply boundary.',
    selection: ['Crop, intake condition and target output', 'Building dimensions, utilities and expansion space', 'Equipment scope, installation and commissioning responsibilities'],
    products: ['pulse-processing-plant','rice-processing-plant','besan-mill-plant','whole-wheat-flour-plant','seed-cleaning-plant'],
  },
];
export const approvedProductSlugs = Object.freeze(categoryDefinitions.flatMap(c => c.products));
export const categoryForProduct = slug => categoryDefinitions.find(c => c.products.includes(slug));
export const retiredProductSlugs = Object.freeze([
  'destoner','elevator','cyclone','fatka','buff','dal','conveyor','blower','rotary','classifier-separator',
  'reel-machine','cumin-stick-cutter','mixranum-mixer','entoleter-machine','mini-scourer-machine','scourer-machine','sesame-seed-continuous-dryer',
  'metal-detector','automatic-packing-machine','colour-sorter-machine','spouting-components','screw-feeder','dust-ducting','pulse-jet-filter',
  'sesame-hulling-plant','psyllium-processing-plant','sortex-plant','grain-handling-system','industrial-blending-plant','grain-cleaning-plant','roller-flour-mill-plant',
]);
