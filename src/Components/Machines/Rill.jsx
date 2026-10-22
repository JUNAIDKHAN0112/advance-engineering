import ProductDetail from "../../pages/ProductDetail";
import { products } from "../../data/catalogue";
export default function MachinePage() {
  return (
    <ProductDetail
      product={products.find((product) => product.slug === "rill")}
    />
  );
}
