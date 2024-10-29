import { css, Global } from "@emotion/react";
const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: Arial, sans-serif;
        background-color: #f0f2f5;
        color: #333;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
    `}
  />
);

export default GlobalStyles;
