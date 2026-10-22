import { Link } from "react-router-dom";
import {
  Arrow,
  ButtonLink,
  Eyebrow,
  ProductCard,
  ProjectCTA,
  SectionHeading,
} from "../../components/UI";
import { products, services } from "../../data/catalogue";

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/media/hero.webp"
          alt="An installed milling plant with steel structures and interconnected processing equipment"
          width="1280"
          height="720"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <Eyebrow light>FOOD PROCESSING MACHINERY / EST. 2010</Eyebrow>
          <h1 id="hero-title">
            Engineering
            <br />
            that powers
            <br />
            <em>production.</em>
          </h1>
          <p>
            Food processing machinery and plant solutions.
            <br />
            Considered from the first drawing. Built for the work ahead.
          </p>
          <div className="hero-actions">
            <ButtonLink to="/machines">Explore our machinery</ButtonLink>
            <Link className="hero-secondary" to="/about">
              About our manufacturing
              <Arrow diagonal />
            </Link>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>
            <span className="status-dot" />
            MANUFACTURED IN SOLAPUR, INDIA
          </span>
          <span>
            EST. 2010
            <span className="hero-bottom-line" />
            ENGINEERED TO ENDURE
          </span>
          <a
            href="#introduction"
            className="scroll-link"
            aria-label="Discover our approach"
          >
            SCROLL TO DISCOVER<span>↓</span>
          </a>
        </div>
        <div className="hero-image-label">A CLOSER LOOK AT OUR WORLD / 01</div>
      </section>
      <div className="capability-strip">
        <div className="container">
          <span>FOOD PROCESSING MACHINERY</span>
          <span className="strip-star">✧</span>
          <span>INTEGRATED PLANT SOLUTIONS</span>
          <span className="strip-star">✧</span>
          <span>BUILT AROUND YOUR PROCESS</span>
        </div>
      </div>
      <section className="section intro-section" id="introduction">
        <div className="container intro-grid">
          <div>
            <Eyebrow>THE NATIONAL APPROACH</Eyebrow>
            <span className="section-index">01 / WHO WE ARE</span>
          </div>
          <div>
            <h2>
              The measure of a machine
              <br />
              is what it makes <em>possible.</em>
            </h2>
            <div className="intro-bottom">
              <p>
                Behind every productive plant is a series of thoughtful
                decisions. Since 2010, National Engineering Works has brought
                practical engineering and manufacturing experience to food
                processing machinery — helping turn requirements into working
                solutions.
              </p>
              <Link className="text-link" to="/about">
                Discover our story
                <Arrow diagonal />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section collection-section">
        <div className="container">
          <SectionHeading
            eyebrow="THE MACHINERY COLLECTION"
            title={
              <>
                Machinery for every stage.
                <br />
                <em>Built for your process.</em>
              </>
            }
            link="/machines"
            linkText="View all machinery"
          />
          <div className="home-product-grid">
            {[products[0], products[1], products[5], products[6]].map(
              (product, index) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  index={index}
                />
              ),
            )}
          </div>
          <p className="image-note">
            Photography from our machinery and plant projects. Final equipment
            configuration is confirmed for each enquiry.
          </p>
        </div>
      </section>
      <section className="craft-section">
        <div className="craft-photo">
          <img
            src="/media/factory.webp"
            alt="Interior of a grain processing plant, showing machinery and material handling systems"
            loading="lazy"
            width="1280"
            height="720"
          />
          <span>FROM THE WORKSHOP TO THE WORKING FLOOR.</span>
        </div>
        <div className="craft-copy">
          <Eyebrow light>MORE THAN A MACHINE</Eyebrow>
          <h2>
            Every component.
            <br />
            One considered
            <br />
            <em>whole.</em>
          </h2>
          <p>
            A plant is only as good as the way it works together. We look beyond
            individual machines to the movement of materials, the connections
            between stages, and the people who operate them.
          </p>
          <Link to="/services" className="text-link text-link--light">
            Explore our expertise
            <Arrow diagonal />
          </Link>
          <div className="craft-values">
            <span>
              01<span>Practical by design</span>
            </span>
            <span>
              02<span>Built around your needs</span>
            </span>
            <span>
              03<span>Support beyond installation</span>
            </span>
          </div>
        </div>
      </section>
      <section className="section expertise-section">
        <div className="container expertise-grid">
          <div className="expertise-intro">
            <Eyebrow>FROM CONCEPT TO CONTINUITY</Eyebrow>
            <h2>
              A partner at
              <br />
              <em>every stage.</em>
            </h2>
            <p>
              One conversation can shape an entire production line. Our work
              continues through planning, manufacturing, installation, and
              ongoing support.
            </p>
            <Link className="text-link" to="/services">
              How we work
              <Arrow diagonal />
            </Link>
          </div>
          <div className="service-accordion">
            {services.map((service, index) => (
              <details key={service.number} open={index === 0}>
                <summary>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <span className="accordion-plus" aria-hidden="true" />
                </summary>
                <div className="accordion-content">
                  <p>{service.description}</p>
                  <Link to="/services">
                    Discover more
                    <Arrow />
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="factory-banner">
        <img
          src="/media/installation.webp"
          alt="An installation of conveyors, elevators, and supporting steelwork inside a processing plant"
          loading="lazy"
          width="1280"
          height="720"
        />
        <div className="container">
          <Eyebrow light>ROOTED IN SOLAPUR. BUILT FOR YOUR AMBITION.</Eyebrow>
          <h2>
            Real people.
            <br />
            Real engineering.
            <br />
            <em>Lasting possibilities.</em>
          </h2>
          <ButtonLink to="/about" secondary>
            Inside National Engineering
          </ButtonLink>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
