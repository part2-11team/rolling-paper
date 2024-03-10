import React, { useRef, useState } from 'react';
import * as S from './MessageCard.style';
import { getFormattedDate, Deleted } from './index';
import { MessageCardHeader } from '../MessageCardHeader/MessageCardHeader';

export const MessageCard = React.memo(
  ({ cardData, updateCurrentCardData, deleteCardData }) => {
    const cardRef = useRef(null);
    const [isHover, setIsHover] = useState(false);
    const formattedDate = getFormattedDate(cardData.createdAt);
    //currentCardData 변경 함수 -> 카드를 클릭했을 때 현재 클릭한 카드데이터를 넣기 위해 사용
    const ChangeCurrentCardData = () => {
      updateCurrentCardData(cardData);
    };
    //메세지 카드 삭제 함수 -> 삭제 버튼을 눌렀을 때 클릭한 카드데이터를 삭제하기 위해 사용
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
    //삭제 아이콘이 사라지기 위한 함수 -> 마우스가 해당 카드 밖으로 나갔을 때 사용
    const handleMouseOutCard = () => {
      setIsHover(false);
    };
    //삭제 아이콘이 보이도록 하는 함수 -> 마우스가 해당 카드 안으로 들어왔을 때 사용
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
          type="card"
        ></MessageCardHeader>
        <S.TextWrapper
          $font={cardData.font}
          dangerouslySetInnerHTML={{ __html: cardData.content }}
        ></S.TextWrapper>
        <S.CreatedDate>{formattedDate}</S.CreatedDate>
      </S.Wrapper>
    );
  },
);
MessageCard.displayName = 'MessageCard';
