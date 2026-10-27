import { products } from './catalogue.js';
import { categoryDefinitions } from './catalogueScope.js';
import { processGuides } from './processGuides.js';
export const siteOrigin = 'https://nationalengineeringworks.in';
export const routeAliases = {
  '/whole-wheat-flour-mill-plant': '/whole-wheat-flour-plant',
  '/seed-cleaning-grading-plant': '/seed-cleaning-plant',
};
const general = {
  '/': { title: 'Food Processing & Industrial Machinery', description: 'National Engineering Works, Solapur. Explore our selected machinery for cleaning, milling, conveying, aspiration and five processing-plant applications.' },
  '/about': { title: 'Our Story', description: 'Get to know National Engineering Works and our approach to food-processing machinery and plant projects.' },
  '/machines': { title: 'Machinery Catalogue', description: 'Explore 32 selected machines and plant solutions from National Engineering Works, with applications and configuration guidance.' },
  '/services': { title: 'Our Expertise', description: 'Discuss planning, manufacturing, installation and service requirements with National Engineering Works.' },
  '/quote': { title: 'Discuss Your Project', description: 'Share your material, intended process and plant requirements with National Engineering Works.' },
  '/processes': { title: 'Processing Guides', description: 'Understand pulses and dal, rice processing, besan milling, whole-wheat flour and seed cleaning before selecting a plant.' },
};
const records = new Map([
  ...Object.entries(general),
  ...products.map(p => [`/${p.slug}`, { title: p.name, description: p.summary }]),
  ...categoryDefinitions.map(c => [`/machines/category/${c.slug}`, { title: c.name, description: c.summary }]),
  ...processGuides.map(g => [`/processes/${g.slug}`, { title: g.title, description: g.summary }]),
]);
export const publicPaths = [...records.keys()];
export function routeMetadata(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  return records.get(routeAliases[path] || path) || null;
}
