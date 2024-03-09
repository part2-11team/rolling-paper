import styled from 'styled-components';
import { COLORS } from '../../../../style/colorPalette';
import { FONT_STYLE } from '../../../../style/fontStyle';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid ${COLORS.GRAY_200};
  padding: 0 0 15px;
  justify-content: space-between;
`;

export const Image = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  border: 1px solid ${COLORS.WHITE};
  ${({ $load, src }) =>
    $load
      ? `background-color: ${COLORS.GRAY_300}`
      : `background-image: url(${src})`};
  background-size: cover;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: calc(100% - 70px);
`;
export const ProfileTextWrapper = styled.div`
  display: flex;
  gap: 6px;
  width: 100%;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 14px;
  width: ${({ $type }) =>
    $type === 'modal' ? 'calc(100% - 86px)' : 'calc(100% - 54px)'};
`;

export const ProfileTextHead = styled.p`
  ${FONT_STYLE.REGULAR_20};
  color: ${COLORS.BLACK};
`;

export const ProfileName = styled.p`
  ${FONT_STYLE.BOLD_20};
  color: ${COLORS.BLACK};
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
