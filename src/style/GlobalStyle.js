import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import Pretendard from '../assets/fonts/Pretendard-Regular.otf';
import NanumLetter from '../assets/fonts/Nanum-letter.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: normal;
    src: url(${Pretendard}) format('truetype');
  }

  @font-face {
    font-family: 'NanumLetter';
    font-weight: normal;
    src: url(${NanumLetter}) format('truetype');
  }

  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap');
  ${reset}
`;

export default GlobalStyle;
