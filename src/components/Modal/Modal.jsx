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

export const Modal = () => {
  const { currentCardData, handleCurrentCardData } = useContext(PostIDContext);
  const cardData = currentCardData;
  const createDate = new Date(cardData.createdAt);
  const formattedDate = createDate
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\s/g, '')
    .slice(0, -1);
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
