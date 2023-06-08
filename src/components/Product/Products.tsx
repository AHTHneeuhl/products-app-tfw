import { useAppSelector } from "redux/store/hooks";
import { ProductList } from "./Products.styles";
import Product from "./Product";

const Products: React.FC = () => {
  const products = useAppSelector((state) => state.products.products);

  if (!products) return null;

  return (
    <ProductList>
      {products.map(
        ({
          id,
          title,
          price,
          stock,
          brand,
          rating,
          category,
          thumbnail,
          description,
          discountPercentage,
        }) => (
          <Product
            key={id}
            title={title}
            price={price}
            brand={brand}
            stock={stock}
            rating={rating}
            category={category}
            thumbnail={thumbnail}
            description={description}
            discountPercentage={discountPercentage}
          />
        )
      )}
    </ProductList>
  );
};

export default Products;
