import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import Pretendard from '../assets/fonts/Pretendard-Regular.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: normal;
    src: url(${Pretendard}) format('truetype');
  }
  ${reset}
`;

export default GlobalStyle;
