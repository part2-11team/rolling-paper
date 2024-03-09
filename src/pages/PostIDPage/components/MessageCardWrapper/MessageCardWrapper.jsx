import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './MessageCardWrapper.style';
import { AddMessageCard } from '../AddMessageCard/AddMessageCard';
import {
  getMessageCardData,
  deleteMessageCardData,
  deleteRecipient,
} from '../../../../API';
import loadingIcon from '../../../../assets/icon/loading.svg';
import { MessageCard } from '../MessageCard/MessageCard';
import { Toast } from '../Toast/Toast';
import { PurpleButton } from '../../../../components/Common/PurpleButton/PurpleButton';
const PAGE_LOADING = 12;
const INITIAL_PAGE_LOADING = 11;
const options = {
  threshold: 0.5,
};

export const MessageCardWrapper = ({
  userData,
  messageCardData,
  updateMessageCardData,
  updateCurrentCardData,
  setDataError,
  pageRef,
  decreaseCardCount,
  updateCardCount,
}) => {
  const { userID } = useParams();
  const gridWrapperRef = useRef(null);
  const target = useRef(null);
  const deleteCount = useRef(0);
  const toastUpdate = useRef(false);
  const [loading, setLoading] = useState({ type: 'initial', status: true });
  const [toastVisible, setToastVisible] = useState(false);
  const navigate = useNavigate();

  const updateToastvisible = useCallback((value) => {
    setToastVisible(value);
  }, []);
  //update loading state to load data when reach the end of page
  const handleIntersectionObserver = (entry) => {
    if (entry[0].isIntersecting && !loading.status) {
      setLoading((prevLoad) => ({ ...prevLoad, status: true }));
    }
  };
  const deleteRecipientData = async () => {
    const { error } = await deleteRecipient(userID);
    if (error) {
      setDataError(error);
      return;
    }
    alert('삭제되었습니다');
    navigate('/list');
  };

  //load cardData at initial rendering
  const initialGetCardData = async (limit = null, offset = null) => {
    const { data, error } = await getMessageCardData(userID, limit, offset);
    if (!error) {
      updateMessageCardData([...data]);
    } else {
      if (error) {
        setDataError(error);
      }
    }
    setLoading({ type: 'default', status: false });
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
    if (newMessageCount > userData.messageCount) {
      const updateCount = newMessageCount - userData.messageCount;
      const { data: updateData, error: updateError } = await getMessageCardData(
        userID,
        updateCount,
        0,
      );
      if (updateError) {
        setDataError(updateError);
        return;
      }
      updateCardCount(newMessageCount);
      const restData = data.slice(updateCount);
      updateMessageCardData((prevCardData) => [
        ...updateData,
        ...prevCardData,
        ...restData,
      ]);
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
      deleteCount.current = (deleteCount.current + 1) % 3;
      updateMessageCardData((prevCardData) =>
        prevCardData.filter((cardData) => cardData.id !== cardID),
      );
      decreaseCardCount();
    }
  }, []);
  //data load function, loaded loading Icon
  const dataLoad = () => {
    if (loading) {
      if (loading.type === 'initial') {
        initialGetCardData(INITIAL_PAGE_LOADING, messageCardData.length);
      } else {
        getCardData(PAGE_LOADING + deleteCount.current, messageCardData.length);
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
        <AddMessageCard />
        {messageCardData.map((cardData, index) => (
          <MessageCard
            cardData={cardData}
            key={index}
            updateCurrentCardData={updateCurrentCardData}
            deleteCardData={deleteCardData}
          />
        ))}
      </S.GridWrapper>
      {loading.status ? (
        <S.LoadingIcon
          src={loadingIcon}
          alt="loading"
          $loadingType={loading.type}
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
      ></Toast>
    </S.Wrpaper>
  );
};
