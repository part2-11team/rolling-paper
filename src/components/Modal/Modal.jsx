import React, { useContext } from 'react';
import {
  Wrapper,
  TopWrapper,
  ProfileModalWrapper,
  CreatedDate,
  TextWrapper,
  ModalButton,
} from './Modal.style';
import {
  Image,
  ProfileWrapper,
  ProfileTextWrapper,
  ProfileTextHead,
  ProfileName,
} from '../MessageCard/MessageCard.style';
import { MessageCardBadge } from '../../pages/PostIDPage.style';
import { PostIDContext } from '../../context/PostIDContext';

export const Modal = () => {
  const { currentCardData, handleCurrentCardData } = useContext(PostIDContext);
  const cardData = currentCardData;
  const createDate = new Date(cardData.createdAt);
  const formattedDate = createDate
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\s/g, '')
    .slice(0, -1);
  const handleModalButton = () => {
    handleCurrentCardData();
  };
  return (
    <>
      {cardData.id && (
        <Wrapper>
          <TopWrapper>
            <ProfileModalWrapper>
              <Image
                src={cardData.profileImageURL}
                alt="프로필 이미지"
                width={56}
                height={56}
              ></Image>
              <ProfileWrapper>
                <ProfileTextWrapper>
                  <ProfileTextHead>From.</ProfileTextHead>
                  <ProfileName>{cardData.sender}</ProfileName>
                </ProfileTextWrapper>
                <MessageCardBadge $type={cardData.relationship}>
                  {cardData.relationship}
                </MessageCardBadge>
              </ProfileWrapper>
            </ProfileModalWrapper>
            <CreatedDate>{formattedDate}</CreatedDate>
          </TopWrapper>
          <TextWrapper>{cardData.content}</TextWrapper>
          <ModalButton onClick={handleModalButton}>확인</ModalButton>
        </Wrapper>
      )}
    </>
  );
};
