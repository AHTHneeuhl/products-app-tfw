import { useAppDispatch, useAppSelector } from "redux/store/hooks";
import { SortButton, SortWrapper } from "./ProductSort.styles";
import {
  sortByAmount,
  sortByDiscount,
  sortByRating,
} from "helpers/productUtils";
import { setProducts } from "redux/slices/products";

const ProductSort: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  const handleSortByAmount = () => {
    dispatch(setProducts(sortByAmount(products)));
  };

  const handleSortByRating = () => {
    dispatch(setProducts(sortByRating(products)));
  };

  const handleSortByDiscount = () => {
    dispatch(setProducts(sortByDiscount(products)));
  };

  return (
    <SortWrapper>
      <SortButton onClick={handleSortByAmount}>Price</SortButton>
      <SortButton onClick={handleSortByRating}>Rating</SortButton>
      <SortButton onClick={handleSortByDiscount}>Discount</SortButton>
    </SortWrapper>
  );
};

export default ProductSort;
