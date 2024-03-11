import styled from 'styled-components';
import { COLORS } from 'style/colorPalette';

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: flex-start;
  top: 50px;
  z-index: 999;
  padding: 24px;
  width: 100%;
  gap: 10px;
  background: ${COLORS.WHITE};
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;
export const ShareButton = styled.button`
  display: flex;
  width: 138px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  &:hover {
    background-color: ${COLORS.GRAY_200}; /* 호버 시 배경색을 gray로 변경 */
  }
`;
