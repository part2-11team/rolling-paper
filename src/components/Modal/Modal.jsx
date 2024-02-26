import React, { useContext } from 'react';
import {
  Wrapper,
  CreatedDate,
  TextWrapper,
  ModalButton,
  Text,
} from './Modal.style';
import { MessageCardHeader } from '../MessageCardHeader/MessageCardHeader';
import { PostIDContext } from '../../context/PostIDContext';
import { getFormattedDate } from '../../assets/utils/getFormattedDate';

export const Modal = () => {
  const { currentCardData: cardData, handleCurrentCardData } =
    useContext(PostIDContext);
  const formattedDate = getFormattedDate(cardData.createdAt);
  const handleModalButton = () => {
    handleCurrentCardData();
  };
  const CreatedDateComponent = () => {
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
