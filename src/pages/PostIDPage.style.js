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
