import styled from 'styled-components';
import { COLORS } from 'style/colorPalette';
import { FONT_STYLE } from 'style/fontStyle';

export const SubHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.WHITE};
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
`;

export const UserName = styled.div`
  color: ${COLORS.GRAY_800};
  ${FONT_STYLE.BOLD_28};
  @media (max-width: 768px) {
    padding: 12px 20px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  padding: 13px;
  align-items: center;
  gap: 28px;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    padding: 8px 20px;
    border-top: 1px solid #ededed;
  }
`;

export const PaperCnt = styled.div`
  display: flex;
  gap: 11px;

  @media (max-width: 1200px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProfileCnt = styled.div`
  display: flex;
  position: relative;
  width: 76px;
  height: 28px;
  flex-direction: row;
`;

export const ProfileBedge = styled.img`
  position: absolute;
  border-radius: 140px;
  border: 1.4px solid #fff;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
`;

export const AllProfile = styled.div`
  display: flex;
  position: absolute;
  border-radius: 140px;
  border: 1.4px solid #fff;
  background: ${COLORS.WHITE};
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  color: #484848;
  ${FONT_STYLE.REGULAR_12}
`;
export const CntText = styled.div`
  color: ${COLORS.GRAY_900};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
`;

export const Strong = styled.strong`
  color: ${COLORS.GRAY_900};
  ${FONT_STYLE.BOLD_18}
`;

export const Border = styled.div`
  width: 1px;
  height: 28px;
  background: ${COLORS.GRAY_200};

  @media (max-width: 1200px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ButtonBorder = styled.div`
  width: 1px;
  height: 28px;
  background: ${COLORS.GRAY_200};
`;

export const HeaderService = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const EmojiCnt = styled.div`
  display: flex;
  position: relative;
  gap: 2px;
`;

export const Emoji = styled.div`
  display: flex;
  gap: 8px;
`;

export const AllEmojiButton = styled.button`
  display: flex;
  width: 36px;
  height: 36px;
  padding: 6px;
  justify-content: center;
  align-items: center;
`;

export const EmojiImage = styled.img``;
export const AddEmojiText = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Service = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 13px;
`;

export const AddEmojiButton = styled.button`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${COLORS.GRAY_300};
  background: ${COLORS.WHITE};
  color: ${COLORS.GRAY_900};
  ${FONT_STYLE.REGULAR_16}
`;

export const EmojiWapper = styled.div`
  width: 150%;
  position: absolute;
  top: 50px;
  right: 8vw;
  zindex: 900;
  @media (max-width: 768px) {
    right: 15vw;
  }
`;
export const ShareButton = styled.button`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${COLORS.GRAY_300};
  background: ${COLORS.WHITE};
`;
