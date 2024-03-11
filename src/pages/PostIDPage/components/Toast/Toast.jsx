import React, { useEffect, useRef } from 'react';
import * as S from './Toast.style';
import close from 'assets/icon/close.svg';
import completed from 'assets/icon/completed.svg';
import warning from 'assets/icon/warning.svg';
import { setTimer } from 'assets/utils/setTimer';
// import { setTimer } from 'assets/utils/setTimer';

export const Toast = ({
  type,
  toastStatus,
  updateToastvisible,
  handleToastUpdate,
}) => {
  const wrapperRef = useRef(null);
  const timerID = useRef(0);

  //toast 생성 애니메이션 함수
  const appearToast = () => {
    if (!wrapperRef.current) {
      return true;
    }
    wrapperRef.current.style.opacity =
      parseFloat(wrapperRef.current.style.opacity) + 0.016;
    if (type === 'load') {
      wrapperRef.current.style.top = `${
        parseFloat(wrapperRef.current.style.top) + 1
      }px`;
    }
    if (type === 'url') {
      wrapperRef.current.style.bottom = `${
        parseFloat(wrapperRef.current.style.bottom) + 1
      }px`;
    }
    return false;
  };

  //toast 대기 애니메이션 함수
  const waitToast = () => {
    if (!wrapperRef.current) {
      return true;
    }
    return false;
  };
  //toast 소멸 애니메이션 함수
  const disappearToast = () => {
    if (!wrapperRef.current) {
      return true;
    }
    wrapperRef.current.style.opacity =
      parseFloat(wrapperRef.current.style.opacity) - 0.016;
    if (type === 'load') {
      wrapperRef.current.style.top = `${
        parseFloat(wrapperRef.current.style.top) - 1
      }px`;
    }
    if (type === 'url') {
      wrapperRef.current.style.bottom = `${
        parseFloat(wrapperRef.current.style.bottom) - 1
      }px`;
    }
    return false;
  };
  //toast x버튼을 눌렀을 때 실행하는 함수 -> 0ms부터 50ms까지 투명도 감소 및 종류에 따른 위치 업데이트 후 타이머 제거
  const handleClickCloseButton = () => {
    timerID.current += 1;
    disappear();
  };
  //toast 상태:appear 함수
  const appear = () => {
    if (type === 'load') {
      wrapperRef.current.style.top = '60px';
    }
    if (type === 'url') {
      wrapperRef.current.style.bottom = '60px';
    }
    wrapperRef.current.style.opacity = '0';
    setTimer(appearToast, wait, 500, timerID);
  };
  //toast 상태:wait 함수
  const wait = () => {
    setTimer(waitToast, disappear, 4000, timerID);
  };

  //toast 상태:disappear 함수
  const disappear = () => {
    setTimer(disappearToast, () => updateToastvisible(false), 500, timerID);
  };

  useEffect(() => {
    if (!toastStatus.visible || !toastStatus.update) return;
    handleToastUpdate(false);
    timerID.current += 1;
    appear();
  }, [toastStatus]);

  const content = {
    load: { src: warning, text: '더 이상 불러올 데이터가 없습니다.' },
    url: { src: completed, text: 'URL이 복사 되었습니다.' },
  };

  return (
    <>
      {toastStatus.visible && (
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
