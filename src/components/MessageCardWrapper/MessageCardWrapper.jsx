import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './MessageCardWrapper.style';
import { AddMessageCard } from '../AddMessageCard/AddMessageCard';
import { getMessageCardData } from '../../API';
import loadingIcon from '../../assets/icon/loading.svg';
import { MessageCard } from '../MessageCard/MessageCard';
import { deleteMessageCardData } from '../../API';

const PAGE_LOADING = 12;
const INITIAL_PAGE_LOADING = 11;

export const MessageCardWrapper = React.memo(
  ({ messageCardData, setMessageCardData, setCurrentCardData }) => {
    const [offset, setOffset] = useState(0);
    const [initialLoading, setInitialLoading] = useState(true);
    const [loading, setLoading] = useState(true);
    const target = useRef(null);
    const { userID } = useParams();
    const [dataError, setDataError] = useState(null);
    const [endData, setEndData] = useState(false);
    const [deleteCount, setDeleteCount] = useState(0);
    const [messageCount, setMessageCount] = useState(0);
    const options = {
      threshold: 0.3,
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
        setMessageCardData([...data]);
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

    const deleteCardData = useCallback(async (cardID) => {
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
    });

    const dataLoad = () => {
      if (loading && !dataError) {
        if (initialLoading) {
          InitialGetCardData(INITIAL_PAGE_LOADING, offset);
        } else {
          getCardData(PAGE_LOADING + deleteCount, offset);
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
        {!initialLoading && <AddMessageCard></AddMessageCard>}
        {messageCardData.map((cardData, index) => (
          <MessageCard
            cardData={cardData}
            key={index}
            handleCurrentCardData={setCurrentCardData}
            deleteCardData={deleteCardData}
          ></MessageCard>
        ))}
        {loading ? (
          <S.LoadingIcon
            src={loadingIcon}
            alt="loading"
            $initialLoading={initialLoading}
            $endData={endData}
            onLoad={dataLoad}
          ></S.LoadingIcon>
        ) : (
          !endData && <div ref={target}></div>
        )}
      </S.GridWrapper>
    );
  },
);

MessageCardWrapper.displayName = 'MessageCardWrapper';
