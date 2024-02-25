import { styled } from 'styled-components';

const BADGE = {
  가족: { color: '#2ba600', background: '#e4fbdc' },
  동료: { color: '#9935ff', background: '#f8f0ff' },
  친구: { color: '#00a2fe', background: '#e2f5ff' },
  지인: { color: '#ff8832', background: '#fff0d6' },
};

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

export const MessageCardBadge = styled.div`
  width: fit-content;
  border-radius: 4px;
  padding: 0px 8px;
  font-size: 14px;
  font-weight: 400;
  line-hightL 20px;
  color: ${({ $type }) => BADGE[$type].color};
  background-color: ${({ $type }) => BADGE[$type].background};
`;
