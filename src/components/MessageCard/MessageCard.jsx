import React, { useContext } from 'react';
import {
  TextWrapper,
  //TopWrapper,
  Wrapper,
  //Image,
  //ProfileWrapper,
  //ProfileTextHead,
  //ProfileName,
  //ProfileTextWrapper,
  CreatedDate,
  DeleteButton,
  DeleteIcon,
  //FlexWrapper,
} from './MessageCard.style';
//import { CardBadage } from '../CardBadage/CardBadage';
import { PostIDContext } from '../../context/PostIDContext';
import Deleted from '../../assets/icon/Deleted.png';

import { MessageCardHeader } from '../MessageCardHeader/MessageCardHeader';

export const MessageCard = ({ cardData }) => {
  const { currentHoverCard, handleCurrentCardData, handleCurrentHoverCard } =
    useContext(PostIDContext);
  const createDate = new Date(cardData.createdAt);
  const formattedDate = createDate
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\s/g, '')
    .slice(0, -1);
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
