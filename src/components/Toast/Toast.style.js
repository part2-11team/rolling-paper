import styled from 'styled-components';
import { FONT_STYLE } from '../../style/fontStyle';
import { COLORS } from '../../style/colorPalette';

export const ToastWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 524px;
  height: 64px;
  background-color: rgb(0, 0, 0);
  ${({ $type }) => ($type === 'load' ? 'top: 0px' : 'bottom: 0px')};
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  border-radius: 8px;
  padding: 0 30px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const ToastIcon = styled.img`
  width: 24px;
  height: 24px;
  ${({ $close }) => $close && 'cursor: pointer'};
`;

export const ToastText = styled.p`
  ${FONT_STYLE.REGULAR_16};
  color: ${COLORS.WHITE};
`;
