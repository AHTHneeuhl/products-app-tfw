import { css, styled } from "styled-components";
import { theme } from "theme";

const SortWrapper = styled.div`
  background-color: ${theme.colors.white};
  width: fit-content;
  padding: 0.5rem 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15);
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

type TSortButtonProps = {
  active?: boolean;
};

const SortButton = styled.button<TSortButtonProps>`
  background-color: ${theme.colors.white};
  font-family: ${theme.fonts.poppins};
  color: ${theme.colors.alpha};
  padding: 0.5rem 1rem;
  border-radius: 5rem;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid ${theme.colors.alpha};
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.alpha};
    color: ${theme.colors.white};
    transition: all 150ms ease;
  }

  ${({ active }) => {
    if (active) {
      return css`
        background-color: ${theme.colors.alpha};
        color: ${theme.colors.white};
        transition: all 150ms ease;
      `;
    }
  }}
`;

export { SortWrapper, SortButton };
