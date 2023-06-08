import { Categories, ProductSort, Products } from "components/Product";

const Product: React.FC = () => {
  return (
    <div style={{ display: "flex", gap: "1.5rem" }}>
      <div>
        <Categories />
      </div>
      <div>
        <ProductSort />
        <Products />
      </div>
    </div>
  );
};

export default Product;
