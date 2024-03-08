import styled from 'styled-components';
import { COLORS } from '../../../style/colorPalette';
import { FONT_STYLE } from '../../../style/fontStyle';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $disable }) =>
    $disable || $disable === true ? COLORS.GRAY_300 : COLORS.PURPLE_600};
  color: ${COLORS.WHITE};
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  ${({ $center }) => $center && `margin: 0 auto;`}
  border-radius: ${({ $status }) => ($status === 'fix' ? '6px' : '12px')};
  ${({ $fix }) => ($fix ? FONT_STYLE.REGULAR_16 : FONT_STYLE.REGULAR_18)}
  @media (max-width: 1200px) {
    ${({ $fix }) => !$fix && `width: 100%`};
  }
  ${({ $disable }) =>
    !$disable &&
    `
    &:hover {
      background-color: ${COLORS.PURPLE_700};
    }

    &:active {
      background-color: ${COLORS.PURPLE_800};
    }

    &:focus {
      background-color: ${COLORS.PURPLE_800};
      border: 2px solid ${COLORS.PURPLE_900};
    }
  `}
`;
