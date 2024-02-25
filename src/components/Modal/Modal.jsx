import React /*, { useContext } */ from 'react';
import {
  Wrapper,
  TopWrapper,
  ProfileModalWrapper,
  CreatedDate,
  TextWrapper,
  ModalButton,
} from './Modal.style';
import {
  Image,
  ProfileWrapper,
  ProfileTextWrapper,
  ProfileTextHead,
  ProfileName,
} from '../MessageCard/MessageCard.style';
import { MessageCardBadge } from '../../pages/PostIDPage.style';
//import { PostIDContext } from '../../context/PostIDContext';

export const Modal = () => {
  //const { currentCardData: cardData } = useContext(PostIDContext);
  const cardData = {
    id: 27,
    recipientId: 2,
    sender: '김하은',
    profileImageURL:
      'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
    relationship: '가족',
    content:
      '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!',
    font: 'Pretendard',
    createdAt: '2023-11-01T08:05:25.399056Z',
  };
  const createDate = new Date(cardData.createdAt);
  const formattedDate = createDate
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\s/g, '')
    .slice(0, -1);
  return (
    <Wrapper>
      <TopWrapper>
        <ProfileModalWrapper>
          <Image
            src={cardData.profileImageURL}
            alt="프로필 이미지"
            width={56}
            height={56}
          ></Image>
          <ProfileWrapper>
            <ProfileTextWrapper>
              <ProfileTextHead>From.</ProfileTextHead>
              <ProfileName>{cardData.sender}</ProfileName>
            </ProfileTextWrapper>
            <MessageCardBadge $type={cardData.relationship}>
              {cardData.relationship}
            </MessageCardBadge>
          </ProfileWrapper>
        </ProfileModalWrapper>
        <CreatedDate>{formattedDate}</CreatedDate>
      </TopWrapper>
      <TextWrapper>{cardData.content}</TextWrapper>
      <ModalButton>확인</ModalButton>
    </Wrapper>
  );
};
