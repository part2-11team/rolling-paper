import styled from 'styled-components';

export const ScrollbarTrack = styled.div`
  position: fixed;
  top: 0px;
  right: 7px;
  height: 100vh;
  width: 8px;
  z-index: 50;
`;

export const scrollbarWrapper = styled.div`
  position: absolute;
  right: -8px;
  width: 33px;
  margin: 8px 0;
  cursor: pointer;
`;

export const scrollbarThumb = styled.div`
  position: absolute;
  right: 15px;
  width: 8px;
  height: 100%;
  top: 0px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
`;
