import styled from 'styled-components';
import { COLORS } from '../../style/colorPalette';

export const TextEditorWrapper = styled.div`
  display: flex;
  width: 720px;
  height: 260px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${COLORS.GRAY_300};
  flex-direction: column;
  position: relative;
`;
export const ToolBarBackground = styled.div`
  width: 718px;
  height: 49px;
  flex-shrink: 0;
  border-radius: 8px 8px 0px 0px;
  background: ${COLORS.GRAY_200};
  position: relative;
  margin: 0.5px 0.5px 0 0.5px;
`;
export const ToolBar = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 14px;
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translate(0, -50%);
`;

export const ToolBarIcons = styled.div`
  display: flex;
  z-index: 2;
  gap: 2px;
`;

export const ToolBarIcon = styled.img`
  width: 24px;
  height: 24px;
  z-index: 23;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    background-color: ${COLORS.GRAY_300};
  }
`;
export const ToolBarIconColor = styled.input`
  width: 24px;
  height: 24px;
  z-index: 23;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextArea = styled.div`
  width: 688px;
  height: 178px;
  flex-shrink: 0;
  margin: 16px;
  outline: none;

  color: ${COLORS.GRAY_900};

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;

  overflow: auto;
`;

export const CustomBulletList = styled.ul`
  list-style-type: disc !important;
  margin-left: 20px !important;
`;

export const PlaceHolder = styled.p`
  position: absolute;
  top: 29%;
  left: 3.5%;

  color: ${COLORS.GRAY_300};

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;

  pointer-events: none;
`;
