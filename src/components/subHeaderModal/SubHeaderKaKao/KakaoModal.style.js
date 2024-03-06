import styled from 'styled-components';
import { COLORS } from '../../../style/colorPalette';

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
