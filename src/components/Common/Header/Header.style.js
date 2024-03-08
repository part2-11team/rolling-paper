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
  background-color: ${COLORS.WHITE};
  @media (max-width: 767px) {
    ${({ $page }) => $page === 'postID' && `display: none;`}
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
