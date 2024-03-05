import React, { useRef, useState } from 'react';
import * as S from './MessageCard.style';
import { getFormattedDate, Deleted } from './index';
import { MessageCardHeader } from '../MessageCardHeader/MessageCardHeader';

export const MessageCard = React.memo(
  ({ cardData, updateCurrentCardData, deleteCardData }) => {
    const cardRef = useRef(null);
    const [isHover, setIsHover] = useState(false);
    const formattedDate = getFormattedDate(cardData.createdAt);
    const ChangeCurrentCardData = () => {
      updateCurrentCardData(cardData);
    };
    const deleteMessageCard = (e) => {
      e.stopPropagation();
      deleteCardData(cardData.id);
      alert(`삭제되었습니다.`);
    };
    const DeleteButtonComponent = () => {
      if (!isHover) return <></>;
      return (
        <S.DeleteButton onClick={deleteMessageCard}>
          <S.DeleteIcon
            src={Deleted}
            alt="delete"
            width={24}
            height={24}
          ></S.DeleteIcon>
        </S.DeleteButton>
      );
    };

    const handleMouseOutCard = () => {
      setIsHover(false);
    };

    const handleMouseEnterCard = () => {
      setIsHover(true);
    };

    return (
      <S.Wrapper
        onClick={ChangeCurrentCardData}
        onMouseLeave={handleMouseOutCard}
        onMouseEnter={handleMouseEnterCard}
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
