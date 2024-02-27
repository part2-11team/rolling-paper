import React, { useState, useEffect, useRef } from 'react';
import * as S from './PostIDPage.style';
import {
  AddMessageCard,
  PostIDContext,
  MessageCard,
  Modal,
  getMessageCardData,
  loadingIcon,
} from './index';
import uuid from 'react-uuid';
import { useParams } from 'react-router-dom';

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
  const [offset, setOffset] = useState(0);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const target = useRef(null);
  const { userID } = useParams();
  const [dataError, setDataError] = useState(null);
  const [endData, setEndData] = useState(false);
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
    if (entry[0].isIntersecting && !initialLoading) {
      setLoading(true);
      setOffset(messageCardData.length);
    }
  };

  const getCardData = async (limit = null, offset = null) => {
    setLoading(true);
    const { data, error } = await getMessageCardData(userID, limit, offset);
    if (data && data.length > 0) {
      setMessageCardData((prev) => [...prev, ...data]);
      /* eslint-disable */
    } else {
      if (error) {
        setDataError(error);
      } else {
        setEndData(true);
      }
    }
    setLoading(false);
    if (initialLoading) {
      setInitialLoading(false);
    }
  };

  useEffect(() => {
    if (initialLoading) {
      getCardData(INITIAL_PAGE_LOADING, offset);
    } else {
      getCardData(PAGE_LOADING, offset);
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
  }, [handleScroll]);
  return (
    <PostIDContext.Provider
      value={{
        currentCardData,
        handleCurrentCardData,
        currentHoverCard,
        handleCurrentHoverCard,
      }}
    >
      {dataError ? (
        <S.ErrorWrapper>
          <S.ErrorTitle>잘못된 URL 접근입니다.</S.ErrorTitle>
          <S.ErrorContent>{dataError.message}</S.ErrorContent>
        </S.ErrorWrapper>
      ) : (
        <>
          <S.Header />
          <S.PageWrapper>
            <S.MessageWrapper>
              {!initialLoading && <AddMessageCard></AddMessageCard>}
              {messageCardData.map((cardData) => (
                <MessageCard cardData={cardData} key={uuid()}></MessageCard>
              ))}
              {loading ? (
                <S.LoadingIcon
                  src={loadingIcon}
                  alt="loading"
                  $initialLoading={initialLoading}
                  $endData={endData}
                ></S.LoadingIcon>
              ) : (
                !endData && <div ref={target}></div>
              )}
            </S.MessageWrapper>
            <S.ModalBackground $currentCardData={currentCardData.id}>
              <Modal></Modal>
            </S.ModalBackground>
          </S.PageWrapper>
        </>
      )}
    </PostIDContext.Provider>
  );
}
