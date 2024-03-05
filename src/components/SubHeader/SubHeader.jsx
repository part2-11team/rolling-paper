import React, { useEffect, useState } from 'react';
import * as S from './SubHeader.style';
import AllEmoji from '../../assets/icon/arrow_down.svg';
import AddEmoji from '../../assets/icon/add-24.svg';
import Share from '../../assets/icon/share-24.svg';
import { getRecipientData } from './api';
import Emoji from '../PaperListEmojiBadge/PaperListEmojiBadge';

const SubHeader = ({ value }) => {
  // const ProfileBedge = value.messageCardData.slice(0, 3);
  const [dataError, setDataError] = useState(null);
  const [profileData, setProfileData] = useState([]);
  const [emojiData, setEmojiData] = useState([]);
  const [userData, setUserData] = useState({
    name: null,
    messageCount: 0,
    reactionCount: 0,
    topReactions: [],
  });

  const getUserData = async (userID) => {
    const {
      name,
      messageCount,
      recentMessages,
      reactionCount,
      topReactions,
      error,
    } = await getRecipientData(userID);
    if (error) {
      setDataError(error);
      return;
    }

    setUserData({
      name,
      messageCount,
      reactionCount,
      topReactions,
    });
    setProfileData(recentMessages);
    setEmojiData(topReactions);
    console.log(profileData);
  };

  useEffect(() => {
    getUserData(value.userID);
  }, []);
  console.log(userData);
  return (
    <S.SubHeader>
      <S.HeaderContent>
        <S.UserName>To.{userData.name}</S.UserName>
        <S.UserInfo>
          <S.PaperCnt>
            <S.ProfileCnt>
              {profileData.length != 0 &&
                profileData.map((data, index) => (
                  <S.ProfileBedge
                    key={index}
                    src={data.profileImageURL}
                    alt={`Profile ${index}`}
                    style={{ left: `${index * 14}px`, zIndex: `${index}` }}
                  />
                ))}

              {userData.messageCount > 3 && (
                <S.AllProfile
                  style={{
                    left: `${profileData.length * 14}px`,
                    zIndex: `${profileData.length}`,
                  }}
                >
                  +{userData.messageCount - 3}
                </S.AllProfile>
              )}
            </S.ProfileCnt>
            <S.CntText>
              <S.Strong>{userData.messageCount}</S.Strong> 개의 카드가
              도착했어요!
            </S.CntText>
          </S.PaperCnt>
          <S.Border />
          <S.HeaderService>
            <S.EmojiCnt>
              <S.Emoji>
                {emojiData.length != 0 &&
                  emojiData?.map((reaction) => (
                    <Emoji
                      key={reaction.id}
                      emoji={reaction.emoji}
                      count={reaction.count}
                    />
                  ))}
              </S.Emoji>
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
