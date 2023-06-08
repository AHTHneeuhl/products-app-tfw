import { CategoriesWrapper, Category } from "./Categories.styles";
import { useAppDispatch, useAppSelector } from "redux/store/hooks";
import { setProducts } from "redux/slices/products";
import { filterByCategory } from "helpers/productUtils";

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  const categories = useAppSelector((state) => state.products.categories);

  const handleFilterByCategory = (category: string) => {
    dispatch(setProducts(filterByCategory(products, category)));
  };

  return (
    <CategoriesWrapper>
      {categories.map((category) => (
        <Category
          key={category}
          onClick={() => handleFilterByCategory(category)}
        >
          {category}
        </Category>
      ))}
    </CategoriesWrapper>
  );
};

export default Categories;
