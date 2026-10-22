import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Arrow, Brand } from "../../components/UI";
import { products } from "../../data/catalogue";

const links = [
  ["/", "Home"],
  ["/about", "Our story"],
  ["/machines", "Machinery"],
  ["/services", "Expertise"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const toggle = useRef(null);
  const viewingMachine = products.some(
    (product) => pathname === `/${product.slug}`,
  );
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
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
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([to, name]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={
                to === "/machines" && viewingMachine ? "active" : undefined
              }
            >
              {name}
            </NavLink>
          ))}
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
