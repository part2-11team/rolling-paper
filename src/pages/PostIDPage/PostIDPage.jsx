import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as S from './PostIDPage.style';
import { PostIDContext, Modal, MessageCardWrapper } from './index';
import { useParams } from 'react-router-dom';
import { getRecipientData } from '../../API';
import Header from '../../components/Common/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import { ScrollBar } from '../../components/ScrollBar/ScrollBar';

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
  const [scrollHeight, setScrollHeight] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);
  const [currentCardData, setCurrentCardData] = useState(DEFAULT);
  const [messageCardData, setMessageCardData] = useState([]);
  const pageRef = useRef(null);
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
    setScrollHeight(pageRef.current.scrollTop);
  };

  const handleMessageCardData = useCallback((value) => {
    setMessageCardData(value);
  }, []);

  useEffect(() => {
    getUserData(userID);
  }, []);

  useEffect(() => {
    setPageHeight(pageRef.current.scrollHeight);
  }, [messageCardData]);

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
          <ScrollBar
            pageHeight={pageHeight}
            scrollHeight={scrollHeight}
          ></ScrollBar>
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
