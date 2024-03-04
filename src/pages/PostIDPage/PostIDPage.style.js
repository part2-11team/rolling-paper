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

export const ScrollbarTrack = styled.div`
  position: fixed;
  top: 0px;
  right: 7px;
  height: 100vh;
  width: 100px;
  z-index: 50;
`;

export const UpperScrollButton = styled.div`
  position: fixed;
  width: 25px;
  height: 25px;
  box-shadow: 0px 2px 6px 0px rgb(0, 0, 0, 0.2);
  background-color: rgba(256, 256, 256, 0.7);
  bottom: 10px;
  border-radius: 502px;
  right: 5px;
  cursor: pointer;
  border: 0.7px solid rgba(0, 0, 0, 0.5);
  opacity: 0.7;
  text-align: center;

  &:hover {
    background-color: ${COLORS.GRAY_100};
  }
  &:active {
    background-color: ${COLORS.GRAY_200};
  }
`;

export const UpperImageIcon = styled.img`
  width: 25px;
  height: 25px;
  filter: invert(70%);
  transform: rotate(180deg) translateX(1px);
  opacity: 1;
`;
