import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './PostIDPage.style';
import {
  MessageCardModal,
  MessageCardWrapper,
  Scrollbar,
  Toast,
  Header,
  SubHeader,
} from './index';
import { PostIDContext } from '../../context/PostIDContext';
import { setScrollBarHeightPosition } from '../../assets/utils/setScrollBarHeightPosition';
import { getRecipientData } from '../../API';
import arrow_up from '../../assets/icon/arrow_up.svg';

export default function PostIDPage() {
  const { userID } = useParams();
  const pageRef = useRef(null);
  const timerRef = useRef(null);
  const deleteTimerRef = useRef(null);
  const toastUpdate = useRef(false);
  const scrollWrapperRef = useRef(null);
  const [dataError, setDataError] = useState(null);
  const [messageCount, setMessageCount] = useState(0);
  const [toastVisible, setToastVisible] = useState(false);
  const [scrollVisible, setScrollVisible] = useState(false);
  const [messageCardData, setMessageCardData] = useState([]);
  const [pageBackgroundLoad, setPageBackgroundLoad] = useState(true);
  const [currentCardData, setCurrentCardData] = useState({ id: null });
  const [userData, setUserData] = useState({
    name: null,
    backgroundColor: 'beige',
    backgroundImageURL: null,
    recentMessages: [],
  });
  //update currentData when click message card or delete button to determine viewing modal component.
  const updateCurrentCardData = useCallback((cardData) => {
    setCurrentCardData(cardData);
  }, []);

  //update toastVisible state for invisible.
  const updateToastvisible = useCallback((value) => {
    setToastVisible(value);
  }, []);

  // update currentData when click other part, viewing modal.
  const focusOutModal = (e) => {
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
    const img = new Image();
    img.src = backgroundImageURL;
    img.onload = () => {
      setPageBackgroundLoad(false);
    };
    return () => {
      img.onload = null;
    };
  };

  //update scrollbar position when scroll page
  const updateScrollbarPosition = () => {
    setScrollBarHeightPosition(pageRef, scrollWrapperRef);
    if (pageRef.current.scrollTop > 0 && !scrollVisible) {
      setScrollVisible(true);
    } else if (pageRef.current.scrollTop === 0) {
      setScrollVisible(false);
    }
  };

  const updateMessageCardData = (value) => {
    setMessageCardData(value);
  };

  //scroll up button event
  const updateScrollTop = () => {
    const position = pageRef.current.scrollTop;
    if (position) {
      window.requestAnimationFrame(() => {
        pageRef.current.scrollTop = position * 0.8;
        updateScrollTop();
      });
    }
  };

  const scrollToTop = () => {
    updateScrollTop();
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
        updateCurrentCardData,
      }}
    >
      {dataError ? (
        <S.ErrorWrapper>
          <S.ErrorTitle>잘못된 접근입니다.</S.ErrorTitle>
          <S.ErrorContent>{dataError.message}</S.ErrorContent>
        </S.ErrorWrapper>
      ) : (
        <S.PageWrapper ref={pageRef} onScroll={updateScrollbarPosition}>
          <Header page="post" />

          <SubHeader value={{ userID, messageCardData, updateToastvisible }} />
          <Toast
            type="url"
            toastVisible={toastVisible}
            updateToastvisible={updateToastvisible}
            toastUpdate={toastUpdate}
            timerRef={timerRef}
            deleteTimerRef={deleteTimerRef}
          ></Toast>

          <S.MessageWrapper
            $color={userData.backgroundColor}
            $url={userData.backgroundImageURL}
            $load={pageBackgroundLoad}
          >
            <MessageCardWrapper
              messageCardData={messageCardData}
              updateMessageCardData={updateMessageCardData}
              updateCurrentCardData={updateCurrentCardData}
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
            onClick={focusOutModal}
          >
            <MessageCardModal />
          </S.ModalBackground>
          {scrollVisible && (
            <S.UpperImageIcon
              src={arrow_up}
              alt="arrow"
              width={35}
              height={35}
              onClick={scrollToTop}
            ></S.UpperImageIcon>
          )}
        </S.PageWrapper>
      )}
    </PostIDContext.Provider>
  );
}
