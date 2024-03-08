import styled from 'styled-components';
import { COLORS } from '../../style/colorPalette';
import { FONT_STYLE } from '../../style/fontStyle';

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

  &::-webkit-scrollbar {
    display: block;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    margin-top: 16px;
    background: ${COLORS.WHITE};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.GRAY_300};
    border-radius: 8px;
    height: 100px;
  }
  * {
    font-family: inherit;
  }
  ul {
    padding-left: revert !important;
  }
`;

export const Text = styled.p`
  display: block;
  width: 500px;
  font-family: ${({ $font }) => ($font ? $font : 'Pretendard')};
`;

export const ModalButton = styled.button`
  box-sizing: border-box;
  position: absolute;
  top: 396px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 120px;
  height: 40px;
  border-radius: 6px;
  padding: 7px 16px;
  background-color: ${COLORS.PURPLE_600};
  ${FONT_STYLE.REGULAR_16}
  color: ${COLORS.WHITE};
  text-align: center;

  &:hover {
    background-color: ${COLORS.PURPLE_700};
  }

  &:pressed {
    background-color: ${COLORS.PURPLE_800};
  }

  &:focus {
    border: 2px solid ${COLORS.PURPLE_900};
    background-color: ${COLORS.PURPLE_800};
  }
`;
