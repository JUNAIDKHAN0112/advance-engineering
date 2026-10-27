import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import CatalogueNav from './components/CatalogueNav';
export default function Layout() {
  return (
    <div id="top">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <CatalogueNav />
      <main id="main-content" tabIndex={-1}><Outlet /></main>
      <Footer />
    </div>
  );
}
