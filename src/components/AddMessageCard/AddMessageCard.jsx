import React, { useState } from 'react';
import * as S from './AddMessageCard.style';
import {
  AddMessageEnabled,
  AddMessageFocus,
  AddMessageHover,
  AddMessagePressed,
} from './index';
export const AddMessageCard = () => {
  const [image, setImage] = useState(AddMessageEnabled);
  const handleMouseOver = () => {
    setImage(AddMessageHover);
  };
  const handleFocus = () => {
    setImage(AddMessageFocus);
  };
  const handleMouseOut = () => {
    setImage(AddMessageEnabled);
  };
  const handleMouseDown = () => {
    setImage(AddMessagePressed);
  };
  return (
    <S.Wrapper
      onFocus={handleFocus}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseDown={handleMouseDown}
    >
      <S.AddButtonWrapper>
        <S.AddButtonIcon
          src={image}
          alt="추가 버튼"
          width={56}
          height={56}
        ></S.AddButtonIcon>
      </S.AddButtonWrapper>
    </S.Wrapper>
  );
};
