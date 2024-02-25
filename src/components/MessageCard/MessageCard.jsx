import React, { useContext } from 'react';
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
  DeleteButton,
  DeleteIcon,
  FlexWrapper,
} from './MessageCard.style';
import { MessageCardBadge } from '../../pages/PostIDPage.style';
import { PostIDContext } from '../../context/PostIDContext';
import Deleted from '../../assets/icon/Deleted.png';

export const MessageCard = ({ cardData }) => {
  const { currentHoverCard, handleCurrentCardData, handleCurrentHoverCard } =
    useContext(PostIDContext);
  const createDate = new Date(cardData.createdAt);
  const formattedDate = createDate
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\s/g, '')
    .slice(0, -1);
  const handleCardWrapper = () => {
    handleCurrentCardData(cardData);
  };

  const handleMouseOver = () => {
    handleCurrentHoverCard(cardData.id);
  };

  const handleMouseOut = () => {
    handleCurrentHoverCard(-1);
  };

  return (
    <Wrapper
      onClick={handleCardWrapper}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <TopWrapper>
        <FlexWrapper>
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
        </FlexWrapper>
        {currentHoverCard === cardData.id && (
          <DeleteButton>
            <DeleteIcon
              src={Deleted}
              alt="delete"
              width={24}
              height={24}
            ></DeleteIcon>
          </DeleteButton>
        )}
      </TopWrapper>
      <TextWrapper>{cardData.content}</TextWrapper>
      <CreatedDate>{formattedDate}</CreatedDate>
    </Wrapper>
  );
};
