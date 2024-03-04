import { styled, keyframes } from 'styled-components';

export const GridWrapper = styled.div`
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
    max-width: 1000px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 480px;
    min-width: 360px;
  }
`;

const loading = keyframes`
  from{
    transfrom: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled.img`
  position: absolute;
  ${({ $initialLoading }) => ($initialLoading ? 'top: 40vh' : 'bottom: 30px')};
  left: calc(50% - 15px);
  width: 30px;
  height: 30px;
  animation: ${loading} 0.9s infinite;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
