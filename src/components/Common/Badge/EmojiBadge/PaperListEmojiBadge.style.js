import styled from 'styled-components';
import { FONT_STYLE } from '../../../../style/fontStyle';
import { COLORS } from '../../../../style/colorPalette';

const BREAKPOINT_TABLET = 768;
const BREAKPOINT_PC = 1200;

const onTablet = `@media only screen and (min-width: ${BREAKPOINT_TABLET}px) and (max-width: ${
  BREAKPOINT_PC - 1
}px)`;

const onPc = `@media only screen and (min-width: ${BREAKPOINT_PC}px)`;

export const Wrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  width: 5.5rem;
  height: 3.2rem;
  padding: 0.6rem 0.8rem;
  border-radius: 3.2rem;
  background: rgba(0, 0, 0, 0.54);
  color: ${COLORS.WHITE};
  ${FONT_STYLE.REGULAR_14};

  ${onTablet} {
    width: 6.5rem;
    height: 3.6rem;
    padding: 0.8rem 1.2rem;
    font-size: 16px;
    font-weight: 400;
  }

  ${onPc} {
    width: 6.5rem;
    height: 3.6rem;
    padding: 0.8rem 1.2rem;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const Container = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
