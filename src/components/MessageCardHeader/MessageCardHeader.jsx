import React from 'react';
import * as S from './MessageCardHeader.style';
import { CardBadage } from '../CardBadage/CardBadage';

export const MessageCardHeader = ({ cardData, Component }) => {
  return (
    <>
      <S.Wrapper>
        <S.FlexWrapper>
          <S.Image
            src={cardData.profileImageURL}
            alt="프로필 이미지"
            width={56}
            height={56}
          ></S.Image>
          <S.ProfileWrapper>
            <S.ProfileTextWrapper>
              <S.ProfileTextHead>From.</S.ProfileTextHead>
              <S.ProfileName>{cardData.sender}</S.ProfileName>
            </S.ProfileTextWrapper>
            <CardBadage $type={cardData.relationship}></CardBadage>
          </S.ProfileWrapper>
        </S.FlexWrapper>
        <Component></Component>
      </S.Wrapper>
    </>
  );
};
