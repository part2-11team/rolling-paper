import styled from 'styled-components';
import { COLORS } from '../../style/colorPalette';
import { FONT_STYLE } from '../../style/fontStyle';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${COLORS.GRAY_200};
  padding: 0 0 15px;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  border: 1px solid ${COLORS.WHITE};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const ProfileTextWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

export const ProfileTextHead = styled.p`
  ${FONT_STYLE.REGULAR_20};
  color: ${COLORS.BLACK};
`;

export const ProfileName = styled.p`
  ${FONT_STYLE.BOLD_20};
  color: ${COLORS.BLACK};
`;
