import styled from 'styled-components';

export const TextEditorWrapper = styled.div`
  display: flex;
  width: 720px;
  height: 260px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ccc;
  flex-direction: column;
  position: relative;
`;
export const ToolBarBackground = styled.div`
  width: 718px;
  height: 49px;
  flex-shrink: 0;
  border-radius: 8px 8px 0px 0px;
  background: #eee;
  position: relative;
  margin: 0px 1px 0 2px;
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
    background-color: #ccc;
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

  color: #181818;

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

  color: #ccc;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;

  pointer-events: none;
`;
