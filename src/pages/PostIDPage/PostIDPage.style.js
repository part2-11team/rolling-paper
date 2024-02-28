import { styled, keyframes } from 'styled-components';
import { COLORS } from '../../style/colorPalette';
import { FONT_STYLE } from '../../style/fontStyle';

const BACKGROUND_COLOR = {
  beige: COLORS.ORANGE_200,
  purple: COLORS.PURPLE_200,
  blue: COLORS.BLUE_200,
  green: COLORS.GREEN_200,
};

export const Header = styled.div`
  width: 100%;
  height: 133px;
  background-color: ${COLORS.WHITE};
  ${FONT_STYLE.BOLD_28};
`;

export const PageWrapper = styled.div`
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const MessageWrapper = styled.div`
  display: grid;
  width: 1200px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  padding: 113px 0;
  margin: 0 auto;

  @media (max-width: 1248px) {
    width: auto;
    padding: 113px 24px;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    max-width: 1020px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 495px;
    min-width: 360px;
  }
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

const loading = keyframes`
  from{
    transfrom: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled.img`
  display: ${({ $endData }) => ($endData ? 'none' : 'block')};
  position: absolute;
  ${({ $initialLoading }) =>
    $initialLoading ? 'top: calc(50% - 15px)' : 'bottom: 30px'};
  left: calc(50% - 15px);
  width: 30px;
  height: 30px;
  animation: ${loading} 0.9s infinite;
`;
