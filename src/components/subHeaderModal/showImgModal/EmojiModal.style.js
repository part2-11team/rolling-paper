import styled from 'styled-components';
import { COLORS } from '../../../style/colorPalette';
import { FONT_STYLE } from '../../../style/fontStyle';

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: flex-start;
  top: 50px;
  z-index: 999;
  padding: 24px;
  width: 140%;
  gap: 10px;
  background: ${COLORS.WHITE};
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

export const closeButton = styled.button``;

export const emojiWrap = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`;
