import { styled, keyframes } from 'styled-components';
import { FONT_STYLE } from '../../style/fontStyle';
import { COLORS } from '../../style/colorPalette';

export const Wrpaper = styled.div`
  position: relative;
  padding: 113px 0 0;
  width: 1200px;

  @media (max-width: 1248px) {
    width: 100%;
    padding: 113px 24px;
  }
  @media (max-width: 1200px) {
    max-width: 1020px;
  }
  @media (max-width: 768px) {
    max-width: 495px;
    min-width: 360px;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  margin: 0 auto;
  @media (max-width: 1248px) {
    width: auto;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
  position: absolute;
  ${({ $initialLoading }) => ($initialLoading ? 'top: 40vh' : 'bottom: 30px')};
  left: calc(50% - 15px);
  width: 30px;
  height: 30px;
  z-index: 2;
  animation: ${loading} 0.9s infinite;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const DeleteButton = styled.div`
  position: relative;
  left: calc(100% - 92px);
  width: 92px;
  height: 39px;
  ${FONT_STYLE.REGULAR_16};
  color: ${COLORS.WHITE};
  background-color: ${COLORS.PURPLE_600};
  border-radius: 6px;
  padding: 7px 14px;
  margin-bottom: 20px;
  text-align: center;

  &:hover {
    background-color: ${COLORS.PURPLE_700};
  }

  &:active {
    background-color: ${COLORS.PURPLE_800};
  }
`;
