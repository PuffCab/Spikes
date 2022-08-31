import { createGlobalStyle } from "styled-components";

//NOTE the global style wasn't applying because I forgot to include to which elements I wanted to apply it.
export const GlobalStyle = createGlobalStyle`
body {
    background: grey;
    margin: 0px;
    padding: 0px;
}

`;
