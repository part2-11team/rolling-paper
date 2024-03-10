import React, { useState } from 'react';
import * as S from './AddMessageCard.style';
import AddMessageEnabled from 'assets/icon/AddMessageEnabled.png';
import AddMessageFocus from 'assets/icon/AddMessageFocus.png';
import AddMessageHover from 'assets/icon/AddMessageHover.png';
import AddMessagePressed from 'assets/icon/AddMessagePressed.png';
import { useNavigate } from 'react-router-dom';

export const AddMessageCard = () => {
  const navigate = useNavigate();
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
  const handleClick = () => {
    navigate('./message');
  };
  return (
    <S.Wrapper
      onFocus={handleFocus}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
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
