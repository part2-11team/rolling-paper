import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './MessageCardWrapper.style';
import { AddMessageCard } from '../AddMessageCard/AddMessageCard';
import {
  getMessageCardData,
  deleteMessageCardData,
  deleteRecipient,
} from '../../API';
import loadingIcon from '../../assets/icon/loading.svg';
import { MessageCard } from '../MessageCard/MessageCard';
import { Toast } from '../Toast/Toast';
import { PurpleButton } from '../Common/PurpleButton/PurpleButton';
const PAGE_LOADING = 12;
const INITIAL_PAGE_LOADING = 11;
const options = {
  threshold: 0.5,
};

export const MessageCardWrapper = ({
  messageCardData,
  updateMessageCardData,
  updateCurrentCardData,
  setDataError,
  pageRef,
  decreaseCardCount,
}) => {
  const { userID } = useParams();
  const offset = useRef(0);
  const gridWrapperRef = useRef(null);
  const timerRef = useRef(null);
  const deleteTimerRef = useRef(null);
  const target = useRef(null);
  const deleteCount = useRef(0);
  const messageCount = useRef(0);
  const toastUpdate = useRef(false);
  const [loading, setLoading] = useState(true);
  const [toastVisible, setToastVisible] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const navigate = useNavigate();

  const updateToastvisible = useCallback((value) => {
    setToastVisible(value);
  }, []);
  //update loading state to load data when reach the end of page
  const handleIntersectionObserver = (entry) => {
    if (entry[0].isIntersecting && !initialLoading) {
      setLoading(true);
      offset.current = messageCardData.length;
    }
  };
  const deleteRecipientData = async () => {
    const { error } = await deleteRecipient(userID);
    if (error) {
      setDataError(error);
      return;
    }
    //delete timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (deleteTimerRef.current) {
      clearInterval(deleteTimerRef.current);
    }
    alert('삭제되었습니다');
    navigate('/list');
  };

  //load cardData at initial rendering
  const initialGetCardData = async (limit = null, offset = null) => {
    const { data, count, error } = await getMessageCardData(
      userID,
      limit,
      offset,
    );
    if (!error) {
      updateMessageCardData([...data]);
      messageCount.current = count;
    } else {
      if (error) {
        setDataError(error);
      }
    }
    setLoading(false);
    setInitialLoading(false);
  };
  //load additional cardData when reach the end of page
  const getCardData = async (limit = null, offset = null) => {
    const {
      data,
      count: newMessageCount,
      error,
    } = await getMessageCardData(userID, limit, offset);
    if (error) {
      setDataError(error);
      return;
    }
    if (newMessageCount > messageCount.current) {
      const updateCount = newMessageCount - messageCount.current;
      const { data: updateData, error: updateError } = await getMessageCardData(
        userID,
        updateCount,
        0,
      );
      if (updateError) {
        setDataError(updateError);
        return;
      }
      updateMessageCardData((prevCardData) => [...updateData, ...prevCardData]);
      messageCount.current = newMessageCount;
      const restData = data.slice(updateCount);
      updateMessageCardData((prevCardData) => [...prevCardData, ...restData]);
    } else {
      updateMessageCardData((prevCardData) => [...prevCardData, ...data]);
    }

    if (data.length === 0) {
      pageRef.current.scrollTop -= 90;
      setToastVisible(true);
      toastUpdate.current = true;
    }
    setLoading(false);
    deleteCount.current = 0;
  };

  //delete card data(for each message card component)
  const deleteCardData = useCallback(async (cardID) => {
    const { error } = await deleteMessageCardData(cardID);
    if (error) {
      setDataError(error);
    } else {
      offset.current -= 1;
      deleteCount.current = (deleteCount.current + 1) % 3;
      updateMessageCardData((prevCardData) =>
        prevCardData.filter((cardData) => cardData.id !== cardID),
      );
      messageCount.current -= 1;
    }
    decreaseCardCount();
  }, []);
  //data load function, loaded loading Icon
  const dataLoad = () => {
    if (loading) {
      if (initialLoading) {
        initialGetCardData(INITIAL_PAGE_LOADING, offset.current);
      } else {
        getCardData(PAGE_LOADING + deleteCount.current, offset.current);
      }
    }
  };
  //regist intersectionObserver to check reaching theend of page
  useEffect(() => {
    const observer = new IntersectionObserver(
      handleIntersectionObserver,
      options,
    );
    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      observer.disconnect(target.current);
    };
  }, [handleIntersectionObserver]);

  return (
    <S.Wrpaper>
      <S.ButtonWrapper>
        <PurpleButton width={92} height={39} fix onClick={deleteRecipientData}>
          삭제하기
        </PurpleButton>
      </S.ButtonWrapper>
      <S.GridWrapper ref={gridWrapperRef}>
        {!initialLoading && (
          <AddMessageCard timerRef={timerRef} deleteTimerRef={deleteTimerRef} />
        )}
        {messageCardData.map((cardData, index) => (
          <MessageCard
            cardData={cardData}
            key={index}
            updateCurrentCardData={updateCurrentCardData}
            deleteCardData={deleteCardData}
          />
        ))}
      </S.GridWrapper>
      {loading ? (
        <S.LoadingIcon
          src={loadingIcon}
          alt="loading"
          $initialLoading={initialLoading}
          onLoad={dataLoad}
        />
      ) : (
        <S.intersectionBar ref={target}></S.intersectionBar>
      )}
      <Toast
        type="load"
        toastVisible={toastVisible}
        updateToastvisible={updateToastvisible}
        toastUpdate={toastUpdate}
        timerRef={timerRef}
        deleteTimerRef={deleteTimerRef}
      ></Toast>
    </S.Wrpaper>
  );
};
