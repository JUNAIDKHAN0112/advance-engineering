import { approvedProducts } from './machineProfiles.js';
import { categoryDefinitions } from './catalogueScope.js';

export const company = {
  name: 'National Engineering Works',
  email: 'nationalengineering973@gmail.com',
  phones: ['9634781042', '6395233717', '9579802492'],
  address: 'C-162, Chincholi MIDC, Solapur, Maharashtra 413255, India',
  maps: 'https://www.google.com/maps/search/?api=1&query=C-162+Chincholi+MIDC+Solapur+413255',
};
export const products = approvedProducts;
export const categories = ['All machinery', ...categoryDefinitions.map(c => c.name)];
export const services = [
  { number: '01', title: 'Consultation & planning', short: 'The right questions. A considered beginning.', description: 'We begin with your material, process, and production goals. Together, we identify the machinery and layout considerations that will shape your project.', details: ['Requirement review','Equipment selection','Plant layout discussion'] },
  { number: '02', title: 'Design & manufacturing', short: 'From a considered drawing to a working machine.', description: 'Machinery and plant arrangements developed around the needs of the application, with practical attention to material movement, operation, and access.', details: ['Application-led design','Manufacturing coordination','Integration planning'] },
  { number: '03', title: 'Installation & commissioning', short: 'Bringing every component together.', description: 'Support through the installation and setup of machinery, helping align the equipment with the layout and operating requirements of your facility.', details: ['Installation coordination','Equipment setup','Operational handover'] },
  { number: '04', title: 'Service & maintenance', short: 'A relationship that continues beyond installation.', description: 'Discuss servicing, repair, and maintenance requirements with our team to keep your machinery supported throughout its working life.', details: ['Service consultation','Repair assessment','Maintenance guidance'] },
];
export function filterProducts(category = 'All machinery', query = '') {
  const needle = String(query).trim().toLowerCase();
  return products.filter(p => (category === 'All machinery' || p.category === category)
    && (!needle || [p.name,p.category,p.summary,...p.materials,...p.applications].join(' ').toLowerCase().includes(needle)));
}
