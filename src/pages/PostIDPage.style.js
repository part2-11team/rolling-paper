import { styled } from 'styled-components';

const BADGE = {
  가족: { color: '#2ba600', background: '#e4fbdc' },
  동료: { color: '#9935ff', background: '#f8f0ff' },
  친구: { color: '#00a2fe', background: '#e2f5ff' },
  지인: { color: '#ff8832', background: '#fff0d6' },
};

export const Header = styled.div`
  width: 100%;
  height: 133px;
  background-color: blue;
`;

export const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
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
    margin: 113px 24px;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
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
