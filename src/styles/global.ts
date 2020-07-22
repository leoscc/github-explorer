import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) =>
      props.theme.colors
        .background}  url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
    font-family: Roboto, sans-serif;
  }

  #root {
    margin: 0 auto;
    max-width: 960px;
    padding: 40px 20px;
  }

  button, a {
    cursor: pointer;
  }
`;
