import React, { useRef } from 'react';
import * as S from './Toast.style';
import close from '../../assets/icon/close.svg';
import completed from '../../assets/icon/completed.svg';
import warning from '../../assets/icon/warning.svg';

export const Toast = ({
  type,
  toastVisible,
  handleToastvisible,
  toastUpdate,
}) => {
  const timerRef = useRef(null);
  const wrapperRef = useRef(null);

  const handleClickCloseButton = () => {
    handleToastvisible(false);
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  if (toastVisible && toastUpdate.current) {
    let time = 0;
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    toastUpdate.current = false;
    const toastTimer = setInterval(() => {
      if (time === 0) {
        timerRef.current = toastTimer;
        wrapperRef.current.style.opacity = 0;
      }
      if (time < 50) {
        wrapperRef.current.style.opacity =
          parseFloat(wrapperRef.current.style.opacity) + 0.016;
      }
      if (time > 450 && time <= 500) {
        wrapperRef.current.style.opacity =
          parseFloat(wrapperRef.current.style.opacity) - 0.016;
      }
      if (time === 500) {
        clearInterval(toastTimer);
        toastUpdate.current = true;
        timerRef.current = null;
        handleToastvisible(false);
      }
      time += 1;
    }, 10);
  }
  const content = {
    load: { src: warning, text: '더 이상 불러올 데이터가 없습니다.' },
    url: { src: completed, text: 'URL이 복사 되었습니다.' },
  };

  return (
    <>
      {toastVisible && (
        <S.ToastWrapper $type={type} ref={wrapperRef}>
          <S.FlexWrapper>
            <S.ToastIcon
              src={content[type].src}
              alt="warning"
              width={24}
              height={24}
            ></S.ToastIcon>
            <S.ToastText>{content[type].text}</S.ToastText>
          </S.FlexWrapper>
          <S.ToastIcon
            src={close}
            alt="close"
            width={24}
            height={24}
            onClick={handleClickCloseButton}
            $close
          ></S.ToastIcon>
        </S.ToastWrapper>
      )}
    </>
  );
};
