import React, { useContext } from 'react';
import * as S from './MessageCardModal.style';
import { PurpleButton } from 'components/Common/PurpleButton/PurpleButton';
import { MessageCardHeader } from '../MessageCardHeader/MessageCardHeader';
import { PostIDContext } from 'context/PostIDContext';
import { getFormattedDate } from 'assets/utils/getFormattedDate';

export const MessageCardModal = () => {
  const { currentCardData: cardData, updateCurrentCardData } =
    useContext(PostIDContext);
  // currentCardData를 빈 값으로 교체하는 함수-> 확인 버튼을 눌렀을 때 모달 컴포넌트가 사라지도록 하기 위한 함수
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
            type="modal"
          ></MessageCardHeader>
          <S.TextWrapper>
            <S.Text
              $font={cardData.font}
              dangerouslySetInnerHTML={{ __html: cardData.content }}
            ></S.Text>
          </S.TextWrapper>
          <PurpleButton
            width={120}
            height={40}
            fix
            center
            onClick={handleModalButton}
          >
            확인
          </PurpleButton>
        </S.Wrapper>
      )}
    </>
  );
};
