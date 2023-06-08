import { useNotification } from "hooks";
import {
  AddToCartButton,
  FlexBetween,
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
  const { notifySuccess } = useNotification();

  const handleBuy = () => {
    if (stock <= 50) {
      notifySuccess("Hurry! only a few items left!");
    } else {
      notifySuccess("Buying...");
    }
  };

  return (
    <ProductCard>
      <ProductThumbnail src={thumbnail} alt={title} />
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <FlexBetween>
        <ProductCategory>{category}</ProductCategory>
        <ProductBrand>{brand}</ProductBrand>
      </FlexBetween>
      <FlexBetween>
        <ProductRating>
          {rating} <br />
          <span>Ratings</span>
        </ProductRating>
        <ProductStock>
          {stock} <br />
          <span>Available Stack</span>
        </ProductStock>
      </FlexBetween>
      <FlexBetween>
        <ProductAmount>
          <span>Price</span> <br />${price}
        </ProductAmount>
        <ProductDiscount>
          {discountPercentage}% <br />
          <span>Current Discounts</span>
        </ProductDiscount>
      </FlexBetween>
      <FlexBetween>
        <AddToCartButton>Add to Cart</AddToCartButton>
        <AddToCartButton onClick={handleBuy}>Buy</AddToCartButton>
      </FlexBetween>
    </ProductCard>
  );
};

export default Product;
