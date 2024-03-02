import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './PostIDPage.style';
import { PostIDContext, Modal, MessageCardWrapper } from './index';
import { getRecipientData } from '../../API';
import Header from '../../components/Common/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
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

export default function PostIDPage() {
  const [pageHeight, setPageHeight] = useState(0);
  const [currentCardData, setCurrentCardData] = useState(DEFAULT);
  const [messageCardData, setMessageCardData] = useState([]);
  const [drag, setDrag] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScrollHeight, setStartScrollHeight] = useState(0);
  const pageRef = useRef(null);
  const scrollRef = useRef(null);
  const { userID } = useParams();
  const [dataError, setDataError] = useState(null);
  const [userData, setUserData] = useState({
    name: null,
    backgroundColor: 'beige',
    backgroundImageURL: null,
    recentMessages: [],
  });
  const [messageCount, setMessageCount] = useState(0);

  const handleCurrentCardData = useCallback(
    (cardData = null) => {
      if (currentCardData.id) {
        setCurrentCardData(DEFAULT);
      } else {
        setCurrentCardData(cardData);
      }
    },
    [currentCardData],
  );

  const clickOutterEvent = (e) => {
    e.stopPropagation();
    setCurrentCardData(DEFAULT);
  };

  const getUserData = async (userID) => {
    const {
      name,
      backgroundColor,
      backgroundImageURL,
      messageCount: messageCountData,
      recentMessages,
      error,
    } = await getRecipientData(userID);
    if (error) {
      setDataError(error);
      return;
    }

    setUserData({ name, backgroundColor, backgroundImageURL, recentMessages });
    setMessageCount(messageCountData);
  };

  const handlePageScroll = () => {
    const scrollTop = pageRef.current.scrollTop;
    const viewPortHeight = window.innerHeight;
    const scrollbarHeight =
      ((viewPortHeight - 16) / pageHeight) * viewPortHeight;
    const ScrollbarTop = (scrollTop / pageHeight) * (viewPortHeight - 16);
    scrollRef.current.style.top = `${ScrollbarTop}px`;
    scrollRef.current.style.height = `${scrollbarHeight}px`;
  };

  const handleMessageCardData = useCallback((value) => {
    setMessageCardData(value);
  }, []);

  const handleMouseDown = (e) => {
    setStartY(e.clientY);
    setStartScrollHeight(pageRef.current.scrollTop);
    setDrag(true);
  };

  const calculateHeight = (height) => {
    const viewPortHeight = window.innerHeight;
    const scrollbarHeight =
      ((viewPortHeight - 16) / pageHeight) * viewPortHeight;
    const ScrollbarTop = (height / pageHeight) * (viewPortHeight - 16);

    if (scrollbarHeight + ScrollbarTop > viewPortHeight - 16) {
      const MaxScrollTop =
        ((viewPortHeight - 16 - scrollbarHeight) * pageHeight) /
        (viewPortHeight - 16);
      return MaxScrollTop;
    }
    return height;
  };

  const handleMouseMove = (e) => {
    if (drag) {
      const deltaH = e.clientY - startY;
      const deltaScrollHeight =
        startScrollHeight + (deltaH / (window.innerHeight - 16)) * pageHeight;
      pageRef.current.scrollTop = calculateHeight(deltaScrollHeight);
    }
  };

  const handleMouseUp = () => {
    setDrag(false);
  };

  useEffect(() => {
    getUserData(userID);
  }, []);

  useEffect(() => {
    setDrag(false);
    setPageHeight(pageRef.current.scrollHeight);
  }, [messageCardData]);

  useEffect(() => {
    const handleResize = () => {
      setPageHeight(pageRef.current.scrollHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <PostIDContext.Provider
      value={{
        currentCardData,
        handleCurrentCardData,
      }}
    >
      {dataError ? (
        <S.ErrorWrapper>
          <S.ErrorTitle>잘못된 접근입니다.</S.ErrorTitle>
          <S.ErrorContent>{dataError.message}</S.ErrorContent>
        </S.ErrorWrapper>
      ) : (
        <S.PageWrapper
          ref={pageRef}
          $color={userData.backgroundColor}
          $url={userData.backgroundImageURL}
          onScroll={handlePageScroll}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <Header page="post" />
          <SubHeader
            value={{ messageCardData, currentCardData, messageCount }}
          />
          {/*
          <S.Header>
            이름:{userData.name} &nbsp;&nbsp; 메세지 개수:
            {messageCount} &nbsp;&nbsp; ID1:
            {userData.recentMessages[0] && userData.recentMessages[0].id}{' '}
            &nbsp;&nbsp; ID2:
            {userData.recentMessages[1] && userData.recentMessages[1].id}{' '}
            &nbsp;&nbsp; ID3:
            {userData.recentMessages[2] && userData.recentMessages[2].id}{' '}
          </S.Header>
          */}
          <S.MessageWrapper
            $color={userData.backgroundColor}
            $url={userData.backgroundImageURL}
          >
            <MessageCardWrapper
              messageCardData={messageCardData}
              setMessageCardData={handleMessageCardData}
              currentCardData={currentCardData}
              setCurrentCardData={handleCurrentCardData}
            ></MessageCardWrapper>
          </S.MessageWrapper>
          <S.ScrollbarTrack>
            <S.scrollbarThumb
              ref={scrollRef}
              onMouseDown={handleMouseDown}
            ></S.scrollbarThumb>
          </S.ScrollbarTrack>
          <S.ModalBackground
            $currentCardData={currentCardData.id}
            onClick={clickOutterEvent}
          >
            <Modal></Modal>
          </S.ModalBackground>
        </S.PageWrapper>
      )}
    </PostIDContext.Provider>
  );
}
