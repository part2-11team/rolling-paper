import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 384px;
  height: 280px;
  box-shadow: 0px 2px 12px 0px rgb(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 28px 24px;
  cursor: pointer;

  @media (max-width: 1248px) {
    width: auto;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  gap: 14px;
  padding: 0 0 15px;
`;

export const Image = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  border: 1px solid #ffffff;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const ProfileTextWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const ProfileText = styled.p`
  font-size: 20px;
  color: #000000;
  line-height: 24px;
`;

export const ProfileTextHead = styled(ProfileText)`
  font-weight: 400;
`;

export const ProfileName = styled(ProfileText)`
  font-weight: 700;
`;

export const TextWrapper = styled.div`
  margin-top: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 18px;
  font-weight: 400;
  color: #4a4a4a;
  line-height: 28px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

export const CreatedDate = styled.div`
  position: absolute;
  top: 238px;
  left: 24px;
  width: 60px;
  height: 18px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #999999;
`;
