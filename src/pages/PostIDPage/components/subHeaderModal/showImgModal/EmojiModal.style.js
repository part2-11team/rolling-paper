import styled from 'styled-components';
import { COLORS } from 'style/colorPalette';

export const ModalWrap = styled.div`
  display: grid;
  position: absolute;
  grid-template-columns: ${({ $number }) =>
    $number >= 4 ? 'repeat(4, 1fr)' : `repeat(${$number}, 1fr)`};
  top: 50px;
  right: 0px;
  z-index: 999;
  padding: 24px;
  gap: 10px;
  background: ${COLORS.WHITE};
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    grid-template-columns: ${({ $number }) =>
      $number >= 3 ? 'repeat(3, 1fr)' : `repeat(${$number}, 1fr)`};
  }
`;
