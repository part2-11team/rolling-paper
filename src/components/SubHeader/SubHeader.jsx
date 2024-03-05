import React, { useEffect, useState } from 'react';
import * as S from './SubHeader.style';
import AllEmoji from '../../assets/icon/arrow_down.svg';
import AddEmoji from '../../assets/icon/add-24.svg';
import Share from '../../assets/icon/share-24.svg';
import { getRecipientData, getEmojiData, postEmoji } from './api';
import Emoji from '../PaperListEmojiBadge/PaperListEmojiBadge';
import EmojiModal from '../subHeaderModal/showImgModal/EmojiModal';
import EmojiPicker from 'emoji-picker-react';

const SubHeader = ({ value }) => {
  const [dataError, setDataError] = useState(null);
  const [profileData, setProfileData] = useState([]);
  const [emojiData, setEmojiData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [resultPostEmoji, setResultPostEmoji] = useState(null);
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
  };

  const getAllEmojiData = async (userID) => {
    const { results, error } = await getEmojiData(userID);
    if (error) {
      setDataError(error);
      return;
    }
    setEmojiData(results);
  };

  const handleEmojiSelect = (emoji) => {
    const result = postEmojitoServer(value.userID, emoji);
    setResultPostEmoji(result);
    setPickerOpen(false);
  };

  const postEmojitoServer = async (userID, emoji) => {
    const { result, error } = await postEmoji(userID, emoji.emoji);
    if (error) {
      setDataError(error);
      return;
    }
    return result;
  };

  const showModal = () => {
    setModalOpen(true);
  };

  const showEmojiPicker = () => {
    setPickerOpen(true);
  };

  useEffect(() => {
    getUserData(value.userID);
    getAllEmojiData(value.userID);
  }, [resultPostEmoji]);

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
                  emojiData
                    .slice(0, 3)
                    .map((reaction) => (
                      <Emoji
                        key={reaction.id}
                        emoji={reaction.emoji}
                        count={reaction.count}
                      />
                    ))}
              </S.Emoji>
              <S.AllEmojiButton onClick={showModal}>
                <S.EmojiImage src={AllEmoji} />
              </S.AllEmojiButton>
              {modalOpen && (
                <EmojiModal setModalOpen={setModalOpen} value={emojiData} />
              )}
            </S.EmojiCnt>
            <S.Service>
              <S.AddEmojiButton onClick={showEmojiPicker}>
                <S.EmojiImage src={AddEmoji} />
                추가
              </S.AddEmojiButton>
              {pickerOpen && (
                <EmojiPicker
                  onEmojiClick={handleEmojiSelect}
                  style={{
                    width: '150%',
                    position: 'absolute',
                    top: '50px',
                    zIndex: '999',
                  }}
                />
              )}
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
