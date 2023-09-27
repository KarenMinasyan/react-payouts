import { createGlobalStyle } from 'styled-components';

import { COLORS } from './colors';

const { BG } = COLORS;

export const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    body, html, #root {
      width: 100%;
      background: ${BG};
    }

    a {
      text-decoration: none;
    }
`;
