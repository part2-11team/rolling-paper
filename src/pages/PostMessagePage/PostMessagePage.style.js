import styled from 'styled-components';
import React from 'react';

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostMessageContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  margin-top: 47px;
  margin-bottom: 38px;
`;

export const PostMessageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const PostMessageContentHeader = styled.div`
  color: #181818;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.24px;
`;

export const PostMessageInput = styled.input`
  display: flex;
  width: 720px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #fff;

  &:hover {
    border: 1px solid #555;
  }

  &:active {
    border: 2px solid #3a3a3a;
  }

  &:focus {
    border: 2px solid #555;
  }
`;

export const SelectPictureContain = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const SelectedPicture = styled.img`
  display: flex;
  align-items: flex-start;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background: #ccc;
`;
export const SelectPictureListContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;
export const SelectPictureListInfo = styled.div`
  color: #555;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
`;

export const SelectPictureList = styled.div`
  display: flex;
  align-items: flex-start;
  width: 605px;
  height: 56px;
  gap: 4px;
`;
export const SelectPictures = styled.div`
  display: flex;
  width: 56px;
  height: 56px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  border: 1px solid #eee;
  background: #fff;
`;

export const PostMessageDropdownList = styled.div`
  position: relative;
  display: inline-block;
  width: 320px;
`;

export const PostMessageDropdownListButton = styled.button`
  display: flex;
  width: 320px;
  padding: 12px 16px;
  align-items: center;
  gap: 189px;
  border-radius: 8px;
  border: 1px solid #ccc;
  color: #181818;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;

  &:hover {
    border: 1px solid #555;
  }

  &:active {
    border: 2px solid #555;
  }

  &:focus {
    border: 2px solid #555;
  }
`;

export const PostMessageDropdownListContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'inline-flex' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  padding: 10px 1px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  z-index: 1;
  margin-top: 10px;
`;

export const DropdownListContentOption = styled.div`
  display: flex;
  width: 316px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #181818;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const DropdownListContentOptionText = styled.p`
  color: #181818;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
`;

export const SubmitButton = styled.button`
  display: flex;
  width: 720px;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #9935ff;
  margin: 24px;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.18px;

  &:hover {
    background: #861dee;
  }

  &:active {
    background: #6e0ad1;
  }

  &:focus {
    border: #5603a7;
    background: #6e0ad1;
  }
`;

export const DropdownIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translate(0, -50%);
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;
