import React, { useContext } from 'react';
import {
  Wrapper,
  CreatedDate,
  TextWrapper,
  ModalButton,
  Text,
} from './Modal.style';
import { MessageCardHeader, PostIDContext, getFormattedDate } from './index';

export const Modal = () => {
  const { currentCardData: cardData, handleCurrentCardData } =
    useContext(PostIDContext);
  const handleModalButton = () => {
    handleCurrentCardData();
  };
  const CreatedDateComponent = () => {
    const formattedDate = getFormattedDate(cardData.createdAt);
    return <CreatedDate>{formattedDate}</CreatedDate>;
  };
  return (
    <>
      {cardData.id && (
        <Wrapper>
          <MessageCardHeader
            cardData={cardData}
            Component={CreatedDateComponent}
          ></MessageCardHeader>
          <TextWrapper>
            <Text>{cardData.content}</Text>
          </TextWrapper>
          <ModalButton onClick={handleModalButton}>확인</ModalButton>
        </Wrapper>
      )}
    </>
  );
};
