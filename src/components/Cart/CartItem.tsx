import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  ItemCard,
  ItemTitle,
  ItemThumbnail,
  QuantityContainer,
  ItemQuantity,
  StyledButton,
  ItemAmount,
  IconButton,
} from "./CartItem.styles";
import { useAppDispatch } from "redux/store/hooks";
import {
  decrementQuantity,
  deleteCartItem,
  incrementQuantity,
} from "redux/slices/cart";

type TProps = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
};

const CartItem: React.FC<TProps> = ({
  id,
  title,
  price,
  quantity,
  thumbnail,
}) => {
  const dispatch = useAppDispatch();

  const handleQuantityIncrement = () => {
    dispatch(incrementQuantity(id));
  };

  const handleQuantityDecrement = () => {
    dispatch(decrementQuantity(id));
  };

  const handleDeleteItem = () => {
    dispatch(deleteCartItem(id));
  };

  return (
    <ItemCard>
      <ItemThumbnail src={thumbnail} alt={title} />
      <ItemTitle>{title}</ItemTitle>
      <ItemAmount>${price}</ItemAmount>
      <QuantityContainer>
        <IconButton onClick={handleQuantityDecrement}>
          <AiOutlineMinus size={20} />
        </IconButton>
        <ItemQuantity>{quantity}</ItemQuantity>
        <IconButton onClick={handleQuantityIncrement}>
          <AiOutlinePlus size={20} />
        </IconButton>
      </QuantityContainer>
      <StyledButton onClick={handleDeleteItem}>Remove</StyledButton>
    </ItemCard>
  );
};

export default CartItem;
