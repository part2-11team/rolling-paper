import React from 'react';
import * as S from './SubHeader.style';
import AllEmoji from '../../assets/icon/arrow_down.svg';
import AddEmoji from '../../assets/icon/add-24.svg';
import Share from '../../assets/icon/share-24.svg';

const SubHeader = ({ value }) => {
  const ProfileBedge = value.messageCardData.slice(0, 3);

  return (
    <S.SubHeader>
      <S.HeaderContent>
        <S.UserName>To.{value.currentCardData.id}</S.UserName>
        <S.UserInfo>
          <S.PaperCnt>
            <S.ProfileCnt>
              {ProfileBedge.map((data, index) => (
                <S.ProfileBedge
                  key={index}
                  src={data.profileImageURL}
                  alt={`Profile ${index}`}
                  style={{ left: `${index * 14}px`, zIndex: `${index}` }}
                />
              ))}
              <S.AllProfile>+{value.messageCardData.length - 3}</S.AllProfile>
            </S.ProfileCnt>
            <S.CntText>
              <S.Strong>{value.messageCardData.length}</S.Strong> 명이
              작성했어요!
            </S.CntText>
          </S.PaperCnt>
          <S.Border />
          <S.HeaderService>
            <S.EmojiCnt>
              <S.Emoji>프로필 더미</S.Emoji>
              <S.AllEmojiButton>
                <S.EmojiImage src={AllEmoji} />
              </S.AllEmojiButton>
            </S.EmojiCnt>
            <S.Service>
              <S.AddEmojiButton>
                <S.EmojiImage src={AddEmoji} />
                추가
              </S.AddEmojiButton>
              <S.Border />
              <S.ShareButton>
                <S.EmojiImage src={Share} />
              </S.ShareButton>
            </S.Service>
          </S.HeaderService>
        </S.UserInfo>
      </S.HeaderContent>
    </S.SubHeader>
  );
};

export default SubHeader;
