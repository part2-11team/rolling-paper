import styled from 'styled-components';
import { COLORS } from 'style/colorPalette';

export const LogoButton = styled.button`
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
