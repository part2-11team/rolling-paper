import styled from 'styled-components';
import { COLORS } from 'style/colorPalette';
import { FONT_STYLE } from 'style/fontStyle';

export const Wrapper = styled.div`
  position: relative;
  width: 384px;
  height: 280px;
  box-shadow: 0px 2px 12px 0px rgb(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 28px 24px;
  cursor: pointer;
  background-color: ${COLORS.WHITE};
  overflow: hidden;

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
  ${FONT_STYLE.REGULAR_18};
  font-family: ${({ $font }) => $font};
  color: ${COLORS.GRAY_600};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  * {
    font-family: inherit;
  }
  ul {
    padding-left: revert !important;
  }
`;

export const CreatedDate = styled.div`
  position: absolute;
  top: 238px;
  left: 24px;
  width: 60px;
  height: 18px;
  ${FONT_STYLE.REGULAR_12}
  line-height: 18px;
  color: #999999;
  background-color: ${COLORS.WHITE};
  &&& {
    font-family: ${({ $font }) => $font && $font};
  }
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
