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
import { deleteMessageCardData, getRecipientData } from '../../API';
//import Header from '../../components/Common/Header/Header';
//import SubHeader from '../../components/SubHeader/SubHeader';

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
  const [loading, setLoading] = useState(true);
  const target = useRef(null);
  const { userID } = useParams();
  const [dataError, setDataError] = useState(null);
  const [endData, setEndData] = useState(false);
  const [deleteCount, setDeleteCount] = useState(0);
  const [userData, setUserData] = useState({
    name: null,
    backgroundColor: 'beige',
    backgroundImageURL: null,
    recentMessages: [],
  });
  const [messageCount, setMessageCount] = useState(0);
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

  const InitialGetCardData = async (limit = null, offset = null) => {
    const { data, count, error } = await getMessageCardData(
      userID,
      limit,
      offset,
    );
    if (!error) {
      setMessageCardData((prev) => [...prev, ...data]);
      setMessageCount(count);
      if (data.length < INITIAL_PAGE_LOADING) {
        setEndData(true);
      }
    } else {
      if (error) {
        setDataError(error);
      }
    }
    setLoading(false);
    setInitialLoading(false);
  };

  const getCardData = async (limit = null, offset = null) => {
    const { data, count, error } = await getMessageCardData(
      userID,
      limit,
      offset,
    );
    if (!error) {
      if (count > messageCount) {
        const updateCount = count - messageCount;
        const { data: updateData, error: updateError } =
          await getMessageCardData(userID, updateCount, 0);
        if (!updateError) {
          setMessageCardData((prevCardData) => [
            ...updateData,
            ...prevCardData,
          ]);
          setMessageCount(count);
        } else {
          setDataError(updateError);
        }
        const restData = data.slice(updateCount);
        setMessageCardData((prevCardData) => [...prevCardData, ...restData]);
      } else {
        setMessageCardData((prev) => [...prev, ...data]);
      }

      if (data.length < PAGE_LOADING) {
        setEndData(true);
      }
    } else {
      if (error) {
        setDataError(error);
      }
    }
    setLoading(false);
    setDeleteCount(0);
  };

  const deleteCardData = async (cardID) => {
    const { error } = await deleteMessageCardData(cardID);
    if (error) {
      setDataError(error);
    } else {
      setOffset((prevOffset) => prevOffset - 1);
      setDeleteCount((prevCount) => (prevCount + 1) % 3);
      setMessageCardData((prevCardData) =>
        prevCardData.filter((cardData) => cardData.id !== cardID),
      );
      setMessageCount((prevCount) => prevCount - 1);
    }
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

  useEffect(() => {
    getUserData(userID);
  }, []);

  useEffect(() => {
    if (loading && !dataError) {
      if (initialLoading) {
        InitialGetCardData(INITIAL_PAGE_LOADING, offset);
      } else {
        getCardData(PAGE_LOADING + deleteCount, offset);
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
  }, [handleScroll]);

  return (
    <PostIDContext.Provider
      value={{
        currentCardData,
        handleCurrentCardData,
        currentHoverCard,
        handleCurrentHoverCard,
        deleteCardData,
      }}
    >
      {dataError ? (
        <S.ErrorWrapper>
          <S.ErrorTitle>잘못된 접근입니다.</S.ErrorTitle>
          <S.ErrorContent>{dataError.message}</S.ErrorContent>
        </S.ErrorWrapper>
      ) : (
        <>
          {/*
            <>
              <Header page="post" />
              <SubHeader
                value={{ messageCardData, currentCardData, messageCount }}
              />
            </>
            */}
          <S.Header>
            이름:{userData.name} &nbsp;&nbsp; 메세지 개수:
            {messageCount} &nbsp;&nbsp; ID1:
            {userData.recentMessages[0] && userData.recentMessages[0].id}{' '}
            &nbsp;&nbsp; ID2:
            {userData.recentMessages[1] && userData.recentMessages[1].id}{' '}
            &nbsp;&nbsp; ID3:
            {userData.recentMessages[2] && userData.recentMessages[2].id}{' '}
          </S.Header>
          <S.PageWrapper
            $color={userData.backgroundColor}
            $url={userData.backgroundImageURL}
          >
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
