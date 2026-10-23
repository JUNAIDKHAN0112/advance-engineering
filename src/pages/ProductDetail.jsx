import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Arrow,
  ButtonLink,
  Eyebrow,
  ProductCard,
  ProjectCTA,
  SectionHeading,
} from "../components/UI";
import { products } from "../data/catalogue";
export default function ProductDetail({ product }) {
  const related = products
    .filter(
      (item) =>
        item.slug !== product.slug && item.category === product.category,
    )
    .slice(0, 2);
  const recommendations = [
    ...related,
    ...products.filter(
      (item) => item.slug !== product.slug && !related.includes(item),
    ),
  ].slice(0, 2);
  return (
    <>
      <section className="product-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/machines">Machinery</Link>
            <span>/</span>
            <span aria-current="page">{product.name}</span>
          </nav>
          <div className="product-hero-grid">
            <div className="product-hero-copy">
              <Eyebrow>{product.category}</Eyebrow>
              <h1>
                {product.name}
                <span className="heading-period">.</span>
              </h1>
              <p className="product-summary">{product.summary}</p>
              <ButtonLink to={`/quote?machine=${product.slug}`}>
                Enquire about this machine
              </ButtonLink>
              <Link to="/machines" className="back-link">
                ← Back to the collection
              </Link>
              <div className="product-reference">
                <span>COLLECTION NO.</span>
                <span>NEW / {product.tag}</span>
              </div>
            </div>
            <figure className="product-hero-photo">
              <img
                src={`/media/${product.image}.webp`}
                alt={`${product.name} — machinery and installation reference from our projects`}
                width="960"
                height="1000"
              />
              <figcaption>
                PROJECT PHOTOGRAPHY / CONFIGURATION CONFIRMED ON ENQUIRY
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container product-information">
          <div>
            <Eyebrow>THE OVERVIEW</Eyebrow>
            <h2>
              Engineered for
              <br />
              <em>the application.</em>
            </h2>
          </div>
          <div>
            <p className="lead">{product.description}</p>
            <div className="application-list">
              <h3>Applications</h3>
              {product.applications.map((item) => (
                <p key={item}>
                  <span>↗</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="configuration-section section">
        <div className="container configuration-grid">
          <div>
            <Eyebrow>THE RIGHT SPECIFICATION</Eyebrow>
            <h2>
              Your process.
              <br />
              <em>Your configuration.</em>
            </h2>
            <p>
              The right equipment starts with the right information. We confirm
              technical specifications, dimensions, and commercial scope against
              your requirement.
            </p>
            <Link className="text-link" to={`/quote?machine=${product.slug}`}>
              Request specifications
              <Arrow diagonal />
            </Link>
          </div>
          <div className="configuration-list">
            {product.considerations.map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
                <Arrow diagonal />
              </div>
            ))}
            <p>
              Capacity, motor rating, construction material, and dimensions are
              quoted after requirement review.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="CONTINUE EXPLORING"
            title={
              <>
                Part of a bigger
                <br />
                <em>working picture.</em>
              </>
            }
            link="/machines"
            linkText="All machinery"
          />
          <div className="related-grid">
            {recommendations.map((item) => (
              <ProductCard
                key={item.slug}
                product={item}
                index={products.indexOf(item)}
              />
            ))}
          </div>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
ProductDetail.propTypes = { product: PropTypes.object.isRequired };
