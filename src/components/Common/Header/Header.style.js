import styled from 'styled-components';
import { COLORS } from '../../../style/colorPalette';

export const HeaderWrapper = styled.header`
  display: flex;
  padding: 0 2.4rem;
  width: 100%;
  height: 64px;
  justify-content: center;
  align-items: center;
  gap: 1px;
  flex-shrink: 0;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoImage = styled.img`
  width: 27.818px;
  height: 27.658px;
`;

export const LogoText = styled.span`
  color: ${COLORS.Light_Gray_90};
  text-align: center;
  font-family: Poppins;
  font-size: 19.971px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
