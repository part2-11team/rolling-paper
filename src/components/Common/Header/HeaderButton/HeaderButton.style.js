import styled from 'styled-components';
import { COLORS } from '../../../../style/colorPalette';
import { FONT_STYLE } from '../../../../style/fontStyle';

export const HeaderButton = styled.button`
  display: flex;
  height: 40px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${COLORS.GRAY_300};
  background: ${COLORS.WHITE};
  ${FONT_STYLE.BOLD_16};
`;
