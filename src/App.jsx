import { lazy, Suspense, useEffect } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Layout';
import { products } from './data/catalogue.js';
import { categoryDefinitions } from './data/catalogueScope.js';
import { processGuides } from './data/processGuides.js';
import { routeAliases, routeMetadata, siteOrigin } from './data/routeInfo.js';
import './styles/catalogue-education.css';
const Home = lazy(() => import('./Components/Home/Home'));
const About = lazy(() => import('./Components/About/About'));
const Machines = lazy(() => import('./Components/Machines/Machines'));
const Services = lazy(() => import('./Components/Services/Services'));
const Quote = lazy(() => import('./Components/Quote/Quote'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const CategoryPage = lazy(() => import('./pages/CataloguePages').then(m => ({ default: m.CategoryPage })));
const ProcessIndex = lazy(() => import('./pages/CataloguePages').then(m => ({ default: m.ProcessIndex })));
const ProcessGuidePage = lazy(() => import('./pages/CataloguePages').then(m => ({ default: m.ProcessGuidePage })));
function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/';
    const meta = routeMetadata(path);
    const title = `${meta?.title || 'Page Not Found'} | National Engineering Works`;
    document.title = title;
    function setMeta(attribute, key, value) {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.appendChild(element); }
      element.setAttribute('content', value);
    }
    setMeta('name','description',meta?.description || 'This page is not part of our current machinery catalogue.');
    setMeta('name','robots',meta ? 'index,follow' : 'noindex,follow');
    setMeta('property','og:title',title);
    setMeta('property','og:description',meta?.description || 'Explore the current National Engineering catalogue.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (meta) {
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
      canonical.href = `${siteOrigin}${routeAliases[path] || path}`;
    } else canonical?.remove();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
function NotFound() {
  return <section className="container not-found"><p className="eyebrow">404 / CURRENT CATALOGUE</p><h1>Page not found</h1><p>This page is not part of our current product range. Explore the machinery we offer or discuss your application with us.</p><Link className="button" to="/machines">View current machinery &rarr;</Link><Link className="back-link" to="/">Return home</Link></section>;
}
export default function App() {
  return <><RouteEffects /><Suspense fallback={<div className="loading-screen" role="status"><span className="loading-line" />Preparing your view...</div>}><Routes><Route element={<Layout />}>
    <Route index element={<Home />} /><Route path="about" element={<About />} /><Route path="machines" element={<Machines />} /><Route path="services" element={<Services />} /><Route path="quote" element={<Quote />} />
    <Route path="processes" element={<ProcessIndex />} />
    {categoryDefinitions.map(category => <Route key={category.slug} path={`machines/category/${category.slug}`} element={<CategoryPage category={category} />} />)}
    {processGuides.map(guide => <Route key={guide.slug} path={`processes/${guide.slug}`} element={<ProcessGuidePage guide={guide} />} />)}
    {products.map(product => <Route key={product.slug} path={product.slug} element={<ProductDetail product={product} />} />)}
    {Object.entries(routeAliases).map(([from,to]) => <Route key={from} path={from.slice(1)} element={<Navigate to={to} replace />} />)}
    <Route path="*" element={<NotFound />} />
  </Route></Routes></Suspense></>;
}
