import styled from 'styled-components';
import { COLORS } from '../../style/colorPalette';

export const Wrapper = styled.div`
  position: relative;
  width: 384px;
  height: 280px;
  box-shadow: 0px 2px 12px 0px rgb(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 28px 24px;
  cursor: pointer;
  background-color: ${COLORS.WHITE};

  @media (max-width: 1248px) {
    width: auto;
  }

  &:hover {
    border: 1px solid ${COLORS.GRAY_300};
  }
`;

export const TextWrapper = styled.div`
  margin-top: 15px;
  overflow: hidden;
  font-size: 18px;
  font-weight: 400;
  color: ${COLORS.GRAY_600};
  line-height: 28px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const CreatedDate = styled.div`
  position: absolute;
  top: 238px;
  left: 24px;
  width: 60px;
  height: 18px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #999999;
  background-color: ${COLORS.WHITE};
`;

export const DeleteButton = styled.button`
  width: 40px;
  height: 40px;
  padding: auto;
  border: 1px solid ${COLORS.GRAY_300};
  border-radius: 6px;
`;

export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 14px;
`;
