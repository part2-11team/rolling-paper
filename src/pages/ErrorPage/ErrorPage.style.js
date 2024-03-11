import styled from 'styled-components';
import { FONT_STYLE } from '../../style/fontStyle';
import { COLORS } from '../../style/colorPalette';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ErrorMessage = styled.h1`
color: ${COLORS.GRAY_400};
  ${FONT_STYLE.BOLD_24}
  margin: 5rem 2rem;
  text-align: center;
`;

export const BackButton = styled.div`
  ${FONT_STYLE.BOLD_18}
  color: ${COLORS.BLUE_500};
  cursor: pointer;
`;

export const ErrorIcon = styled.img`
  width: 10rem;
  height: 10rem;
`

