import styled from 'styled-components';
import { COLORS } from '../../style/colorPalette';

export const Wrapper = styled.div`
  position: relative;
  width: 384px;
  height: 280px;
  box-shadow: 0px 2px 12px 0px rgb(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 28px 24px;
  cursor: pointer;
  background-color: ${COLORS.WHITE};

  @media (max-width: 1248px) {
    width: auto;
  }

  &:hover {
    border: 1px solid ${COLORS.GRAY_300};
  }
`;

export const AddButtonWrapper = styled.div`
  position: absolute;
  width: 56px;
  height: 56px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AddButtonIcon = styled.img`
  width: 56px;
  height: 56px;
`;
