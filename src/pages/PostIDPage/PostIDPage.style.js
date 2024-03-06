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
  overflow: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Header = styled.div`
  width: 100%;
  height: 133px;
  background-color: white;
  ${FONT_STYLE.BOLD_28};
`;

export const MessageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: fit-content;
  ${({ $url, $color, $load }) =>
    $load
      ? `background-color: ${COLORS.GRAY_300}`
      : $url
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

export const ScrollbarTrack = styled.div`
  position: fixed;
  top: 0px;
  right: 7px;
  height: 100vh;
  width: 100px;
  z-index: 50;
`;

export const UpperImageIcon = styled.img`
  position: fixed;
  width: 35px;
  height: 35px;
  bottom: 10px;
  right: 9px;
  filter: invert(0.15);
  border-radius: 35px;
  border: 1px solid ${COLORS.WHITE};
  cursor: pointer;
  &:hover {
    filter: invert(0.9);
  }
`;
