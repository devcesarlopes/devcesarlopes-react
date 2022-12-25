import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: all 0.4s ease-in-out;
    }

    body {
        height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }

    @font-face {
        font-family: "laila-medium";
        src: local("laila-medium"),
            url("./assets/fonts/laila-medium.ttf") format("truetype");
    }

    @font-face {
        font-family: "museomoderno-black";
        src: local("museomoderno-black"),
            url("./assets/fonts/museomoderno-black.ttf") format("truetype");
    }

`;
