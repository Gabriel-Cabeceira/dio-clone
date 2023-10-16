import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans';
    }

    body {
        background-color: #1E192C;
        color: #FFFFFF;
    }

    button {
        background: transparent;
        border: none;
        outline: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }
`