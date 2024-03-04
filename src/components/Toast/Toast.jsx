import React, { useEffect, useRef } from 'react';
import * as S from './Toast.style';
import close from '../../assets/icon/close.svg';
import completed from '../../assets/icon/completed.svg';
import warning from '../../assets/icon/warning.svg';
/* eslint-disable */
export const Toast = ({
  type,
  toastVisible,
  handleToastvisible,
  timerRef,
  fadeTimerRef,
}) => {
  const ToastContent = () => {
    if (type === 'load') {
      return (
        <S.FlexWrapper>
          <S.ToastIcon
            src={warning}
            alt="warning"
            width={24}
            height={24}
          ></S.ToastIcon>
          <S.ToastText>더 이상 불러올 데이터가 없습니다.</S.ToastText>
        </S.FlexWrapper>
      );
    }
    return (
      <S.FlexWrapper>
        <S.ToastIcon
          src={completed}
          alt="completed"
          width={24}
          height={24}
        ></S.ToastIcon>
        <S.ToastText>URL이 복사 되었습니다.</S.ToastText>
      </S.FlexWrapper>
    );
  };
  const wrapperRef = useRef(null);
  const handleClickDeleteButton = () => {
    handleToastvisible(false);
    clearTimeout(timerRef.current);
    clearInterval(fadeTimerRef.current);
  };

  if (toastVisible) {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const closeTimer = setTimeout(() => {
      clearTimeout(timerRef.current);
      const fadeTimer = setInterval(() => {
        wrapperRef.current.style.opacity =
          parseFloat(wrapperRef.current.style.opacity) * 0.94;
      }, 10);
      fadeTimerRef.current = fadeTimer;
      const fadeCloseTimer = setTimeout(() => {
        clearInterval(fadeTimer);
        clearTimeout(fadeCloseTimer);
        timerRef.current = null;
        handleToastvisible(false);
      }, 500);
      timerRef.current = fadeCloseTimer;
    }, 4500);
    timerRef.current = closeTimer;
  }

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.opacity = '0.8';
    }
  }, [timerRef.current]);

  return (
    <>
      {toastVisible && (
        <S.ToastWrapper $type={type} ref={wrapperRef}>
          <ToastContent></ToastContent>
          <S.ToastIcon
            src={close}
            alt="close"
            width={24}
            height={24}
            onClick={handleClickDeleteButton}
            $delete
          ></S.ToastIcon>
        </S.ToastWrapper>
      )}
    </>
  );
};
