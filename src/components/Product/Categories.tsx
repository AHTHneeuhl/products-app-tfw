import { CategoriesWrapper, Category } from "./Categories.styles";
import { useAppSelector } from "redux/store/hooks";
import { useAppContext } from "hooks";

const Categories: React.FC = () => {
  const { handleFetchByCategory } = useAppContext();

  const categories = useAppSelector((state) => state.products.categories);

  return (
    <CategoriesWrapper>
      {categories.map((category) => (
        <Category
          key={category}
          onClick={() => handleFetchByCategory(category)}
        >
          {category}
        </Category>
      ))}
    </CategoriesWrapper>
  );
};

export default Categories;
