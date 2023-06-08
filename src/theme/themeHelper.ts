import { css } from "styled-components";

class ThemeHelper {
  getStyledScrollbar = (size: number = 0.2) => {
    return css`
      ::-webkit-scrollbar {
        width: ${size}rem;
        height: ${size}rem;
      }
      ::-webkit-scrollbar-track {
        background-color: unset;
      }
    `;
  };
}

export default ThemeHelper;
