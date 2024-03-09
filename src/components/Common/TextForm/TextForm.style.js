import styled from 'styled-components';
import { COLORS } from '../../../style/colorPalette';
import { FONT_STYLE } from '../../../style/fontStyle';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 720px;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const ContentHeader = styled.div`
  color: ${COLORS.GRAY_900};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.24px;
`;

export const ContentInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  align-itens: center;
  border-radius: 8px;
  border: 1px solid
    ${({ $vailed }) => ($vailed ? COLORS.ERROR : COLORS.GRAY_300)};
  outline: none;
  background-color: ${COLORS.WHITE};
  ${FONT_STYLE.REGULAR_16};
  &:hover {
    border: 1px solid ${COLORS.GRAY_500};
  }

  &:active,
  &:focus {
    border: 2px solid ${COLORS.GRAY_700};
  }
`;

export const ErrorMessage = styled.p`
  visibility: ${({ $vailed }) => ($vailed ? `visible` : `hidden`)};
  color: ${COLORS.ERROR};
  ${FONT_STYLE.REGULAR_14};
  margin-top: -12px;
  margin-left: 5px;
`;
