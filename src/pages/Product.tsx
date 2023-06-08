import {
  Categories,
  ProductFilter,
  ProductSort,
  Products,
} from "components/Product";
import { Navigation } from "components/common";
import {
  ContentWrapper,
  SidebarWrapper,
  SortAndFilter,
} from "./Product.styles";

const Product: React.FC = () => {
  return (
    <div style={{ display: "flex", gap: "1.5rem" }}>
      <SidebarWrapper>
        <Navigation />
        <Categories />
      </SidebarWrapper>
      <ContentWrapper>
        <SortAndFilter>
          <ProductSort />
          <ProductFilter />
        </SortAndFilter>
        <Products />
      </ContentWrapper>
    </div>
  );
};

export default Product;
