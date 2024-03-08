import styled from 'styled-components';
import { COLORS } from '../../style/colorPalette';

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-right: 20px;
  margin-left: 20px;
`;

export const PostMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  margin-top: 47px;
  margin-bottom: 38px;
  width: 720px;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const PostMessageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
`;

export const PostMessageContentHeader = styled.div`
  color: ${COLORS.GRAY_900};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.24px;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const PostMessageInput = styled.input`
  display: flex;
  width: 100%;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid ${COLORS.GRAY_300};
  background: ${COLORS.WHITE};

  &:hover {
    border: 1px solid ${COLORS.GRAY_500};
  }

  &:active {
    border: 2px solid ${COLORS.GRAY_700};
  }

  &:focus {
    border: 2px solid ${COLORS.GRAY_500};
  }
`;

export const PostMessageInputError = styled.p`
  color: ${COLORS.ERROR};

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.06px;

  margin-top: 4px;
  margin-left: 15px;
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
  background: ${COLORS.GRAY_300};
`;
export const SelectPictureListContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const SelectPictureListInfo = styled.div`
  color: ${COLORS.GRAY_500};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;

  @media (max-width: 415px) {
    width: 110px;
  }
`;

export const SelectPictureList = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 56px;
  gap: 4px;
  flex-wrap: wrap;
  @media (max-width: 415px) {
    gap: 2px;
  }
`;
export const SelectPictures = styled.img`
  display: flex;
  width: 56px;
  height: 56px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  border: 1px solid ${COLORS.GRAY_200};
  @media (max-width: 720px) {
    width: 40px;
    height: 40px;
  }
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
  border: 1px solid ${COLORS.GRAY_300};
  color: ${COLORS.GRAY_900};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;

  &:hover {
    border: 1px solid ${COLORS.GRAY_500};
  }

  &:active {
    border: 2px solid ${COLORS.GRAY_500};
  }

  &:focus {
    border: 2px solid ${COLORS.GRAY_500};
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
  border: 1px solid ${COLORS.GRAY_300};
  background: ${COLORS.WHITE};
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  z-index: 1;
  margin-top: 10px;
`;

PostMessageDropdownListContent.shouldForwardProp = (prop) => prop !== 'isOpen';

export const DropdownListContentOption = styled.div`
  display: flex;
  width: 316px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: ${COLORS.GRAY_900};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
  &:hover {
    background-color: ${COLORS.GRAY_100};
  }
`;

export const DropdownListContentOptionText = styled.p`
  color: ${COLORS.GRAY_900};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 768px;
  height: 104px;
`;

export const SubContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const InputLabel = styled.label`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 20px;
  border-radius: 12px;
  background: ${COLORS.PURPLE_600};

  color: ${COLORS.WHITE};
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.18px;

  &:hover {
    background: ${COLORS.PURPLE_700};
  }

  &:active {
    background: ${COLORS.PURPLE_800};
  }

  &:focus {
    border: ${COLORS.PURPLE_900};
    background: ${COLORS.PURPLE_800};
  }

  &:disabled {
    border-radius: 12px;
    border: 1px solid ${COLORS.GRAY_300};
    background: ${COLORS.GRAY_300};
    cursor: not-allowed;
  }
  @media (max-width: 415px) {
    width: 90px;
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

export const NavController = styled.div`
  @media (max-width: 415px) {
    display: none;
  }
`;
