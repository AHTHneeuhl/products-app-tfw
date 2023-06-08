import { styled } from "styled-components";
import { theme } from "theme";

const SortWrapper = styled.div`
  background-color: ${theme.colors.white};
  width: fit-content;
  padding: 0.5rem 1.5rem;
  border-radius: 5rem;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15);
  margin: 1rem 0;

  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const SortButton = styled.button`
  background-color: ${theme.colors.black};
  font-family: ${theme.fonts.poppins};
  color: ${theme.colors.milk};
  padding: 0.5rem 1rem;
  border-radius: 5rem;
  font-size: 13px;
  font-weight: 500;
  border: unset;
  outline: none;
  cursor: pointer;
`;

export { SortWrapper, SortButton };
