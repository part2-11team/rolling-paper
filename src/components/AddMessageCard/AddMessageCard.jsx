import React, { useState } from 'react';
import {
  Wrapper,
  AddButtonIcon,
  AddButtonWrapper,
} from './AddMessageCard.style';
import AddMessageEnabled from '../../assets/icon/AddMessageEnabled.png';
import AddMessageFocus from '../../assets/icon/AddMessageFocus.png';
import AddMessageHover from '../../assets/icon/AddMessageHover.png';
import AddMessagePressed from '../../assets/icon/AddMessagePressed.png';
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
