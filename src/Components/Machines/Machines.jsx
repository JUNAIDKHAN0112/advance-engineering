import { useState } from "react";
import { PageIntro, ProductCard, ProjectCTA } from "../../components/UI";
import { categories, products } from "../../data/catalogue";
export default function Machines() {
  const [category, setCategory] = useState("All machinery");
  const filtered =
    category === "All machinery"
      ? products
      : products.filter((product) => product.category === category);
  return (
    <>
      <PageIntro
        eyebrow="THE MACHINERY COLLECTION"
        title={
          <>
            Purpose-built.
            <br />
            <em>Process by process.</em>
          </>
        }
      >
        From the first clean to the final finish. Explore equipment for
        cleaning, milling, material handling, and air management.
      </PageIntro>
      <section className="catalogue-section">
        <div className="container">
          <div className="catalogue-toolbar">
            <div
              className="category-filters"
              role="group"
              aria-label="Filter machinery by application"
            >
              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  aria-pressed={category === item}
                  className={category === item ? "active" : ""}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <span className="result-count" role="status">
              {String(filtered.length).padStart(2, "0")} MACHINES
            </span>
          </div>
          <div className="catalogue-grid">
            {filtered.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                index={products.indexOf(product)}
              />
            ))}
          </div>
          <p className="image-note">
            Project photography shows our manufacturing and installation
            environments. Model-specific drawings, specifications, and
            configuration are confirmed during consultation.
          </p>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
