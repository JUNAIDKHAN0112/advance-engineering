import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Arrow({ diagonal = false, ...props }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      {diagonal ? (
        <path d="M5 19 19 5M5 5h14v14" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}
Arrow.propTypes = { diagonal: PropTypes.bool };

export function Brand({ compact = false }) {
  return (
    <Link
      to="/"
      className={`brand ${compact ? "brand--footer" : ""}`}
      aria-label="National Engineering Works home"
    >
      <svg
        className="brand-mark"
        width="40"
        height="42"
        viewBox="0 0 40 42"
        fill="none"
        aria-hidden="true"
      >
        <path d="M20 2 37 11.5v19L20 40 3 30.5v-19L20 2Z" />
        <path d="M12 29V13l16 16V13M20 2v8M3 11.5l7 4M37 30.5l-7-4" />
      </svg>
      <span>
        NATIONAL<span>ENGINEERING WORKS</span>
      </span>
    </Link>
  );
}
Brand.propTypes = { compact: PropTypes.bool };

export function Eyebrow({ children, light = false }) {
  return (
    <p className={`eyebrow ${light ? "eyebrow--light" : ""}`}>
      <span />
      {children}
    </p>
  );
}
Eyebrow.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
};

export function ButtonLink({
  to,
  children,
  secondary = false,
  className = "",
  ...props
}) {
  return (
    <Link
      to={to}
      className={`button ${secondary ? "button--outline" : ""} ${className}`}
      {...props}
    >
      {children}
      <Arrow />
    </Link>
  );
}
ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  secondary: PropTypes.bool,
  className: PropTypes.string,
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  link,
  linkText = "Explore",
}) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        {children && <p className="section-intro">{children}</p>}
      </div>
      {link && (
        <Link className="text-link" to={link}>
          {linkText}
          <Arrow />
        </Link>
      )}
    </div>
  );
}
SectionHeading.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  link: PropTypes.string,
  linkText: PropTypes.string,
};

export function PageIntro({ eyebrow, title, children }) {
  return (
    <header className="page-intro">
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </header>
  );
}
PageIntro.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export function ProjectCTA() {
  return (
    <section className="project-cta">
      <div className="container cta-inner">
        <div>
          <Eyebrow light>PLAN YOUR NEXT PROJECT</Eyebrow>
          <h2>
            Build your next
            <br />
            <em>production line.</em>
          </h2>
        </div>
        <div>
          <p>
            A new plant. A better process. The right machine.
            <br />
            It starts with a conversation.
          </p>
          <ButtonLink to="/quote">Discuss your project</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function ProductCard({ product, index = 0 }) {
  return (
    <Link to={`/${product.slug}`} className="product-card">
      <div className="product-card-image">
        <img
          src={`/media/${product.image}.webp`}
          alt={`${product.name} — manufacturing and plant reference`}
          loading="lazy"
          width="720"
          height="600"
        />
        <span className="product-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="product-open">
          <Arrow diagonal />
        </span>
      </div>
      <div className="product-card-copy">
        <span className="small-label">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.summary}</p>
      </div>
    </Link>
  );
}
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  index: PropTypes.number,
};
