import React, { useContext } from 'react';
import * as S from './Modal.style';
import { MessageCardHeader, PostIDContext, getFormattedDate } from './index';

export const Modal = () => {
  const { currentCardData: cardData, handleCurrentCardData } =
    useContext(PostIDContext);
  const handleModalButton = () => {
    handleCurrentCardData();
  };
  const CreatedDateComponent = () => {
    const formattedDate = getFormattedDate(cardData.createdAt);
    return <S.CreatedDate>{formattedDate}</S.CreatedDate>;
  };
  return (
    <>
      <h1>modal</h1>
      {cardData.id && (
        <S.Wrapper>
          <MessageCardHeader
            cardData={cardData}
            Component={CreatedDateComponent}
          ></MessageCardHeader>
          <S.TextWrapper>
            <S.Text $font={cardData.font}>{cardData.content}</S.Text>
          </S.TextWrapper>
          <S.ModalButton onClick={handleModalButton}>확인</S.ModalButton>
        </S.Wrapper>
      )}
    </>
  );
};
