import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './PostIDPage.style';
import {
  PostIDContext,
  Modal,
  MessageCardWrapper,
  setScrollBarHeightPosition,
  getRecipientData,
} from './index';
import Header from '../../components/Common/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import arrowDown from '../../assets/icon/arrow_down.svg';
import { Scrollbar } from '../../components/Scrollbar/Scrollbar';

export default function PostIDPage() {
  const { userID } = useParams();
  const pageRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const [dataError, setDataError] = useState(null);
  const [messageCount, setMessageCount] = useState(0);
  const [scrollVisible, setScrollVisible] = useState(false);
  const [currentCardData, setCurrentCardData] = useState({ id: null });
  const [messageCardData, setMessageCardData] = useState([]);
  const [userData, setUserData] = useState({
    name: null,
    backgroundColor: 'beige',
    backgroundImageURL: null,
    recentMessages: [],
  });
  //update currentData when click message card or delete button to determine viewing modal component.
  const handleCurrentCardData = useCallback((cardData) => {
    setCurrentCardData(cardData);
  }, []);

  // update currentData when click other part, viewing modal.
  const handleClickOutter = (e) => {
    e.stopPropagation();
    setCurrentCardData({ id: null });
  };

  //update userdata for header, background image
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
  //update scrollbar position when scroll page
  const handleScrollPage = () => {
    setScrollBarHeightPosition(pageRef, scrollWrapperRef);
    if (pageRef.current.scrollTop > 0 && !scrollVisible) {
      setScrollVisible(true);
    } else if (pageRef.current.scrollTop === 0) {
      setScrollVisible(false);
    }
  };

  const handleMessageCardData = (value) => {
    setMessageCardData(value);
  };

  //scroll up button event
  const scrollUp = () => {
    const position = pageRef.current.scrollTop;
    if (position) {
      window.requestAnimationFrame(() => {
        pageRef.current.scrollTop = position * 0.8;
        scrollUp();
      });
    }
  };

  const handleClickScrollUpButton = () => {
    scrollUp();
  };
  //get UserData initial loading
  useEffect(() => {
    getUserData(userID);
  }, []);

  //set scrollbar position, height when load new message data
  useEffect(() => {
    const pageFullHeight = pageRef.current.scrollHeight;
    const pageviewHeight = pageRef.current.clientHeight;
    if (pageFullHeight - pageviewHeight > 0) {
      setScrollBarHeightPosition(pageRef, scrollWrapperRef);
    }
  }, [messageCardData]);

  //update scrollbar position, height when page resize
  useEffect(() => {
    const handleResize = () => {
      setScrollBarHeightPosition(pageRef, scrollWrapperRef);
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
          onScroll={handleScrollPage}
        >
          <Header page="post" />
          <SubHeader
            value={{ messageCardData, currentCardData, messageCount }}
          />
          <S.MessageWrapper
            $color={userData.backgroundColor}
            $url={userData.backgroundImageURL}
          >
            <MessageCardWrapper
              messageCardData={messageCardData}
              handleMessageCardData={handleMessageCardData}
              handleCurrentCardData={handleCurrentCardData}
              setDataError={setDataError}
              pageRef={pageRef}
            ></MessageCardWrapper>
          </S.MessageWrapper>
          <Scrollbar
            pageRef={pageRef}
            scrollWrapperRef={scrollWrapperRef}
          ></Scrollbar>
          <S.ModalBackground
            $currentCardData={currentCardData.id}
            onClick={handleClickOutter}
          >
            <Modal></Modal>
          </S.ModalBackground>
          {scrollVisible && (
            <S.UpperScrollButton onClick={handleClickScrollUpButton}>
              <S.UpperImageIcon
                src={arrowDown}
                alt="arrow"
                width={30}
                height={30}
              ></S.UpperImageIcon>
            </S.UpperScrollButton>
          )}
        </S.PageWrapper>
      )}
    </PostIDContext.Provider>
  );
}
