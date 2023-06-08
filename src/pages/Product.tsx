import { Categories, ProductSort, Products } from "components/Product";
import { Navigation } from "components/common";
import { SidebarWrapper } from "./Product.styles";

const Product: React.FC = () => {
  return (
    <div style={{ display: "flex", gap: "1.5rem" }}>
      <SidebarWrapper>
        <Navigation />
        <Categories />
      </SidebarWrapper>
      <div>
        <ProductSort />
        <Products />
      </div>
    </div>
  );
};

export default Product;
