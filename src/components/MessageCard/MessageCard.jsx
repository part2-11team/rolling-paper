import React from 'react';
import {
  TextWrapper,
  TopWrapper,
  Wrapper,
  Image,
  ProfileWrapper,
  ProfileTextHead,
  ProfileName,
  ProfileTextWrapper,
  CreatedDate,
} from './MessageCard.style';
import { MessageCardBadge } from '../../pages/PostIDPage.style';

export const MessageCard = ({ cardData }) => {
  const createDate = new Date(cardData.createdAt);
  const formattedDate = createDate
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\s/g, '')
    .slice(0, -1);
  return (
    <Wrapper>
      <TopWrapper>
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
      </TopWrapper>
      <TextWrapper>{cardData.content}</TextWrapper>
      <CreatedDate>{formattedDate}</CreatedDate>
    </Wrapper>
  );
};
