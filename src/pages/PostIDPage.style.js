import { styled } from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 133px;
  background-color: white;
`;

export const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: #ffe2ad;
`;

export const ModalBackground = styled.div`
  display: ${({ $currentCardData }) => ($currentCardData ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const MessageWrapper = styled.div`
  display: grid;
  width: 1200px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  padding: 113px 0;
  margin: 0 auto;

  @media (max-width: 1248px) {
    width: auto;
    padding: 113px 24px;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
