import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  font-size: 16px;
  * {
    box-sizing: border-box;
    }
  body {
    font-family: 'Poppins', sans-serif;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Playfair Display', serif;
    }
  }
  #portal, #dimmer {
    position: relative;
    z-index: 20;
  }
}
`;

export default GlobalStyle;
