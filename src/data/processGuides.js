// Educational references explain general processes, not our model specifications.
const references = {
  pulses: { title: 'FAO: the difference between legumes and pulses', url: 'https://www.fao.org/world-pulses-day/news-detail/what-is-the-difference-between-legumes-and-pulses/en/' },
  dal: { title: 'ICAR-IIPR: pulse-processing technologies', url: 'https://www.icar-iipr.org.in/technologies/' },
  crop: { title: 'ICAR-IIPR: crop-specific milling preparation', url: 'https://www.icar-iipr.org.in/crop-production-technologies/' },
  milling: { title: 'FAO: quality assurance for milled products', url: 'https://www.fao.org/4/v5380e/v5380e06.htm' },
  seeds: { title: 'TNAU: seed processing and grading equipment', url: 'https://agritech.tnau.ac.in/seed_certification/seed_processing_equipments_index.html' },
  wheat: { title: 'Buhler: wheat and whole-wheat processing overview', url: 'https://www.buhlergroup.com/content/buhlergroup/global/en/industries/Wheat-and-grain/Wheat.html' },
};
export const pulseDefinition = 'Pulses are the dry edible seeds of legume crops. Chana, toor, moong, urad, masoor and dry peas are familiar examples. Dal usually refers to a dehusked and/or split pulse product, while whole pulses retain their whole-seed form. Fresh green peas and beans are vegetables, not dry pulses; crops grown primarily for oil, such as soybean and groundnut, are outside this pulse category.';
export const pulseExamples = [
  { name: 'Chana', meaning: 'Chickpea / Bengal gram' },
  { name: 'Toor / Arhar', meaning: 'Pigeon pea' },
  { name: 'Moong', meaning: 'Green gram / mung bean' },
  { name: 'Urad', meaning: 'Black gram' },
  { name: 'Masoor', meaning: 'Lentil' },
  { name: 'Dry peas', meaning: 'Dried field peas' },
];
const step = (title, text) => ({ title, text });
const faq = (question, answer) => ({ question, answer });
export const processGuides = [
  {
    slug: 'pulse-processing', productSlug: 'pulse-processing-plant', title: 'Pulse processing, explained', label: 'Pulses & dal',
    summary: 'Understand the difference between whole pulses and dal, and how a crop-specific processing line is planned.',
    introduction: 'Start by deciding whether the saleable output is cleaned whole pulses, split dal or a stream intended for flour milling. That decision changes the machine sequence. A whole-pulse cleaning line does not automatically need the hulling and splitting stages used for dal.',
    steps: [
      step('Receive and assess', 'Identify the pulse variety, incoming moisture and impurity profile. Keep lots identifiable and plan an even feed to the cleaning section.'),
      step('Clean and grade', 'Use appropriate size screening, magnetic separation and de-stoning to prepare the material. Collect rejects separately rather than returning them to the product.'),
      step('Condition when required', 'Choose any pretreatment, holding and drying stages for the particular pulse. Some crops are easier to mill than others; there is no single moisture or timing recipe for every variety.'),
      step('Dehusk and split', 'Select the hulling or emery-roll arrangement and splitter for the prepared feed. Plan how finished splits, husk, fines and material needing another pass will be separated.'),
      step('Finish and cool as needed', 'Polishing is a market-dependent option, not a compulsory step. Cooling and any final grading should suit the condition of the product leaving the preceding equipment.'),
      step('Collect and check the output', 'Define product quality checks, lot segregation and the downstream collection interface. Weighing, packing and other accessories are included only when expressly agreed.'),
    ],
    machines: ['rill','magnetic-separator','gravity-de-stoner','emery-roll-machine','pulse-splitter-machine','dal-dryer','polisher-machine','vibro-dal-cooler','z-bucket-elevator'],
    planning: ['Which pulse varieties and whether changeovers are needed','Whole-pulse, split-dal or flour-feed objective','Target input and output rates, building dimensions and utilities','How husk, fines, rejects and reprocessing streams will be handled'],
    faqs: [
      faq('Are pulses and dal the same thing?', 'Pulses are the dry seeds. Dal is a processed form, commonly dehusked, split, or both. The desired final form determines which processing stages are needed.'),
      faq('Does every pulse need the same conditioning?', 'No. Crop variety, seed-coat behaviour and incoming condition change the preparation required. Trial material and a crop-specific process review are important before finalising a line.'),
      faq('Is polishing always required?', 'No. Unpolished dal may be the intended product. Include a polisher only when the desired finish and market specification require one.'),
      faq('What should I send for a plant enquiry?', 'Send the pulse varieties, raw-material photographs or samples, intended product, required throughput, site plan, electricity and heating availability. These are inputs to a quotation, not a promise of a particular yield.'),
    ],
    references: [references.pulses, references.dal, references.crop],
  },
  {
    slug: 'rice-processing', productSlug: 'rice-processing-plant', title: 'From paddy to finished rice', label: 'Rice processing',
    summary: 'See how cleaning, hulling and optional bran removal support different rice products.',
    introduction: 'Brown rice and white rice require different finishing routes. Begin with the paddy variety, its condition and the product specification, then plan equipment and collection streams around that objective. Parboiling or drying installations are separate scope decisions and are not implied by a milling-line enquiry.',
    steps: [
      step('Receive and inspect paddy', 'Review the incoming lot and required storage or feed arrangement. The installation should allow controlled delivery to the cleaning stage.'),
      step('Clean and remove dense impurities', 'Select screens, magnetic separation and de-stoning for the actual impurity profile. This prepares the grain before the hulling equipment.'),
      step('Hull the paddy', 'Use the crop-appropriate hulling arrangement to remove the husk. Review the rubber-roll configuration where suitable and define the handling of separated husk.'),
      step('Separate and finish', 'Plan separation of unhulled material from brown rice. A white-rice route also requires bran removal and suitable finishing; brown rice does not require the same degree of milling.'),
      step('Grade and collect', 'Specify the desired fractions and how finished rice, broken material and by-products will be collected. Confirm any downstream packing interface separately.'),
    ],
    machines: ['magnetic-separator','gravity-de-stoner','rubber-roll-machine','huller-machine','polisher-machine','belt-conveyor','vertical-cyclone-separator'],
    planning: ['Paddy variety and brown- or white-rice objective','Incoming grain condition and requested finished grade','Husk, bran and broken-material collection','Plant drawings and equipment supply boundaries'],
    faqs: [
      faq('What changes between brown and white rice?', 'Hulling removes the husk to produce brown rice. Producing white rice involves additional bran removal. The required degree of milling changes the finishing arrangement.'),
      faq('Is parboiling included?', 'Not automatically. A parboiling or separate drying installation must be discussed and explicitly included in the commercial scope.'),
      faq('Can existing equipment be retained?', 'A proposal can be developed around retained machinery after its condition, interfaces and capacity are reviewed. Share the existing layout and nameplate information.'),
    ],
    references: [references.milling],
  },
  {
    slug: 'besan-milling', productSlug: 'besan-mill-plant', title: 'How a besan line is planned', label: 'Besan milling',
    summary: 'Understand feed preparation, flour grinding and grading before choosing a besan plant.',
    introduction: 'Besan is gram flour made from chana. A line receiving prepared chana dal has a different starting point from a plant receiving whole chana. Agree the input material and flour grade first, then define the upstream preparation and downstream collection responsibilities.',
    steps: [
      step('Define the feed', 'Confirm whether the plant will receive whole chana, prepared chana dal or another agreed pulse fraction. Do not size the same route for all three without review.'),
      step('Clean and prepare', 'Remove unwanted material before grinding. Whole chana may need additional conditioning, dehusking and splitting upstream; ready dal needs a different preparation assessment.'),
      step('Grind to flour', 'Select a suitable grinding arrangement for the requested fineness and material condition. Review heat generation, feed regulation and access for cleaning.'),
      step('Grade the flour', 'Screen the ground material using a suitable mesh and grader. Define whether coarse material is reprocessed and how the final flour grade will be checked.'),
      step('Transfer and collect', 'Arrange contained flour movement and cleanable collection points. Confirm finished-product storage, weighing and packaging interfaces in the quotation.'),
    ],
    machines: ['magnetic-separator','gravity-de-stoner','pulse-splitter-machine','pulverizer-machine','centrifugal-besan-grader','bulk-vacuum-conveying-system'],
    planning: ['Whole chana versus ready chana dal as input','Target flour fineness and intended use','Cleaning and changeover requirements','Flour movement, collection and utility availability'],
    faqs: [
      faq('Can I start with chana dal?', 'Yes, the proposed route can be assessed for prepared chana dal. Starting with whole chana adds upstream preparation that must be defined separately.'),
      faq('Why does a besan line need grading?', 'Grinding produces a particle-size distribution. A grader separates the selected fraction from coarser material so the flour can be checked against the intended fineness.'),
      faq('Are mesh size and capacity fixed?', 'No universal values are advertised here. They depend on input material, desired flour grade and the selected equipment; confirm them during technical review.'),
    ],
    references: [references.dal, references.milling],
  },
  {
    slug: 'whole-wheat-milling', productSlug: 'whole-wheat-flour-plant', title: 'Whole-wheat flour and atta processing', label: 'Whole-wheat flour',
    summary: 'Connect grain cleaning, grinding and flour handling to a clearly defined whole-wheat product.',
    introduction: 'Whole-wheat flour includes the grain components rather than simply being another name for refined white flour. Discuss the intended atta texture, composition and use before choosing the grinding and screening arrangement. The final product specification should govern the line, not a borrowed machine capacity.',
    steps: [
      step('Receive wheat', 'Define the incoming wheat, storage interface and controlled feed. Review the lot condition and keep raw and finished material handling separate.'),
      step('Clean the grain', 'Use the agreed screening, magnetic separation and de-stoning stages to prepare the feed. Choose equipment according to the incoming impurities.'),
      step('Prepare for milling', 'Assess whether the process calls for conditioning or other preparation. The selected route should be compatible with the intended flour and available utilities.'),
      step('Grind and assess texture', 'Use the chosen chakki arrangement to produce flour. Feed, grinding surfaces and operating settings are reviewed against fineness and heat-management needs.'),
      step('Screen and collect appropriately', 'Any screening or reprocessing must respect the intended whole-wheat specification. Plan cleanable collection, dust management and the downstream packing interface.'),
    ],
    machines: ['rill','magnetic-separator','gravity-de-stoner','twin-atta-chakki','belt-conveyor','c-type-bucket-elevator','vertical-cyclone-separator'],
    planning: ['Intended atta texture and whole-wheat specification','Wheat condition and required throughput','Grinding-room layout, power and dust collection','Flour collection and cleaning access'],
    faqs: [
      faq('Is whole-wheat flour the same as refined flour?', 'No. Refining removes fractions such as bran and germ, whereas a whole-wheat product retains the grain components. The intended composition must be clear before selecting the route.'),
      faq('Does every flour line need the same grinding settings?', 'No. Wheat characteristics, preparation and the desired flour affect the working gap, feed and handling arrangements.'),
      faq('Can the plant fit an existing building?', 'Share dimensioned drawings, access routes and utility locations. Equipment placement and service clearances can then be reviewed before the supply scope is agreed.'),
    ],
    references: [references.milling, references.wheat],
  },
  {
    slug: 'seed-cleaning-grading', productSlug: 'seed-cleaning-plant', title: 'Seed cleaning and grading, stage by stage', label: 'Seed cleaning',
    summary: 'Use physical differences in a seed lot to choose the appropriate separation stages.',
    introduction: 'The useful separation property may be size, density or how a particle behaves in an air stream. Different impurities require different stages. A crop sample and a description of the contaminants are more useful starting points than assuming that one machine can perform every cleaning task.',
    steps: [
      step('Assess and segregate the lot', 'Identify the crop, incoming contaminants and required output fractions. Plan lot identification and clean changeovers to limit mixing between batches.'),
      step('Pre-clean', 'Remove coarse trash and suitable lighter material before fine grading. Match the first-stage screens and aspiration to the incoming crop.'),
      step('Screen by size', 'Use selected screen apertures to separate the intended fractions. Arrange outlets so accepted material and rejects remain distinguishable.'),
      step('Separate by density where needed', 'Use a gravity separator or de-stoner for the specific separation objective. Density separation complements screening rather than replacing it.'),
      step('Handle and verify', 'Choose transfer arrangements appropriate to the seed and collect each lot separately. Physical cleaning does not prove germination, seed health or varietal purity; those need separate checks.'),
    ],
    machines: ['drum-sieve','vibro-screener-open-type','magnetic-separator','gravity-de-stoner','gravity-separator','vibro-aspiration-channel','z-bucket-elevator'],
    planning: ['Crop varieties and representative seed samples','Contaminants and required size or density fractions','Handling sensitivity and lot-changeover procedure','Separate quality checks and collection requirements'],
    faqs: [
      faq('Does cleaning certify seed quality?', 'No. Cleaning changes the physical composition of a lot. Germination, health and varietal-purity requirements require the relevant independent checks and procedures.'),
      faq('Why use both screens and a gravity separator?', 'Screens separate mainly by dimensions. A gravity separator uses density differences, so it can address separations that size screening alone does not resolve.'),
      faq('Can one layout handle multiple crops?', 'It may be configured for a crop range, but screens, settings and cleaning procedures must be reviewed for each crop. Send the full crop list before equipment selection.'),
    ],
    references: [references.seeds],
  },
];
export const guideForProduct = slug => processGuides.find(g => g.productSlug === slug || g.machines.includes(slug));
