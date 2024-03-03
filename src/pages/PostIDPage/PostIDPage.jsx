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

export default function PostIDPage() {
  const { userID } = useParams();
  const pageRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const drag = useRef(false);
  const scrollbarStartY = useRef(0);
  const scrollThumbRef = useRef(null);
  const startScrollHeight = useRef(0);
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

  //drag scrollbar
  const handleMouseDownScroll = (e) => {
    scrollbarStartY.current = e.clientY;
    startScrollHeight.current = pageRef.current.scrollTop;
    drag.current = true;
    scrollThumbRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  };
  const handleMouseMoveScroll = (e) => {
    if (drag.current) {
      const deltaH = e.clientY - scrollbarStartY.current;
      const pageHeight = pageRef.current.scrollHeight;
      const deltaScrollPosition =
        startScrollHeight.current +
        (deltaH / (window.innerHeight - 16)) * pageHeight;
      pageRef.current.scrollTop = deltaScrollPosition;
    }
  };
  const handleMouseUpScroll = () => {
    drag.current = false;
    scrollThumbRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
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
    drag.current = false;
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
          onMouseMove={handleMouseMoveScroll}
          onMouseUp={handleMouseUpScroll}
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
              setMessageCardData={handleMessageCardData}
              currentCardData={currentCardData}
              handleCurrentCardData={handleCurrentCardData}
              dataError={dataError}
              setDataError={setDataError}
            ></MessageCardWrapper>
          </S.MessageWrapper>
          <S.ScrollbarTrack>
            <S.scrollbarWrapper
              ref={scrollWrapperRef}
              onMouseDown={handleMouseDownScroll}
            >
              <S.scrollbarThumb ref={scrollThumbRef}></S.scrollbarThumb>
            </S.scrollbarWrapper>
          </S.ScrollbarTrack>
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
