import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './MessageCardWrapper.style';
import { AddMessageCard } from '../AddMessageCard/AddMessageCard';
import { getMessageCardData, deleteMessageCardData } from '../../API';
import loadingIcon from '../../assets/icon/loading.svg';
import { MessageCard } from '../MessageCard/MessageCard';
const PAGE_LOADING = 12;
const INITIAL_PAGE_LOADING = 11;

export const MessageCardWrapper = ({
  messageCardData,
  setMessageCardData,
  setCurrentCardData,
  dataError,
  setDataError,
}) => {
  const { userID } = useParams();
  const offset = useRef(0);
  const target = useRef(null);
  const endData = useRef(false);
  const deleteCount = useRef(0);
  const messageCount = useRef(0);
  const [loading, setLoading] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);
  const options = {
    threshold: 0.3,
  };
  const handleScroll = (entry) => {
    if (entry[0].isIntersecting && !initialLoading) {
      setLoading(true);
      offset.current = messageCardData.length;
    }
  };

  const InitialGetCardData = async (limit = null, offset = null) => {
    const { data, count, error } = await getMessageCardData(
      userID,
      limit,
      offset,
    );
    if (!error) {
      setMessageCardData([...data]);
      messageCount.current = count;
      if (data.length < INITIAL_PAGE_LOADING) {
        endData.current = true;
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
      if (count > messageCount.current) {
        const updateCount = count - messageCount.current;
        const { data: updateData, error: updateError } =
          await getMessageCardData(userID, updateCount, 0);
        if (!updateError) {
          setMessageCardData((prevCardData) => [
            ...updateData,
            ...prevCardData,
          ]);
          messageCount.current = count;
        } else {
          setDataError(updateError);
        }
        const restData = data.slice(updateCount);
        setMessageCardData((prevCardData) => [...prevCardData, ...restData]);
      } else {
        setMessageCardData((prev) => [...prev, ...data]);
      }

      if (data.length < PAGE_LOADING) {
        endData.current = true;
      }
    } else {
      if (error) {
        setDataError(error);
      }
    }
    setLoading(false);
    deleteCount.current = 0;
  };

  const deleteCardData = useCallback(async (cardID) => {
    const { error } = await deleteMessageCardData(cardID);
    if (error) {
      setDataError(error);
    } else {
      offset.current -= 1;
      deleteCount.current = (deleteCount.current + 1) % 3;
      setMessageCardData((prevCardData) =>
        prevCardData.filter((cardData) => cardData.id !== cardID),
      );
      messageCount.current -= 1;
    }
  }, []);

  const dataLoad = () => {
    if (loading && !dataError) {
      if (initialLoading) {
        InitialGetCardData(INITIAL_PAGE_LOADING, offset.current);
      } else {
        getCardData(PAGE_LOADING + deleteCount.current, offset.current);
      }
    }
  };
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
    <S.GridWrapper>
      {!initialLoading && <AddMessageCard />}
      {messageCardData.map((cardData, index) => (
        <MessageCard
          cardData={cardData}
          key={index}
          handleCurrentCardData={setCurrentCardData}
          deleteCardData={deleteCardData}
        />
      ))}
      {loading && !endData.current ? (
        <S.LoadingIcon
          src={loadingIcon}
          alt="loading"
          $initialLoading={initialLoading}
          onLoad={dataLoad}
        />
      ) : (
        !endData.current && <div ref={target}></div>
      )}
    </S.GridWrapper>
  );
};
