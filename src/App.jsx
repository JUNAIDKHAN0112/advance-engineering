import { lazy, Suspense, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import { products } from "./data/catalogue";
const Home = lazy(() => import("./Components/Home/Home"));
const About = lazy(() => import("./Components/About/About"));
const Machines = lazy(() => import("./Components/Machines/Machines"));
const Services = lazy(() => import("./Components/Services/Services"));
const Quote = lazy(() => import("./Components/Quote/Quote"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    const product = products.find((item) => pathname === `/${item.slug}`);
    const name =
      product?.name ||
      {
        "/": "Food Processing & Industrial Machinery",
        "/about": "Our Story",
        "/machines": "Our Machinery",
        "/services": "Our Expertise",
        "/quote": "Discuss Your Project",
      }[pathname] ||
      "Page Not Found";
    document.title = `${name} | National Engineering Works`;
    const description = document.querySelector('meta[name="description"]');
    if (description)
      description.content =
        product?.summary ||
        "National Engineering Works, Solapur. Food processing machinery, milling plant solutions, installation and service. Established in 2010.";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}
export default function App() {
  return (
    <>
      <RouteEffects />
      <Suspense
        fallback={
          <div className="loading-screen" role="status">
            <span className="loading-line" />
            Preparing your view…
          </div>
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="machines" element={<Machines />} />
            <Route path="services" element={<Services />} />
            <Route path="quote" element={<Quote />} />
            {products.map((product) => (
              <Route
                key={product.slug}
                path={product.slug}
                element={<ProductDetail product={product} />}
              />
            ))}
            <Route
              path="*"
              element={
                <section className="container not-found">
                  <p className="eyebrow">404 / A DIFFERENT DIRECTION</p>
                  <h1>Page not found</h1>
                  <p>Let’s get you back to something worth exploring.</p>
                  <Link className="button" to="/">
                    Return home →
                  </Link>
                </section>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
