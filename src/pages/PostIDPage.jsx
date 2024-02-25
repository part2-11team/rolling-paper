/*eslint-disable */
import React, { useState } from 'react';
import {
  PageWrapper,
  MessageWrapper,
  ModalBackground,
  Header,
} from './PostIDPage.style';
import { MessageCard } from '../components/MessageCard/MessageCard';
import { PostIDContext } from '../context/PostIDContext';
import { Modal } from '../components/Modal/Modal';
export default function PostIDPage() {
  //데이터 받아서 context에 저장
  const [currentCardData, setCurrentCardData] = useState(25);

  const handleCurrentCardData = (cardData = null) => {
    if (currentCardData) {
      setCurrentCardData(null);
    } else {
      setCurrentCardData(cardData);
    }
  };

  const SAMPLEDATA = [
    {
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
    },
    {
      id: 28,
      recipientId: 2,
      sender: '김하은',
      profileImageURL:
        'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
      relationship: '가족',
      content: '열심히 일하는 모습 멋있습니다.',
      font: 'Pretendard',
      createdAt: '2023-11-01T08:05:25.399056Z',
    },
    {
      id: 29,
      recipientId: 2,
      sender: '김하은',
      profileImageURL:
        'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
      relationship: '가족',
      content: '열심히 일하는 모습 멋있습니다.',
      font: 'Pretendard',
      createdAt: '2023-11-01T08:05:25.399056Z',
    },
    {
      id: 30,
      recipientId: 2,
      sender: '김하은',
      profileImageURL:
        'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
      relationship: '가족',
      content: '열심히 일하는 모습 멋있습니다.',
      font: 'Pretendard',
      createdAt: '2023-11-01T08:05:25.399056Z',
    },
    {
      id: 31,
      recipientId: 2,
      sender: '김하은',
      profileImageURL:
        'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
      relationship: '가족',
      content: '열심히 일하는 모습 멋있습니다.',
      font: 'Pretendard',
      createdAt: '2023-11-01T08:05:25.399056Z',
    },
    {
      id: 32,
      recipientId: 2,
      sender: '김하은',
      profileImageURL:
        'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
      relationship: '가족',
      content: '열심히 일하는 모습 멋있습니다.',
      font: 'Pretendard',
      createdAt: '2023-11-01T08:05:25.399056Z',
    },
  ];

  return (
    <PageWrapper>
      <PostIDContext.Provider
        value={{ SAMPLEDATA, currentCardData, handleCurrentCardData }}
      >
        <Header></Header>
        <MessageWrapper>
          {SAMPLEDATA.map((cardData) => (
            <MessageCard cardData={cardData} key={cardData.id}></MessageCard>
          ))}
        </MessageWrapper>
      </PostIDContext.Provider>
      <ModalBackground $currentCardData={currentCardData}>
        <Modal></Modal>
      </ModalBackground>
    </PageWrapper>
  );
}
