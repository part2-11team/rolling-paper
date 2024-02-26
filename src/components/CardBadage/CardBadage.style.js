import styled from 'styled-components';
import { COLORS } from '../../style/colorPalette';

const BADGE = {
  가족: { color: COLORS.GREEN_500, background: COLORS.GREEN_100 },
  동료: { color: COLORS.PURPLE_600, background: COLORS.PURPLE_100 },
  친구: { color: COLORS.BLUE_500, background: COLORS.BLUE_100 },
  지인: { color: COLORS.ORANGE_500, background: COLORS.ORANGE_100 },
};

export const Badge = styled.div`
  width: fit-content;
  border-radius: 4px;
  padding: 0px 8px;
  font-size: 14px;
  font-weight: 400;
  line-hightL 20px;
  color: ${({ $type }) => BADGE[$type].color};
  background-color: ${({ $type }) => BADGE[$type].background};
`;
