import { products } from "../data";
import ProductSlider from "./ProductSlider";

const Products = () => {
  const { title, subtitle } = products;

  return (
    <section className="section">
      <div className="container">
        {/* text */}
        <div className="text-center">
          <h2 className="title">{title} </h2>
          <p className="max-w-[600px] mx-auto mb-12 lg:mb-16">{subtitle} </p>
        </div>

        {/* slider */}
        <ProductSlider />
      </div>
    </section>
  );
};

export default Products;
