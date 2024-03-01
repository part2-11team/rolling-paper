import { styled } from 'styled-components';
import { COLORS } from '../../style/colorPalette';
import { FONT_STYLE } from '../../style/fontStyle';

const BACKGROUND_COLOR = {
  beige: COLORS.ORANGE_200,
  purple: COLORS.PURPLE_200,
  blue: COLORS.BLUE_200,
  green: COLORS.GREEN_200,
};

export const PageWrapper = styled.div`
  position: relative;
  height: 100vh;
  ${({ $url, $color }) =>
    $url
      ? `background: url(${$url}) no-repeat center rgba(0, 0, 0, 0.5);`
      : `background-color: ${BACKGROUND_COLOR[$color]}`};
  background-size: cover;
  background-attachment: fixed;
  overflow: auto;
`;

export const Header = styled.div`
  width: 100%;
  height: 133px;
  background-color: white;
  ${FONT_STYLE.BOLD_28};
`;

export const MessageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  ${({ $url, $color }) =>
    $url
      ? `background: url(${$url}) no-repeat center rgba(0, 0, 0, 0.5);`
      : `background-color: ${BACKGROUND_COLOR[$color]}`};
  background-size: cover;
  background-attachment: fixed;
`;

export const ModalBackground = styled.div`
  display: ${({ $currentCardData }) => ($currentCardData ? 'block' : 'none')};
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;

export const ErrorWrapper = styled.div`
  padding: 15% 0;
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

export const ErrorTitle = styled.p`
  ${FONT_STYLE.BOLD_28};
`;
export const ErrorContent = styled.p`
  margin-top: 15px;
  ${FONT_STYLE.REGULAR_15};
`;
