export const company = {
  name: "National Engineering Works",
  email: "nationalengineering973@gmail.com",
  phones: ["9634781042", "6395233717", "9579802492"],
  address: "C-162, Chincholi MIDC, Solapur, Maharashtra 413255, India",
  maps: "https://www.google.com/maps/search/?api=1&query=C-162+Chincholi+MIDC+Solapur+413255",
};

export const products = [
  {
    slug: "destoner",
    name: "De-stoner",
    category: "Cleaning & separation",
    image: "machinery",
    tag: "01",
    summary:
      "A cleaner beginning. Separate stones and heavier impurities from grains and pulses.",
    description:
      "Designed for the cleaning stage of a milling line, a de-stoner separates heavier impurities from the product stream through the combined action of airflow and a vibrating deck.",
    applications: [
      "Grain and pulse cleaning",
      "Pre-milling preparation",
      "Removal of heavier foreign material",
    ],
    considerations: [
      "Material and impurity profile",
      "Required throughput",
      "Airflow and aspiration arrangement",
      "Integration with the cleaning line",
    ],
  },
  {
    slug: "elevator",
    name: "Bucket elevator",
    category: "Material handling",
    image: "installation",
    tag: "02",
    summary:
      "Purposeful movement. Vertical handling for grains, pulses, and bulk materials.",
    description:
      "Bucket elevators lift bulk materials between processing stages using buckets attached to a moving belt or chain. The arrangement is selected around the product, lift height, and surrounding plant layout.",
    applications: [
      "Vertical grain transfer",
      "Feeding elevated processing equipment",
      "Interconnecting milling stages",
    ],
    considerations: [
      "Lift height and plant clearance",
      "Material handling characteristics",
      "Required transfer rate",
      "Inlet and discharge locations",
    ],
  },
  {
    slug: "cyclone",
    name: "Horizontal cyclone",
    category: "Air & dust management",
    image: "plant",
    tag: "03",
    summary:
      "Keep the process moving. Particle separation within your aspiration system.",
    description:
      "Cyclone separators use centrifugal action to separate suspended particles from an air stream. Selection depends on the conveyed material and the requirements of the complete aspiration system.",
    applications: [
      "Milling aspiration systems",
      "Particle recovery",
      "Dust separation in processing lines",
    ],
    considerations: [
      "Air volume and system pressure",
      "Particle characteristics",
      "Discharge arrangement",
      "Ducting and available space",
    ],
  },
  {
    slug: "fatka",
    name: "Fatka machine",
    category: "Cleaning & separation",
    image: "processing",
    tag: "04",
    summary:
      "Built around the process. Discuss the right configuration for your pulse milling line.",
    description:
      "Fatka machine requirements vary with the milling process and material being handled. Our team can review your intended operation and confirm the appropriate machine configuration before quotation.",
    applications: [
      "Pulse milling line integration",
      "Process-specific material preparation",
      "Custom plant configurations",
    ],
    considerations: [
      "Intended processing function",
      "Pulse or grain type",
      "Required output and finish",
      "Upstream and downstream equipment",
    ],
  },
  {
    slug: "buff",
    name: "Buff polisher",
    category: "Milling & finishing",
    image: "detail",
    tag: "05",
    summary:
      "Attention to the finish. Polishing solutions for pulse processing applications.",
    description:
      "Buff polishing is a finishing operation within pulse processing. The polishing arrangement should be selected around the pulse variety, its condition, and the finish required by the customer.",
    applications: [
      "Pulse finishing",
      "Milling line polishing stages",
      "Product appearance improvement",
    ],
    considerations: [
      "Pulse variety and condition",
      "Desired finish",
      "Required throughput",
      "Cleaning and maintenance access",
    ],
  },
  {
    slug: "dal",
    name: "Dal polisher",
    category: "Milling & finishing",
    image: "processing",
    tag: "06",
    summary:
      "Refinement in every batch. Finishing equipment for processed pulses.",
    description:
      "A dal polisher is used in the finishing stage of pulse processing to improve the surface appearance of the product. Operating arrangements are selected to suit the material and desired finish.",
    applications: [
      "Dal finishing",
      "Pulse processing plants",
      "Final polishing stages",
    ],
    considerations: [
      "Product variety",
      "Finish and handling requirements",
      "Target throughput",
      "Connection to the existing line",
    ],
  },
  {
    slug: "conveyor",
    name: "Screw conveyor",
    category: "Material handling",
    image: "craft",
    tag: "07",
    summary:
      "Connected by design. Controlled transfer between the stages of your plant.",
    description:
      "A screw conveyor moves bulk material using a rotating helical flight within a trough or tube. Length, inclination, and construction are determined by the material and layout of the installation.",
    applications: [
      "Bulk grain and powder transfer",
      "Feeding processing equipment",
      "Connecting production stages",
    ],
    considerations: [
      "Material characteristics",
      "Transfer distance and inclination",
      "Inlet and outlet positions",
      "Cleaning and access requirements",
    ],
  },
  {
    slug: "blower",
    name: "Industrial blower",
    category: "Air & dust management",
    image: "workshop",
    tag: "08",
    summary:
      "Airflow with intent. Support for aspiration, extraction, and pneumatic handling.",
    description:
      "Industrial blowers create the airflow required by aspiration and material handling systems. They should be selected together with the ducting and connected equipment to meet the needs of the complete installation.",
    applications: [
      "Mill aspiration",
      "Dust extraction systems",
      "Pneumatic material handling",
    ],
    considerations: [
      "Required air volume",
      "System pressure requirement",
      "Ducting layout",
      "Motor and electrical requirements",
    ],
  },
  {
    slug: "rotary",
    name: "Rotary airlock",
    category: "Air & dust management",
    image: "workshop",
    tag: "09",
    summary:
      "A measured transition. Controlled discharge between connected process systems.",
    description:
      "A rotary airlock uses a rotating, vaned rotor to meter bulk material through its housing while limiting air transfer between connected sections of a system.",
    applications: [
      "Cyclone discharge",
      "Powder and grain handling",
      "Aspiration system integration",
    ],
    considerations: [
      "Material characteristics",
      "Required discharge rate",
      "Pressure conditions",
      "Connection sizes and maintenance access",
    ],
  },
  {
    slug: "rill",
    name: "Rill machine",
    category: "Cleaning & separation",
    image: "machinery",
    tag: "10",
    summary:
      "The right separation. A configuration tailored to your grain processing needs.",
    description:
      "Discuss your grain separation or grading requirement with our team. We will confirm the appropriate Rill machine configuration and its role in your processing line before preparing a quotation.",
    applications: [
      "Grain processing line integration",
      "Material-specific separation requirements",
      "Custom milling arrangements",
    ],
    considerations: [
      "Intended separation function",
      "Grain or pulse type",
      "Required output",
      "Plant layout and equipment connections",
    ],
  },
];
export const categories = [
  "All machinery",
  ...new Set(products.map((product) => product.category)),
];
export const services = [
  {
    number: "01",
    title: "Consultation & planning",
    short: "The right questions. A considered beginning.",
    description:
      "We begin with your material, process, and production goals. Together, we identify the machinery and layout considerations that will shape your project.",
    details: [
      "Requirement review",
      "Equipment selection",
      "Plant layout discussion",
    ],
  },
  {
    number: "02",
    title: "Design & manufacturing",
    short: "From a considered drawing to a working machine.",
    description:
      "Machinery and plant arrangements developed around the needs of the application, with practical attention to material movement, operation, and access.",
    details: [
      "Application-led design",
      "Manufacturing coordination",
      "Integration planning",
    ],
  },
  {
    number: "03",
    title: "Installation & commissioning",
    short: "Bringing every component together.",
    description:
      "Support through the installation and setup of machinery, helping align the equipment with the layout and operating requirements of your facility.",
    details: [
      "Installation coordination",
      "Equipment setup",
      "Operational handover",
    ],
  },
  {
    number: "04",
    title: "Service & maintenance",
    short: "A relationship that continues beyond installation.",
    description:
      "Discuss servicing, repair, and maintenance requirements with our team to keep your machinery supported throughout its working life.",
    details: [
      "Service consultation",
      "Repair assessment",
      "Maintenance guidance",
    ],
  },
];
