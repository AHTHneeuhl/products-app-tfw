import { styled } from "styled-components";
import { theme } from "theme";

const ProductCard = styled.div`
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductThumbnail = styled.img`
  width: 100%;
  height: 148px;
  border-radius: 0.75rem;
  object-fit: cover;
`;

const ProductTitle = styled.h3`
  text-align: center;
  font-weight: 600;
  margin: 0.5rem 0 0.25rem;
`;

const ProductDescription = styled.p`
  font-size: 13px;
  color: ${theme.colors.darkGrey};
  margin: unset;
`;

const ProductAmount = styled.h4`
  font-size: 15px;
  font-weight: 600;

  span {
    color: ${theme.colors.darkGrey};
    font-size: 12px;
    font-weight: 400;
  }
`;

const ProductBrand = styled.p`
  background: ${theme.colors.antiFlashWhite};
  color: ${theme.colors.alpha};
  font-size: 14px;
  font-weight: 600;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.75rem;
`;

const ProductCategory = styled.p`
  background: ${theme.colors.beta};
  color: ${theme.colors.alpha};
  font-size: 14px;
  font-weight: 500;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.75rem;
`;

const ProductStock = styled.p`
  font-size: 13px;
  font-weight: 600;
  text-align: end;
  margin: 0.5rem 0;

  span {
    color: ${theme.colors.darkGrey};
    font-size: 12px;
    font-weight: 400;
  }
`;

const ProductDiscount = styled.p`
  font-size: 14px;
  font-weight: 500;
  text-align: end;
  margin: 0.5rem 0;

  span {
    color: ${theme.colors.darkGrey};
    font-size: 12px;
    font-weight: 400;
  }
`;

const ProductRating = styled.div`
  font-size: 13px;
  font-weight: 600;
  text-align: start;
  margin: 0.5rem 0;

  span {
    color: ${theme.colors.darkGrey};
    font-size: 12px;
    font-weight: 400;
  }
`;

const AddToCartButton = styled.button`
  background: ${theme.colors.black};
  color: ${theme.colors.milk};
  font-family: ${theme.fonts.poppins};
  padding: 0.5rem 1.25rem;
  border-radius: 5rem;
  font-weight: 500;
  border: unset;
  outline: none;
  align-self: center;
  cursor: pointer;
`;

export {
  ProductCard,
  FlexBetween,
  ProductThumbnail,
  ProductTitle,
  ProductBrand,
  ProductCategory,
  ProductAmount,
  ProductDescription,
  ProductStock,
  ProductDiscount,
  ProductRating,
  AddToCartButton,
};
