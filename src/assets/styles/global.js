import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *::before,
  *::after {
    box-sizing: border-box;
  }


  * {
    margin: 0;
  }


  html,
  body {
    height: 100%;
  }


  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }


  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }


  input,
  button,
  textarea,
  select {
    font: inherit;
  }


  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root,
  #__next {
    isolation: isolate;
  }

  :root {
    --font-title: "Montserrat", sans-serif;
    --font-main: "Manrope", sans-serif;

    --foreground: #85859c;
    --background: #fcfcfc;
    --accent1: #56e4b7;
    --accent2: #66c4ae;
    --accent3: #75a5a5;
    --lightGrey: #e5e9ec;

    --light-gray: rgba(0, 0, 0, 0.1);
    --faint-gray: rgb(215, 221, 228);

    --text-color: rgb(102, 111, 117);

    --highlight: hsl(62, 100%, 85%);

    --modal-background: rgba(53, 71, 104, 0.28);

    --max-width: 1280px;

    --nav-width: 800px;

    --header-height: 101px;

    --hover: rgba(0, 0, 0, 0.3);
  }

  body {
    font-family: var(--font-main);
    background-color: var(--background);

  }
`;

export default GlobalStyles;
