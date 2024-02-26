import React from 'react';
import {
  Wrapper,
  FlexWrapper,
  ProfileWrapper,
  Image,
  ProfileTextHead,
  ProfileName,
  ProfileTextWrapper,
} from './MessageCardHeader.style';
import { CardBadage } from '../CardBadage/CardBadage';

export const MessageCardHeader = ({ cardData, Component }) => {
  return (
    <>
      <Wrapper>
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
            <CardBadage $type={cardData.relationship}></CardBadage>
          </ProfileWrapper>
        </FlexWrapper>
        <Component></Component>
      </Wrapper>
    </>
  );
};
