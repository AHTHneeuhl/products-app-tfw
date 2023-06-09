import {
  Categories,
  ProductFilter,
  ProductSort,
  Products,
} from "components/Product";
import { Navigation } from "components/common";
import {
  Container,
  ContentWrapper,
  SidebarWrapper,
  SortAndFilter,
} from "./Product.styles";

const Product: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Product;
