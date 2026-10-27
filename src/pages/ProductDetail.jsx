import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ButtonLink, Eyebrow, ProductCard, ProjectCTA } from '../components/UI';
import { products } from '../data/catalogue.js';
import { categoryForProduct } from '../data/catalogueScope.js';
import { guideForProduct } from '../data/processGuides.js';
import { productImageSrc, productImageAlt, productImageCaption } from '../data/productPhotoRegistry.js';
export default function ProductDetail({ product }) {
  const category = categoryForProduct(product.slug);
  const guide = guideForProduct(product.slug);
  const related = products.filter(p => p.slug !== product.slug && p.category === product.category).slice(0,3);
  return <div className="product-detail-approved">
    <section className="product-hero"><div className="container">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/machines">Machinery</Link><span>/</span><Link to={`/machines/category/${category.slug}`}>{category.name}</Link><span>/</span><span aria-current="page">{product.name}</span></nav>
      <div className="product-hero-grid"><div className="product-hero-copy"><Eyebrow>{product.category}</Eyebrow><h1>{product.name}<span className="heading-period">.</span></h1><p className="product-summary">{product.summary}</p><ButtonLink to={`/quote?machine=${product.slug}`}>Enquire about this equipment</ButtonLink>{guide && <Link className="back-link" to={`/processes/${guide.slug}`}>Read the {guide.label.toLowerCase()} guide &rarr;</Link>}<div className="product-reference"><span>CATALOGUE REFERENCE</span><span>NEW / {product.tag}</span></div></div>
        <figure className="product-hero-photo"><img src={productImageSrc(product)} alt={productImageAlt(product)} width="960" height="800" onError={event => { const fallback = `/product-images/${product.slug}.svg`; if (!event.currentTarget.src.endsWith(fallback)) event.currentTarget.src = fallback; }} /><figcaption>{productImageCaption(product)}</figcaption></figure>
      </div></div></section>
    <section className="container education-section"><div className="education-split"><div><Eyebrow>OVERVIEW</Eyebrow><h2>Built around the application</h2><p>{product.description}</p><h3 className="education-subheading">Working principle</h3><p>{product.workingPrinciple}</p></div><aside className="education-panel"><h3>Applications</h3><ul>{product.applications.map(text => <li key={text}>{text}</li>)}</ul><h3>Materials to discuss</h3><ul>{product.materials.map(text => <li key={text}>{text}</li>)}</ul><p className="education-small">Suitability depends on the exact configuration and material condition. General principles here are not operating instructions.</p></aside></div>
      <div className="education-split guide-block"><div><h2>Features &amp; configuration</h2><p>Confirm these design points with the proposed model; they are not a fixed specification for every machine.</p><ul className="education-checklist">{product.designPoints.map(text => <li key={text}>{text}</li>)}</ul></div><div><h3>Capacity and size options</h3><dl className="specification-notes"><dt>Throughput</dt><dd>Confirmed for the material and target output.</dd><dt>Motor and utilities</dt><dd>Selected after the process and site review.</dd><dt>Dimensions and construction</dt><dd>Defined in the agreed drawing and quotation.</dd><dt>Supply boundary</dt><dd>Accessories, controls and installation are listed explicitly.</dd></dl></div></div>
      <div className="education-panel guide-block"><h2>Prepare your enquiry</h2><ul>{product.considerations.map(text => <li key={text}>{text}</li>)}</ul><p>Share a material sample or description, the required outcome and a dimensioned site layout. National Engineering Works can review equipment selection, manufacturing, installation and service scope with you.</p><ButtonLink to={`/quote?machine=${product.slug}`}>Request a configuration</ButtonLink></div>
      {guide && <aside className="education-related"><h2>Understand the complete process</h2><p>{guide.summary}</p><Link className="text-link" to={`/processes/${guide.slug}`}>{guide.title} &rarr;</Link></aside>}
      <div className="guide-block"><h2>Related machinery</h2><div className="catalogue-grid">{related.map(item => <ProductCard key={item.slug} product={item} index={products.indexOf(item)} />)}</div></div>
    </section><ProjectCTA />
  </div>;
}
ProductDetail.propTypes = { product: PropTypes.object.isRequired };
