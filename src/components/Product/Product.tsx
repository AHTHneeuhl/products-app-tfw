import {
  ProductAmount,
  ProductBrand,
  ProductCard,
  ProductCategory,
  ProductDescription,
  ProductDiscount,
  ProductRating,
  ProductStock,
  ProductThumbnail,
  ProductTitle,
} from "./Product.styles";

type TProps = {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
};

const Product: React.FC<TProps> = ({
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
}) => {
  return (
    <ProductCard>
      <ProductThumbnail src={thumbnail} alt={title} />
      <ProductBrand>{brand}</ProductBrand>
      <ProductCategory>{category}</ProductCategory>
      <ProductDescription>{description}</ProductDescription>
      <ProductTitle>{title}</ProductTitle>
      <ProductAmount>${price}</ProductAmount>
      <ProductStock>{stock}</ProductStock>
      <ProductDiscount>{discountPercentage}%</ProductDiscount>
      <ProductRating>{rating}</ProductRating>
    </ProductCard>
  );
};

export default Product;
