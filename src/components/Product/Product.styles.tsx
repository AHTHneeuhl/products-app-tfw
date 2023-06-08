import { styled } from "styled-components";
import { theme } from "theme";

const ProductCard = styled.div`
  width: 274px;
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15);
`;

const ProductThumbnail = styled.img`
  width: 100%;
  height: 148px;
  border-radius: 0.75rem;
  object-fit: cover;
`;

const ProductTitle = styled.h3``;

const ProductAmount = styled.h4``;

const ProductDescription = styled.p`
  font-size: 13px;
  color: ${theme.colors.darkGrey};
`;

const ProductBrand = styled.p`
  font-size: 14px;
`;

const ProductCategory = styled.p`
  font-size: 14px;
`;

const ProductStock = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const ProductDiscount = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const ProductRating = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

export {
  ProductCard,
  ProductThumbnail,
  ProductTitle,
  ProductBrand,
  ProductCategory,
  ProductAmount,
  ProductDescription,
  ProductStock,
  ProductDiscount,
  ProductRating,
};
