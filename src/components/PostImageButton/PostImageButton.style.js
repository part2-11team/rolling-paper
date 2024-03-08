import styled from 'styled-components';
import { COLORS } from '../../style/colorPalette';

export const SelectBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16.8rem;
  height: 16.8rem;
  cursor: pointer;
  border-radius: 1.6rem;
  background-color: ${COLORS.GRAY_200};

  @media (max-width: 767px) {
    width: 100%;
    height: 15.4rem;
  }
`;

export const SelectBoxImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1.6rem;
  background-image: ${({ $imageUrl }) => `url(${$imageUrl})`};
  background-size: cover;
  ${({ $selected }) => $selected && 'opacity: 0.3'};
  ${({ $loadImage }) => !$loadImage && 'filter: blur(3px)'};
`;

export const SelectedImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4.4rem;
  height: 4.4rem;
  z-index: 1;
`;
