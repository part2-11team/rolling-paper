import React, { useState } from 'react';
import {
  Wrapper,
  AddButtonIcon,
  AddButtonWrapper,
} from './AddMessageCard.style';
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
    <Wrapper
      onFocus={handleFocus}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseDown={handleMouseDown}
    >
      <AddButtonWrapper>
        <AddButtonIcon
          src={image}
          alt="추가 버튼"
          width={56}
          height={56}
        ></AddButtonIcon>
      </AddButtonWrapper>
    </Wrapper>
  );
};
