import { useAppSelector } from "redux/store/hooks";
import { ContentText, ListContainer, TextContainer } from "./CartList.styles";
import CartItem from "./CartItem";

const CartList: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  if (!cartItems.length) {
    return (
      <TextContainer>
        <ContentText>Your cart is empty</ContentText>
      </TextContainer>
    );
  }

  return (
    <ListContainer>
      {cartItems.map(({ id, title, price, quantity, thumbnail }) => (
        <CartItem
          key={id}
          id={id}
          title={title}
          price={price}
          quantity={quantity}
          thumbnail={thumbnail}
        />
      ))}
    </ListContainer>
  );
};

export default CartList;
