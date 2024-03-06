import React, { useContext } from 'react';
import * as S from './MessageCardModal.style';
import { MessageCardHeader, PostIDContext, getFormattedDate } from './index';

export const MessageCardModal = () => {
  const { currentCardData: cardData, updateCurrentCardData } =
    useContext(PostIDContext);
  const handleModalButton = () => {
    updateCurrentCardData({ id: null });
  };
  const CreatedDateComponent = () => {
    const formattedDate = getFormattedDate(cardData.createdAt);
    return <S.CreatedDate>{formattedDate}</S.CreatedDate>;
  };
  const ClickModal = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      {cardData.id && (
        <S.Wrapper onClick={ClickModal}>
          <MessageCardHeader
            cardData={cardData}
            Component={CreatedDateComponent}
          ></MessageCardHeader>
          <S.TextWrapper>
            <S.Text
              $font={cardData.font}
              dangerouslySetInnerHTML={{ __html: cardData.content }}
            ></S.Text>
          </S.TextWrapper>
          <S.ModalButton onClick={handleModalButton}>확인</S.ModalButton>
        </S.Wrapper>
      )}
    </>
  );
};
