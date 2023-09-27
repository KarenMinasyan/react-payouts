import { keyframes } from 'styled-components';

import { COLORS } from './colors';

const {} = COLORS;

export const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
