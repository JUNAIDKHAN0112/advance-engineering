import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PageIntro, ProductCard, ButtonLink, ProjectCTA } from '../components/UI';
import { products } from '../data/catalogue.js';
import { processGuides, pulseDefinition, pulseExamples } from '../data/processGuides.js';

function ProductCollection({ slugs }) {
  return <div className="catalogue-grid">{slugs.map(slug => {
    const product = products.find(p => p.slug === slug);
    return product ? <ProductCard key={slug} product={product} index={products.indexOf(product)} /> : null;
  })}</div>;
}
ProductCollection.propTypes = { slugs: PropTypes.arrayOf(PropTypes.string).isRequired };

export function CategoryPage({ category }) {
  const relevant = processGuides.filter(g => g.machines.some(slug => category.products.includes(slug)) || category.products.includes(g.productSlug));
  return <>
    <PageIntro eyebrow="MACHINERY BY APPLICATION" title={category.name}>{category.summary}</PageIntro>
    <section className="container education-section">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/machines">All machinery</Link><span>/</span><span aria-current="page">{category.name}</span></nav>
      <div className="education-split">
        <div><h2>Where this equipment fits</h2><p>{category.explanation}</p></div>
        <aside className="education-panel"><h3>Before choosing a machine</h3><ul>{category.selection.map(text => <li key={text}>{text}</li>)}</ul><ButtonLink to="/quote">Discuss your application</ButtonLink></aside>
      </div>
      <div className="education-section-heading"><h2>Explore the range</h2><span>{category.products.length} machines &amp; solutions</span></div>
      <ProductCollection slugs={category.products} />
      <p className="image-note">Visuals are labelled as digital renders or concept illustrations where applicable. Model configuration and technical specifications are confirmed on enquiry.</p>
      {relevant.length > 0 && <div className="education-related"><h2>Understand the process</h2><div className="education-link-grid">{relevant.map(g => <Link key={g.slug} to={`/processes/${g.slug}`}>{g.label}<span aria-hidden="true"> &rarr;</span></Link>)}</div></div>}
    </section><ProjectCTA />
  </>;
}
CategoryPage.propTypes = { category: PropTypes.object.isRequired };

export function ProcessIndex() {
  return <>
    <PageIntro eyebrow="PROCESSING GUIDES" title={<>Understand the material.<br /><em>Then choose the machinery.</em></>}>Explore five processing applications, their typical stages and the questions that shape an equipment proposal.</PageIntro>
    <section className="container education-section">
      <div className="process-guide-grid">{processGuides.map((g, index) => <article className="process-guide-card" key={g.slug}>
        <span className="small-label">GUIDE {String(index + 1).padStart(2, '0')}</span><h2>{g.label}</h2><p>{g.summary}</p>
        <Link className="text-link" to={`/processes/${g.slug}`}>Read the process guide <span aria-hidden="true">&rarr;</span></Link>
      </article>)}</div>
      <p className="education-notice">These guides explain general processing principles. They are not operating instructions or a guaranteed equipment list. Crop-specific settings, safety arrangements and supply scope require technical review.</p>
    </section><ProjectCTA />
  </>;
}

export function ProcessGuidePage({ guide }) {
  const plant = products.find(p => p.slug === guide.productSlug);
  return <>
    <PageIntro eyebrow="PROCESS KNOWLEDGE / NATIONAL ENGINEERING WORKS" title={guide.title}>{guide.summary}</PageIntro>
    <article className="container education-section process-guide">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/processes">Processing guides</Link><span>/</span><span aria-current="page">{guide.label}</span></nav>
      <nav className="guide-jump-links" aria-label="On this page"><a href="#overview">Overview</a><a href="#process-flow">Process flow</a><a href="#related-machinery">Machinery</a><a href="#planning">Planning</a><a href="#questions">Questions</a></nav>
      <section id="overview" className="guide-block"><h2>Start with the finished product</h2><p className="education-lead">{guide.introduction}</p></section>
      {guide.slug === 'pulse-processing' && <section className="guide-block pulse-definition"><h2>What are pulses? What is dal?</h2><p>{pulseDefinition}</p><div className="pulse-example-grid">{pulseExamples.map(p => <div key={p.name}><h3>{p.name}</h3><p>{p.meaning}</p></div>)}</div></section>}
      <section id="process-flow" className="guide-block"><h2>A typical process route</h2><p>The final sequence depends on the crop, input condition and intended output. Optional stages are included only when required.</p>
        <ol className="process-steps">{guide.steps.map((s, i) => <li key={s.title}><span aria-hidden="true" className="process-step-number">{String(i + 1).padStart(2, '0')}</span><div><h3>{s.title}</h3><p>{s.text}</p></div></li>)}</ol>
      </section>
      <section id="related-machinery" className="guide-block"><h2>Machinery to discuss</h2><p>These are relevant items from our current catalogue, not a claim that every plant requires every machine.</p><ProductCollection slugs={guide.machines} /></section>
      <section id="planning" className="guide-block education-panel"><h2>Prepare your plant enquiry</h2><ul>{guide.planning.map(text => <li key={text}>{text}</li>)}</ul><p>Capacity, dimensions, motor ratings, construction, installation responsibilities and commercial scope are confirmed in the proposal.</p>{plant && <ButtonLink to={`/quote?machine=${plant.slug}`}>Discuss this plant</ButtonLink>}</section>
      <section id="questions" className="guide-block"><h2>Common questions</h2><div className="process-faqs">{guide.faqs.map(f => <details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</div></section>
      {plant && <div className="education-related"><Link className="text-link" to={`/${plant.slug}`}>View {plant.name} <span aria-hidden="true">&rarr;</span></Link></div>}
      <section className="guide-block guide-references"><h2>Further reading</h2><p>Primary references for general process principles, not evidence of National Engineering model specifications.</p><ul>{guide.references.map(ref => <li key={ref.url}><a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.title}</a></li>)}</ul></section>
    </article><ProjectCTA />
  </>;
}
ProcessGuidePage.propTypes = { guide: PropTypes.object.isRequired };
