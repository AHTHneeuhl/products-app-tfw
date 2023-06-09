import { Navigation } from "components/common";
import { Container } from "./Cart.styles";
import { CartList } from "components/Cart";

const Cart: React.FC = () => {
  return (
    <Container>
      <Navigation />
      <CartList />
    </Container>
  );
};

export default Cart;
