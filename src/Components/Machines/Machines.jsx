import { useMemo, useState } from "react";
import { PageIntro, ProductCard, ProjectCTA } from "../../components/UI";
import { categories, products } from "../../data/catalogue";

export default function Machines() {
  const [category, setCategory] = useState("All machinery");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    const matches = products.filter((product) =>
      (category === "All machinery" || product.category === category) &&
      (!search || [product.name, product.category, product.summary, ...product.applications]
        .join(" ").toLowerCase().includes(search))
    );
    return sort === "alphabetical"
      ? [...matches].sort((a, b) => a.name.localeCompare(b.name))
      : matches;
  }, [category, query, sort]);
  return (
    <>
      <PageIntro
        eyebrow="NATIONAL ENGINEERING WORKS / PRODUCT CATALOGUE"
        title={<>Industrial machinery.<br /><em>Made for your process.</em></>}
      >
        Explore grain cleaning, dal milling, flour processing, conveying, dust control,
        inspection, packaging and integrated plant solutions. Configurations are
        discussed for your material and production requirements.
      </PageIntro>
      <section className="catalogue-section">
        <div className="container">
          <div className="catalogue-search-bar">
            <div>
              <span className="small-label">EXPLORE OUR CAPABILITIES</span>
              <h2>Find the right equipment.</h2>
            </div>
            <label className="catalogue-search-label">
              <span>Search machinery</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by machine, material, process…"
                aria-label="Search machinery"
              />
            </label>
          </div>
          <div className="catalogue-toolbar">
            <div className="category-filters" role="group" aria-label="Filter machinery by application">
              {categories.map((item) => (
                <button type="button" key={item} aria-pressed={category === item}
                  className={category === item ? "active" : ""}
                  onClick={() => setCategory(item)}>
                  {item}
                </button>
              ))}
            </div>
            <label className="catalogue-sort">
              <span className="small-label">SORT</span>
              <select aria-label="Sort products" value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="featured">Featured</option>
                <option value="alphabetical">Name A–Z</option>
              </select>
            </label>
          </div>
          <div className="catalogue-results">
            <span className="result-count" role="status">{filtered.length} MACHINES & SOLUTIONS</span>
            <span className="small-label">APPLICATION-LED ENGINEERING</span>
          </div>
          {filtered.length ? (
            <div className="catalogue-grid">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} index={products.indexOf(product)} />
              ))}
            </div>
          ) : (
            <div className="catalogue-empty">
              <h3>No machinery found.</h3>
              <p>Try a different product, process or material name.</p>
              <button type="button" onClick={() => { setQuery(""); setCategory("All machinery"); }}>Clear search and filters</button>
            </div>
          )}
          <p className="image-note">
            Machine visuals are original conceptual illustrations, not photographs of manufactured models.
            All product names and descriptions are presented for National Engineering Works.
            Capacity, dimensions, motors and available configurations are confirmed on enquiry.
          </p>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
