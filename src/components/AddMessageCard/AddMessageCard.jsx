import React, { useState } from 'react';
import { Wrapper } from '../MessageCard/MessageCard.style';
import { AddButtonIcon } from './AddMessageCard.style';
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
      <AddButtonIcon $image={image}></AddButtonIcon>
    </Wrapper>
  );
};
