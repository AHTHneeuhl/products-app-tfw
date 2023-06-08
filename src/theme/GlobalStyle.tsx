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
      font-family: 'Poppins', sans-serif;
      margin: unset;
    }
  }
  #portal, #dimmer {
    position: relative;
    z-index: 20;
  }
  
  --primary: #f7f1f1;
  --secondary: #b9c2d3;

  * {
    scrollbar-width: thin;
    scrollbar-color: var(--secondary) var(--primary);
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: var(--primary);
    border-radius: 4px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--secondary);
    border-radius: 14px;
    border: 3px solid var(--primary);
  }
}
`;

export default GlobalStyle;
