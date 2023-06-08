import { styled } from "styled-components";
import { theme } from "theme";

const FilterWrapper = styled.div`
  background-color: ${theme.colors.white};
  width: fit-content;
  padding: 0.5rem 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15);
  margin: 1rem 0;

  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export { FilterWrapper };
