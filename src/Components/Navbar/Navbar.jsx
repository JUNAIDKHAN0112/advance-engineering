import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Arrow, Brand } from "../../components/UI";
import { products, services } from "../../data/catalogue";

const links = [
  ["/", "Home"],
  ["/about", "Our story"],
  ["/machines", "Machinery"],
  ["/services", "Services"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const toggle = useRef(null);
  const navRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  const viewingMachine = products.some(
    (product) => pathname === `/${product.slug}`,
  );

  const updateIndicator = (el) => {
    if (!el || !navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = el.getBoundingClientRect();
    setIndicator({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      opacity: 1,
    });
  };

  const resetIndicator = () => {
    if (!navRef.current) return;
    const activeLink = navRef.current.querySelector(".nav-link.active");
    if (activeLink) {
      updateIndicator(activeLink);
    } else {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  useEffect(() => {
    setOpen(false);
    const timer = setTimeout(resetIndicator, 60);
    return () => clearTimeout(timer);
  }, [pathname, viewingMachine]);

  useEffect(() => {
    window.addEventListener("resize", resetIndicator);
    return () => window.removeEventListener("resize", resetIndicator);
  }, []);

  useEffect(() => {
    if (!open) return;
    function close(event) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav
          ref={navRef}
          className="desktop-nav"
          aria-label="Main navigation"
          onMouseLeave={resetIndicator}
        >
          {links.map(([to, name]) => {
            const isMachines = to === "/machines";
            const isServices = to === "/services";
            const isActive =
              (to === "/" && pathname === "/") ||
              (to === "/about" && pathname === "/about") ||
              (to === "/machines" && (pathname === "/machines" || viewingMachine)) ||
              (to === "/services" && pathname === "/services");

            return (
              <div key={to} className="nav-item-wrapper">
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  onMouseEnter={(e) => updateIndicator(e.currentTarget)}
                >
                  {name}
                </NavLink>

                {isServices && (
                  <div className="nav-dropdown nav-dropdown--services">
                    <div className="nav-dropdown-header">
                      <span className="small-label">OUR SERVICES & EXPERTISE</span>
                      <Link to="/services" className="nav-dropdown-all">
                        All services <Arrow />
                      </Link>
                    </div>
                    <div className="nav-dropdown-grid">
                      {services.map((service) => (
                        <Link
                          key={service.number}
                          to="/services"
                          className="nav-dropdown-card"
                        >
                          <span className="dropdown-card-num">{service.number}</span>
                          <div>
                            <h4>{service.title}</h4>
                            <p>{service.short}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {isMachines && (
                  <div className="nav-dropdown nav-dropdown--machines">
                    <div className="nav-dropdown-header">
                      <span className="small-label">MACHINERY COLLECTION</span>
                      <Link to="/machines" className="nav-dropdown-all">
                        All machinery <Arrow />
                      </Link>
                    </div>
                    <div className="nav-dropdown-grid nav-dropdown-grid--machines">
                      {products.slice(0, 6).map((product) => (
                        <Link
                          key={product.slug}
                          to={`/${product.slug}`}
                          className="nav-dropdown-card"
                        >
                          <div className="dropdown-machine-img">
                            <img
                              src={`/media/${product.image}.webp`}
                              alt={product.name}
                              width="50"
                              height="40"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h4>{product.name}</h4>
                            <span className="dropdown-card-cat">{product.category}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="nav-dropdown-footer">
                      <Link to="/machines" className="text-link">
                        Explore the complete machinery catalogue
                        <Arrow />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <span
            className="nav-slide-indicator"
            style={{
              left: `${indicator.left}px`,
              width: `${indicator.width}px`,
              opacity: indicator.opacity,
            }}
            aria-hidden="true"
          />
        </nav>
        <NavLink to="/quote" className="header-enquiry">
          Start a conversation
          <Arrow diagonal />
        </NavLink>
        <button
          ref={toggle}
          type="button"
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {[...links, ["/quote", "Start a conversation"]].map(([to, name], i) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={
              to === "/machines" && viewingMachine ? "active" : undefined
            }
            onClick={() => setOpen(false)}
          >
            <span>0{i + 1}</span>
            {name}
            <Arrow diagonal />
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
