import React, { useContext } from 'react';
import * as S from './MessageCard.style';
import { PostIDContext, getFormattedDate, Deleted } from './index';
import { MessageCardHeader } from '../MessageCardHeader/MessageCardHeader';

export const MessageCard = ({ cardData }) => {
  const {
    currentHoverCard,
    handleCurrentCardData,
    handleCurrentHoverCard,
    deleteCardData,
  } = useContext(PostIDContext);
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
    deleteCardData(cardData.id);
    alert(`삭제되었습니다.`);
  };

  const DeleteButtonComponent = () => {
    if (currentHoverCard === cardData.id) {
      return (
        <S.DeleteButton onClick={handleClickDeleteButton}>
          <S.DeleteIcon
            src={Deleted}
            alt="delete"
            width={24}
            height={24}
          ></S.DeleteIcon>
        </S.DeleteButton>
      );
    }
    return <></>;
  };
  return (
    <S.Wrapper
      onClick={handleCardWrapper}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <MessageCardHeader
        cardData={cardData}
        Component={DeleteButtonComponent}
      ></MessageCardHeader>
      <S.TextWrapper $font={cardData.font}>{cardData.content}</S.TextWrapper>
      <S.CreatedDate>{formattedDate}</S.CreatedDate>
    </S.Wrapper>
  );
};
