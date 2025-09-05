import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    background: ${({ theme }) => theme.colors.fundo};
    color: ${({ theme }) => theme.colors.texto};
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;