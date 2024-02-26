import styled from 'styled-components';
import React from 'react';

export const PostMessageInput = styled.input`
  display: flex;
  width: 720px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #fff;
`;

export const PostMessageContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
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

export const PostMessageSeletePic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
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
  border: 2px solid #555;
  color: var(--gray-900, #181818);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
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
  color: var(--gray-900, #181818);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const DropdownListContentOptionText = styled.p`
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
  }
`;
