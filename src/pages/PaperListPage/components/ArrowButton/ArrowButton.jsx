import React from 'react';
import rightArrowIcon from '../../../../assets/icon/arrowright-icon.svg';
import leftArrowIcon from '../../../../assets/icon/arrowleft-icon.svg';
import * as S from './ArrowButton.style.js';

const ArrowButton = ({ right = false, left = false, onClick }) => {
  return (
    <S.ButtonContainer onClick={onClick}>
      <img src={(right && rightArrowIcon) || (left && leftArrowIcon)} />
    </S.ButtonContainer>
  );
};

export default ArrowButton;
