import { createGlobalStyle, css } from 'styled-components';

export const corrections = css`
  body {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    color: inherit;
  }

  button {
    -webkit-tap-highlight-color: transparent;
  }

  button,
  input {
    border: 0;
    outline: none;
  }
  textarea:focus,
  input:focus {
    outline: none;
  }

  p {
    margin: 0;
  }
`;

export default createGlobalStyle`
    ${corrections}
`;
