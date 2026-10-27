import { NavLink } from 'react-router-dom';
import { categoryDefinitions } from '../data/catalogueScope.js';
export default function CatalogueNav() {
  return (
    <nav className="catalogue-education-nav" aria-label="Machinery categories and learning">
      <div className="container catalogue-education-links">
        <NavLink to="/processes">Processing guides</NavLink>
        {categoryDefinitions.map(c => <NavLink key={c.slug} to={`/machines/category/${c.slug}`}>{c.name}</NavLink>)}
      </div>
    </nav>
  );
}
