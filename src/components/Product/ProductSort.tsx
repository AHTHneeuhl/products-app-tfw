import {
  sortByAmount,
  sortByDiscount,
  sortByRating,
} from "helpers/productUtils";
import { useState } from "react";
import { setFilteredItems } from "redux/slices/filteredItems";
import { useAppDispatch, useAppSelector } from "redux/store/hooks";
import { SortButton, SortWrapper } from "./ProductSort.styles";

const ProductSort: React.FC = () => {
  const [currentActive, setCurrentActive] = useState<string>("");

  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.filteredItems.itmes);

  const handleSortByAmount = () => {
    dispatch(setFilteredItems(sortByAmount(products)));
    setCurrentActive("amount");
  };

  const handleSortByRating = () => {
    dispatch(setFilteredItems(sortByRating(products)));
    setCurrentActive("rating");
  };

  const handleSortByDiscount = () => {
    dispatch(setFilteredItems(sortByDiscount(products)));
    setCurrentActive("discount");
  };

  return (
    <SortWrapper>
      <SortButton
        onClick={handleSortByAmount}
        active={currentActive === "amount"}
      >
        Price
      </SortButton>
      <SortButton
        onClick={handleSortByRating}
        active={currentActive === "rating"}
      >
        Rating
      </SortButton>
      <SortButton
        onClick={handleSortByDiscount}
        active={currentActive === "discount"}
      >
        Discount
      </SortButton>
    </SortWrapper>
  );
};

export default ProductSort;
