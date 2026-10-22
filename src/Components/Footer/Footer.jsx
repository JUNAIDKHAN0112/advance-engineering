import { Link } from "react-router-dom";
import { Arrow, Brand } from "../../components/UI";
import { company } from "../../data/catalogue";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand compact />
            <p>
              Considered engineering.
              <br />
              Lasting partnerships.
            </p>
            <span className="small-label">SOLAPUR, INDIA · EST. 2010</span>
          </div>
          <div>
            <h2>Discover</h2>
            <Link to="/about">Our story</Link>
            <Link to="/machines">Our machinery</Link>
            <Link to="/services">Our expertise</Link>
            <Link to="/quote">Get in touch</Link>
          </div>
          <div className="footer-contact">
            <h2>Let’s talk</h2>
            <a href={`mailto:${company.email}`}>
              {company.email}
              <Arrow diagonal />
            </a>
            <a href={`tel:+91${company.phones[0]}`}>+91 {company.phones[0]}</a>
            <a href={`tel:+91${company.phones[1]}`}>+91 {company.phones[1]}</a>
            <a href={`tel:+91${company.phones[2]}`}>+91 {company.phones[2]}</a>
          </div>
          <div>
            <h2>Visit us</h2>
            <p>
              C-162, Chincholi MIDC
              <br />
              Solapur, Maharashtra
              <br />
              413255, India
            </p>
            <a
              href={company.maps}
              target="_blank"
              rel="noreferrer"
              className="footer-directions"
            >
              Get directions
              <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} National Engineering Works</span>
          <span>Built with purpose. Engineered to last.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
