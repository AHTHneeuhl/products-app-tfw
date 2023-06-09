import Select, { SingleValue } from "react-select";

import { FilterWrapper } from "./ProductFilter.styles";
import { useAppDispatch, useAppSelector } from "redux/store/hooks";
import { getSelectOptions } from "helpers/getSelectOptions";
import { TOption } from "types";
import { filterByBrand, filterByCategory } from "helpers/productUtils";
import { setFilteredItems } from "redux/slices/filteredItems";

const ProductFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const brandOptions = getSelectOptions(
    useAppSelector((state) => state.products.brands)
  );
  const categoryOptions = getSelectOptions(
    useAppSelector((state) => state.products.categories)
  );

  const handleFilterByBrand = (selectedOption: SingleValue<TOption>) => {
    if (selectedOption?.value) {
      const filteredProducts = filterByBrand(products, selectedOption.value);
      dispatch(setFilteredItems(filteredProducts));
    }
  };

  const handleFilterByCategory = (selectedOption: SingleValue<TOption>) => {
    if (selectedOption?.value) {
      const filteredProducts = filterByCategory(products, selectedOption.value);
      dispatch(setFilteredItems(filteredProducts));
    }
  };

  return (
    <FilterWrapper>
      <Select
        options={brandOptions}
        onChange={handleFilterByBrand}
        placeholder="Filter By Brand"
        styles={{
          control: (styles) => ({
            ...styles,
            width: "196px",
          }),
        }}
      />
      <Select
        options={categoryOptions}
        onChange={handleFilterByCategory}
        placeholder="Filter by Category"
        styles={{
          control: (styles) => ({
            ...styles,
            width: "216px",
          }),
        }}
      />
    </FilterWrapper>
  );
};

export default ProductFilter;
