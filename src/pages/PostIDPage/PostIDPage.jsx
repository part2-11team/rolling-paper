import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as S from './PostIDPage.style';
import { AddMessageCard, PostIDContext, MessageCard, Modal } from './index';
import axios from 'axios';
import uuid from 'react-uuid';

/* eslint-disable */
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

  const handleScroll = useCallback((entry) => {
    if (entry[0].isIntersecting) {
      setOffset((prevOffset) => prevOffset + PAGE_LOADING);
      setLoading(true);
    }
  });

  const getCardData = async (limit = null, offset = null) => {
    let queryURL = '';
    if (limit || offset) {
      queryURL += '?';
      if (limit) {
        queryURL += `limit=${limit}`;
        if (offset) {
          queryURL += `&offset=${offset}`;
        }
      } else {
        queryURL += `offset=${offset}`;
      }
    }
    try {
      const response = await axios.get(
        'https://rolling-api.vercel.app/4-11/recipients/2719/messages/' +
          queryURL,
      );
      const data = response.data.results;
      setMessageCardData((prev) => [...prev, ...data]);
    } catch (error) {
      /* eslint-disable-next-line */
      console.error(error);
    }
  };

  useEffect(() => {
    if (loading) {
      if (initialLoading) {
        getCardData(11, 0);
        setInitialLoading(false);
        console.log(offset);
      } else {
        console.log(offset);
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
    <S.PageWrapper>
      <PostIDContext.Provider
        value={{
          currentCardData,
          handleCurrentCardData,
          currentHoverCard,
          handleCurrentHoverCard,
        }}
      >
        <S.Header />
        <S.MessageWrapper>
          <AddMessageCard></AddMessageCard>
          {messageCardData.map((cardData) => (
            <MessageCard cardData={cardData} key={uuid()}></MessageCard>
          ))}
        </S.MessageWrapper>
        <S.ModalBackground $currentCardData={currentCardData.id}>
          <Modal></Modal>
        </S.ModalBackground>
      </PostIDContext.Provider>
      <div ref={target}></div>
    </S.PageWrapper>
  );
}
