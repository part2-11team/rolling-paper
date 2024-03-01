import styled from 'styled-components';

export const ScrollbarTrack = styled.div`
  position: fixed;
  top: 0px;
  right: 5px;
  height: 100vh;
  width: 8px;
  z-index: 50;
`;

export const scrollbarThumb = styled.div`
  position: absolute;
  width: 8px;
  height: ${({ $height }) => ($height ? `${$height}px` : '100px')};
  top: ${({ $position }) => ($position ? `${$position}px` : '0px')};
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
`;
