import { useAppSelector } from "redux/store/hooks";
import { ContentText, ProductList, TextContainer } from "./Products.styles";
import Product from "./Product";

const Products: React.FC = () => {
  const products = useAppSelector((state) => state.filteredItems.itmes);

  if (!products.length)
    return (
      <TextContainer>
        <ContentText>No products found</ContentText>
      </TextContainer>
    );

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
          images,
        }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            brand={brand}
            stock={stock}
            rating={rating}
            category={category}
            thumbnail={thumbnail}
            description={description}
            discountPercentage={discountPercentage}
            images={images}
          />
        )
      )}
    </ProductList>
  );
};

export default Products;
