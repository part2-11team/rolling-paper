import styled, { css } from 'styled-components';
import { COLORS } from '../../style/colorPalette';
import { FONT_STYLE } from '../../style/fontStyle';

const BREAKPOINT_TABLET = 768;
const BREAKPOINT_PC = 1200;

export const onTablet = `@media only screen and (min-width: ${BREAKPOINT_TABLET}px) and (max-width: ${
  BREAKPOINT_PC - 1
}px)`;

export const onPc = `@media only screen and (min-width: ${BREAKPOINT_PC}px)`;

export const onTabletAndPc = `@media only screen and (min-width: ${BREAKPOINT_TABLET}px)`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;
  background-color: ${COLORS.PURPLE_600};
  color: ${COLORS.WHITE};

  ${({ $size }) => {
    switch ($size) {
      case 'full':
        return css`
          width: 100%;
          height: 5.6rem;
          padding: 1.4rem 2.4rem;
          border-radius: 1.2rem;
          ${FONT_STYLE.BOLD_18};
        `;
      case 'lg':
        return css`
          min-width: 28rem;
          height: 5.6rem;
          padding: 1.4rem 2.4rem;
          border-radius: 1.2rem;
          ${FONT_STYLE.BOLD_18};
        `;
      case 'md':
        return css`
          min-width: 12rem;
          height: 4rem;
          padding: 0.8rem 1.6rem;
          border-radius: 0.6rem;
          ${FONT_STYLE.REGULAR_16};
        `;
      case 'sm':
        return css`
          min-width: 9rem;
          height: 4rem;
          padding: 0.8rem 1.6rem;
          border-radius: 0.6rem;
          font-size: 1.6rem;
          font-weight: 500;
          line-height: 2.4rem;
        `;
      case 'xs':
        return css`
          height: 3.6rem;
          padding: 0.6rem 0.8rem;
          border-radius: 0.6rem;
          font-size: 1.6rem;
          font-weight: 500;
          line-height: 2.4rem;

          ${onTablet} {
            padding: 0.6rem 1.6rem;
          }

          ${onPc} {
            padding: 0.6rem 1.6rem;
          }
        `;
      case 'square':
        return css`
          width: 4rem;
          height: 4rem;
          padding: 0.8rem 0.8rem;
          border-radius: 0.6rem;
          font-size: 1.6rem;
          font-weight: 500;
          line-height: 2.4rem;
        `;
    }
  }};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${COLORS.GRAY_300};
      cursor: not-allowed;
      pointer-events: none;
    `}

  &:hover {
    background-color: ${COLORS.PURPLE_700};
  }
  &:active {
    background-color: ${COLORS.PURPLE_800};
  }
  &:focus {
    background-color: ${COLORS.PURPLE_900};
  }
`;
