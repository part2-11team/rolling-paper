import React, { useState } from 'react';
import * as S from './AddMessageCard.style';
import {
  AddMessageEnabled,
  AddMessageFocus,
  AddMessageHover,
  AddMessagePressed,
} from './index';
import { useNavigate } from 'react-router-dom';
export const AddMessageCard = ({ timerRef, deleteTimerRef }) => {
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
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (deleteTimerRef.current) {
      clearInterval(deleteTimerRef.current);
    }
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
