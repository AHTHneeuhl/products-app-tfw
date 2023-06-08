import { styled } from "styled-components";
import { theme } from "theme";

const CategoriesWrapper = styled.div`
  background-color: ${theme.colors.white};
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15);
  padding: 1rem;
  height: 76vh;
  width: 216px;
  border-radius: 0.75rem;
  overflow: auto;

  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

const Category = styled.p`
  background-color: ${theme.colors.beta};
  color: ${theme.colors.black};
  font-size: 14px;
  padding: 0 0.25rem;
  border-radius: 2.5rem;
  margin: 0;
  padding: 0 0.25rem;
  cursor: pointer;
`;

export { CategoriesWrapper, Category };
