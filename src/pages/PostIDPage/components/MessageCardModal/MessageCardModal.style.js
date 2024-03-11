import styled from 'styled-components';
import { COLORS } from 'style/colorPalette';
import { FONT_STYLE } from 'style/fontStyle';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 39px;
  width: 600px;
  height: 476px;
  background-color: ${COLORS.WHITE};
  box-shadow: 0px 2px 12px 0px rgb(0, 0, 0, 0.08);
  border-radius: 16px;

  @media (max-width: 600px) {
    width: 100%;
    min-width: 330px;
    left: 0%;
    transform: translate(0%, -50%);
  }
`;

export const CreatedDate = styled.div`
  ${FONT_STYLE.REGULAR_14};
  color: ${COLORS.GRAY_400};
`;

export const TextWrapper = styled.div`
  width: 520px;
  height: 256px;
  ${FONT_STYLE.REGULAR_18};
  color: #5a5a5a;
  padding-top: 16px;
  overflow: auto;
  margin-bottom: 30px;

  @media (max-width: 520px) {
    width: 100%;
  }

  &::-webkit-scrollbar {
    display: block;
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    margin-top: 16px;
    background: ${COLORS.WHITE};
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.GRAY_300};
    border-radius: 8px;
    height: 100px;
    width: 4px;
    height: 4px;
  }
  * {
    font-family: inherit;
  }
  ul {
    padding-left: revert !important;
  }
`;

export const Text = styled.div`
  overflow: hidden;
  display: -webkit-box;
  word-break: break-all;
  width: 100%;
  max-width: 500px;
  font-family: ${({ $font }) => ($font ? $font : 'Pretendard')};
`;
