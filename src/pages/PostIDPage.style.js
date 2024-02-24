import { styled } from 'styled-components';

export const MessageWrapper = styled.div`
  display: grid;
  width: 1200px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  margin: 113px auto;

  @media (max-width: 1248px) {
    width: auto;
    margin: 113px 24px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 360px) {
    grid-template-columns: 1fr;
  }
`;

export const MessageCard = styled.div`
  width: 384px;
  height: 280px;
  box-shadow: 0px 2px 12px 0px rgb(0, 0, 0, 0.08);
  border-radius: 16px;

  @media (max-width: 1248px) {
    width: auto;
  }
`;
