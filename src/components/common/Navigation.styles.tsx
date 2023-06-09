import { NavLink } from "react-router-dom";
import { css, styled } from "styled-components";
import { theme } from "theme";

const NavigationWrapper = styled.div`
  background-color: ${theme.colors.white};
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15);
  width: 216px;
  padding: 1rem;
  border-radius: 0.75rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

type TNavItemProps = {
  active?: boolean;
};

const NavItem = styled(NavLink)<TNavItemProps>`
  font-size: 14px;
  color: ${theme.colors.alpha};
  text-decoration: none;

  &:hover {
    font-weight: 600;
  }
  ${({ active }) => {
    if (active) {
      return css`
        font-weight: 600;
      `;
    }
  }}
`;

export { NavigationWrapper, NavItem };
