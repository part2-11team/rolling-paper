import React, { useEffect, useState } from 'react';
import * as S from './MessageCardHeader.style';
import { CardBadage } from '../CardBadage/CardBadage';
export const MessageCardHeader = ({ cardData, Component, type }) => {
  const [imageLoad, setImageLoad] = useState(true);
  useEffect(() => {
    const img = new Image();
    img.src = cardData.profileImageURL;
    img.onload = () => {
      setImageLoad(false);
    };
    return () => {
      img.onload = null;
    };
  }, [cardData]);
  return (
    <>
      <S.Wrapper>
        <S.FlexWrapper $type={type}>
          <S.Image
            src={cardData.profileImageURL}
            alt="프로필 이미지"
            width={56}
            height={56}
            $load={imageLoad}
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
