import React, { useRef, useState } from 'react';
import * as S from './MessageCard.style';
import { getFormattedDate, Deleted } from './index';
import { MessageCardHeader } from '../MessageCardHeader/MessageCardHeader';

export const MessageCard = React.memo(
  ({ cardData, handleCurrentCardData, deleteCardData }) => {
    const cardRef = useRef(null);
    const [hoverStatus, setHoverStatus] = useState(false);
    const formattedDate = getFormattedDate(cardData.createdAt);
    const handleCardWrapper = () => {
      handleCurrentCardData(cardData);
    };
    const handleClickDeleteButton = (e) => {
      e.stopPropagation();
      deleteCardData(cardData.id);
      alert(`삭제되었습니다.`);
    };

    const DeleteButtonComponent = () => {
      if (!hoverStatus) return <></>;
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
    };

    const handleMouseOut = () => {
      setHoverStatus(false);
    };

    const handleMouseOver = () => {
      setHoverStatus(true);
    };

    return (
      <S.Wrapper
        onClick={handleCardWrapper}
        onMouseLeave={handleMouseOut}
        onMouseOver={handleMouseOver}
        ref={cardRef}
      >
        <MessageCardHeader
          cardData={cardData}
          Component={DeleteButtonComponent}
        ></MessageCardHeader>
        <S.TextWrapper $font={cardData.font}>{cardData.content}</S.TextWrapper>
        <S.CreatedDate>{formattedDate}</S.CreatedDate>
      </S.Wrapper>
    );
  },
);
MessageCard.displayName = 'MessageCard';
