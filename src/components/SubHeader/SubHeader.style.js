import styled from 'styled-components';

export const SubHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 0 2.4rem;
  height: 68px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const UserName = styled.div`
  color: var(--gray-800, #2b2b2b);
  /* Font/28 Bold */
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px; /* 150% */
  letter-spacing: -0.28px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const PaperCnt = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 11px;
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
  left: 42px;
  border-radius: 140px;
  border: 1.4px solid #fff;
  background: #fff;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  z-index: 4;
  color: #484848;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
`;
export const CntText = styled.div`
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
`;

export const Strong = styled.strong`
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px; /* 150% */
`;

export const Border = styled.div`
  width: 1px;
  height: 28px;
  background: var(--gray-200, #eee);
`;

export const HeaderService = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const EmojiCnt = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2px;
`;

export const Emoji = styled.div`
  display: flex;
  align-items: flex-start;
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

export const Service = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const AddEmojiButton = styled.button`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

export const ShareButton = styled.button`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
`;
