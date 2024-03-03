import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './PostIDPage.style';
import { PostIDContext, Modal, MessageCardWrapper } from './index';
import { getRecipientData } from '../../API';
import Header from '../../components/Common/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import arrowDown from '../../assets/icon/arrow_down.svg';
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
  const { userID } = useParams();
  const drag = useRef(false);
  const startY = useRef(0);
  const pageRef = useRef(null);
  const scrollRef = useRef(null);
  const scrollThumbRef = useRef(null);
  const startScrollHeight = useRef(0);
  const [dataError, setDataError] = useState(null);
  const [scrollStatus, setScrollStatus] = useState(false);
  const [currentCardData, setCurrentCardData] = useState(DEFAULT);
  const [messageCardData, setMessageCardData] = useState([]);
  const [userData, setUserData] = useState({
    name: null,
    backgroundColor: 'beige',
    backgroundImageURL: null,
    recentMessages: [],
  });
  const [messageCount, setMessageCount] = useState(0);
  //update Scrollbar Height, Position
  const setScrollBarHeightPosition = () => {
    const scrollTop = pageRef.current.scrollTop;
    const viewPortHeight = window.innerHeight;
    const pageHeight = pageRef.current.scrollHeight;
    const scrollbarHeight =
      ((viewPortHeight - 16) / pageHeight) * viewPortHeight;
    const ScrollbarTop = (scrollTop / pageHeight) * (viewPortHeight - 16);
    scrollRef.current.style.top = `${ScrollbarTop}px`;
    scrollRef.current.style.height = `${scrollbarHeight}px`;
  };

  const handleCurrentCardData = (cardData = null) => {
    if (currentCardData.id) {
      setCurrentCardData(DEFAULT);
    } else {
      setCurrentCardData(cardData);
    }
  };

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
  //scroll bar position when page scroll
  const handlePageScroll = () => {
    setScrollBarHeightPosition();
    if (pageRef.current.scrollTop > 0 && !scrollStatus) {
      setScrollStatus(true);
    } else if (pageRef.current.scrollTop === 0) {
      setScrollStatus(false);
    }
  };

  const handleMessageCardData = useCallback((value) => {
    setMessageCardData(value);
  }, []);
  //drag scrollbar mouse down
  const handleMouseDown = (e) => {
    startY.current = e.clientY;
    startScrollHeight.current = pageRef.current.scrollTop;
    drag.current = true;
    scrollThumbRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  };
  //drag height range
  const calculateHeight = (height) => {
    const viewPortHeight = window.innerHeight;
    const pageHeight = pageRef.current.scrollHeight;
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
  //drag scrollbar mouse move
  const handleMouseMove = (e) => {
    if (drag.current) {
      const deltaH = e.clientY - startY.current;
      const pageHeight = pageRef.current.scrollHeight;
      const deltaScrollPosition =
        startScrollHeight.current +
        (deltaH / (window.innerHeight - 16)) * pageHeight;
      pageRef.current.scrollTop = calculateHeight(deltaScrollPosition);
    }
  };
  //drag scrollbar mouse up
  const handleMouseUp = () => {
    drag.current = false;
    scrollThumbRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
  };
  //button effect scroll top
  const moveScrollTop = () => {
    const position = pageRef.current.scrollTop;
    if (position) {
      window.requestAnimationFrame(() => {
        pageRef.current.scrollTop = position * 0.8;
        moveScrollTop();
      });
    }
  };

  const handleClickUpperButton = () => {
    moveScrollTop();
  };

  useEffect(() => {
    getUserData(userID);
  }, []);

  //set scroll bar position, height when load new message data
  useEffect(() => {
    drag.current = false;
    const pageFullHeight = pageRef.current.scrollHeight;
    const pageviewHeight = pageRef.current.clientHeight;
    if (pageFullHeight - pageviewHeight > 0) {
      setScrollBarHeightPosition();
    }
  }, [messageCardData]);

  useEffect(() => {
    const handleResize = () => {
      setScrollBarHeightPosition();
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
          $drag={drag.current}
          onScroll={handlePageScroll}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
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
              setCurrentCardData={handleCurrentCardData}
            ></MessageCardWrapper>
          </S.MessageWrapper>
          <S.ScrollbarTrack>
            <S.scrollbarWrapper ref={scrollRef} onMouseDown={handleMouseDown}>
              <S.scrollbarThumb ref={scrollThumbRef}></S.scrollbarThumb>
            </S.scrollbarWrapper>
          </S.ScrollbarTrack>
          <S.ModalBackground
            $currentCardData={currentCardData.id}
            onClick={clickOutterEvent}
          >
            <Modal></Modal>
          </S.ModalBackground>
          {scrollStatus && (
            <S.UpperScrollButton onClick={handleClickUpperButton}>
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
