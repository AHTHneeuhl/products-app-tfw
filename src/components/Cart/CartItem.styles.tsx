import { styled } from "styled-components";
import { theme } from "theme";

const ItemCard = styled.div`
  background-color: ${theme.colors.white};
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr 2fr 1fr;
  align-items: center;
`;

const ItemTitle = styled.h5`
  font-weight: 600;
`;

const ItemAmount = styled.h5`
  font-size: 14px;
  font-weight: 600;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const ItemQuantity = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const ItemThumbnail = styled.img`
  height: 2.5rem;
  width: 4rem;
  border-radius: 5px;
  object-fit: cover;
`;

const IconButton = styled.div`
  background-color: ${theme.colors.antiFlashWhite};
  padding: 0.25rem 0.5rem;
  border-radius: 5rem;
  color: ${theme.colors.alpha};
  cursor: pointer;
`;

const StyledButton = styled.button`
  background: ${theme.colors.black};
  color: ${theme.colors.milk};
  font-family: ${theme.fonts.poppins};
  padding: 0.5rem 1.25rem;
  border-radius: 5rem;
  font-weight: 500;
  border: unset;
  outline: none;
  align-self: center;
  width: fit-content;
  cursor: pointer;
`;

export {
  ItemCard,
  ItemTitle,
  ItemThumbnail,
  QuantityContainer,
  ItemQuantity,
  StyledButton,
  ItemAmount,
  IconButton,
};
