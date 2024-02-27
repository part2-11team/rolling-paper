import React, { useState, useEffect, useRef } from 'react';
import * as S from './PostIDPage.style';
import { AddMessageCard, PostIDContext, MessageCard, Modal } from './index';
import uuid from 'react-uuid';
import { useParams } from 'react-router-dom';
import { getMessageCardData } from '../../API';

const DEFAULT = {
  id: null,
  recipientId: null,
  sender: null,
  profileImageURL: null,
  relationship: null,
  content: null,
  font: null,
  createdAt: null,
};
const PAGE_LOADING = 12;
const INITIAL_PAGE_LOADING = 11;

export default function PostIDPage() {
  const [currentCardData, setCurrentCardData] = useState(DEFAULT);
  const [currentHoverCard, setCurrentHoverCard] = useState(null);
  const [messageCardData, setMessageCardData] = useState([]);
  const [offset, setOffset] = useState(-PAGE_LOADING);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const target = useRef(null);
  const { userID } = useParams();
  const [dataError, setDataError] = useState(null);
  const options = {
    threshold: 0.5,
  };

  const handleCurrentCardData = (cardData = null) => {
    if (currentCardData.id) {
      setCurrentCardData(DEFAULT);
    } else {
      setCurrentCardData(cardData);
    }
  };

  const handleCurrentHoverCard = (id) => {
    setCurrentHoverCard(id);
  };

  const handleScroll = (entry) => {
    if (entry[0].isIntersecting) {
      setLoading(true);
      setOffset((prevOffset) => prevOffset + PAGE_LOADING);
    }
  };

  const getCardData = async (limit = null, offset = null) => {
    const { data, error } = await getMessageCardData(userID, limit, offset);
    if (data) {
      setMessageCardData((prev) => [...prev, ...data]);
    } else {
      setDataError(error);
    }
  };

  useEffect(() => {
    if (loading) {
      if (initialLoading) {
        getCardData(INITIAL_PAGE_LOADING, 0);
        setInitialLoading(false);
      } else {
        getCardData(PAGE_LOADING, offset);
      }
    }
  }, [offset]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, options);
    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      observer.disconnect(target.current);
    };
  }, []);
  return (
    <PostIDContext.Provider
      value={{
        currentCardData,
        handleCurrentCardData,
        currentHoverCard,
        handleCurrentHoverCard,
      }}
    >
      <S.Header />
      {dataError ? (
        <S.ErrorWrapper>
          <S.ErrorTitle>잘못된 URL 접근입니다.</S.ErrorTitle>
          <br />
          <S.ErrorContent>{dataError.message}</S.ErrorContent>
        </S.ErrorWrapper>
      ) : (
        <S.PageWrapper>
          <S.MessageWrapper>
            <AddMessageCard></AddMessageCard>
            {messageCardData.map((cardData) => (
              <MessageCard cardData={cardData} key={uuid()}></MessageCard>
            ))}
          </S.MessageWrapper>
          <S.ModalBackground $currentCardData={currentCardData.id}>
            <Modal></Modal>
          </S.ModalBackground>
          <div ref={target}></div>
        </S.PageWrapper>
      )}
    </PostIDContext.Provider>
  );
}
