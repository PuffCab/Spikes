import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0px;
    padding: 0px;
    font-family: 'Courier New', Courier, monospace;
   background-color: ${({ backgroundColor }) => backgroundColor}; }

`;
export { GlobalStyle };
