import { useNotification } from "hooks";
import { useAppDispatch } from "redux/store/hooks";
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
import { setItemToCart } from "redux/slices/cart";

type TProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const Product: React.FC<TProps> = ({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images,
}) => {
  const { notifySuccess } = useNotification();
  const dispatch = useAppDispatch();

  const handleBuy = () => {
    if (stock <= 50) {
      notifySuccess("Hurry! only a few items left!");
    } else {
      notifySuccess("Buying...");
    }
  };

  const handleAddToCart = () => {
    dispatch(
      setItemToCart({
        id: id,
        title: title,
        description: description,
        price: price,
        discountPercentage: discountPercentage,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        thumbnail: thumbnail,
        images,
      })
    );
    notifySuccess(`Added ${title} to cart!`);
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
        <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
        <AddToCartButton onClick={handleBuy}>Buy</AddToCartButton>
      </FlexBetween>
    </ProductCard>
  );
};

export default Product;
