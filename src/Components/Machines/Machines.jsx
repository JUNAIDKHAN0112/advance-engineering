import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PageIntro, ProductCard, ProjectCTA } from '../../components/UI';
import { categories, products, filterProducts } from '../../data/catalogue.js';
import { categoryDefinitions } from '../../data/catalogueScope.js';
export default function Machines() {
  const [params, setParams] = useSearchParams();
  const category = categoryDefinitions.find(c => c.slug === params.get('category'))?.name || 'All machinery';
  const query = params.get('q') || '';
  const [sort, setSort] = useState('featured');
  const filtered = useMemo(() => {
    const matches = filterProducts(category, query);
    return sort === 'alphabetical' ? [...matches].sort((a,b) => a.name.localeCompare(b.name)) : matches;
  }, [category,query,sort]);
  function setFilter(key, value) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value); else next.delete(key);
    setParams(next, { replace: true });
  }
  return <>
    <PageIntro eyebrow="NATIONAL ENGINEERING WORKS / MACHINERY" title={<>Equipment for your material.<br /><em>A process built around it.</em></>}>Explore our selected range for cleaning, milling, conveying, aspiration and five processing-plant applications.</PageIntro>
    <section className="catalogue-section"><div className="container">
      <div className="catalogue-search-bar"><div><span className="small-label">{products.length} MACHINES &amp; SOLUTIONS</span><h2>Find the right equipment.</h2><Link className="text-link" to="/processes">Explore processing guides &rarr;</Link></div>
        <label className="catalogue-search-label"><span>Search machinery</span><input type="search" value={query} onChange={e => setFilter('q', e.target.value)} placeholder="Machine, material or application" /></label></div>
      <div className="catalogue-toolbar"><div className="category-filters" role="group" aria-label="Filter machinery by application">{categories.map(name => <button type="button" key={name} aria-pressed={category === name} className={category === name ? 'active' : ''} onClick={() => setFilter('category', categoryDefinitions.find(c => c.name === name)?.slug || '')}>{name}</button>)}</div>
        <label className="catalogue-sort"><span>Sort</span><select value={sort} onChange={e => setSort(e.target.value)}><option value="featured">Featured</option><option value="alphabetical">Name A-Z</option></select></label></div>
      <div className="catalogue-results"><span className="result-count" role="status">{filtered.length} MACHINES &amp; SOLUTIONS</span>{category !== 'All machinery' && <Link className="text-link" to={`/machines/category/${categoryDefinitions.find(c => c.name === category).slug}`}>About this category &rarr;</Link>}</div>
      {filtered.length ? <div className="catalogue-grid">{filtered.map(product => <ProductCard key={product.slug} product={product} index={products.indexOf(product)} />)}</div> : <div className="catalogue-empty"><h3>No machinery found.</h3><p>Try a different machine name, material or category.</p><button type="button" onClick={() => setParams({}, { replace: true })}>Clear search and filters</button></div>}
      <p className="image-note">Digital renders and concept illustrations are labelled on product pages. Actual model details and configurations are confirmed on enquiry; images are never substituted between different machines.</p>
    </div></section><ProjectCTA />
  </>;
}
