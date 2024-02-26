import React, { useContext } from 'react';
import {
  TextWrapper,
  Wrapper,
  CreatedDate,
  DeleteButton,
  DeleteIcon,
} from './MessageCard.style';
import { PostIDContext } from '../../context/PostIDContext';
import { getFormattedDate } from '../../assets/utils/getFormattedDate';
import Deleted from '../../assets/icon/Deleted.png';

import { MessageCardHeader } from '../MessageCardHeader/MessageCardHeader';
export const MessageCard = ({ cardData }) => {
  const { currentHoverCard, handleCurrentCardData, handleCurrentHoverCard } =
    useContext(PostIDContext);
  const formattedDate = getFormattedDate(cardData.createdAt);
  const handleCardWrapper = () => {
    handleCurrentCardData(cardData);
  };

  const handleMouseOver = () => {
    handleCurrentHoverCard(cardData.id);
  };

  const handleMouseOut = () => {
    handleCurrentHoverCard(-1);
  };
  const handleClickDeleteButton = (e) => {
    e.stopPropagation();
    alert('삭제 버튼');
  };

  const DeleteButtonComponent = () => {
    if (currentHoverCard === cardData.id) {
      return (
        <DeleteButton onClick={handleClickDeleteButton}>
          <DeleteIcon
            src={Deleted}
            alt="delete"
            width={24}
            height={24}
          ></DeleteIcon>
        </DeleteButton>
      );
    }
    return <></>;
  };
  return (
    <Wrapper
      onClick={handleCardWrapper}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <MessageCardHeader
        cardData={cardData}
        Component={DeleteButtonComponent}
      ></MessageCardHeader>
      <TextWrapper>{cardData.content}</TextWrapper>
      <CreatedDate>{formattedDate}</CreatedDate>
    </Wrapper>
  );
};
