import React, { useState, useEffect, useRef } from 'react';
import * as S from './Toast.style';
import close from 'assets/icon/close.svg';
import completed from 'assets/icon/completed.svg';
import warning from 'assets/icon/warning.svg';
// import { setTimer } from 'assets/utils/setTimer';

export const Toast = ({
  type,
  toastStatus,
  updateToastvisible,
  // handleToastUpdate,
}) => {
  const [toastState, setToastState] = useState('hide');

  const wrapperRef = useRef(null);
  const timerID = useRef(0);
  //toast 생성 애니메이션 함수
  // const appearToast = () => {
  //   if (!wrapperRef.current) {
  //     return true;
  //   }
  //   wrapperRef.current.style.opacity =
  //     parseFloat(wrapperRef.current.style.opacity) + 0.016;
  //   if (type === 'load') {
  //     wrapperRef.current.style.top = `${
  //       parseFloat(wrapperRef.current.style.top) + 1
  //     }px`;
  //   }
  //   if (type === 'url') {
  //     wrapperRef.current.style.bottom = `${
  //       parseFloat(wrapperRef.current.style.bottom) + 1
  //     }px`;
  //   }
  //   return false;
  // };
  // //toast 대기 애니메이션 함수
  // const waitToast = () => {
  //   if (!wrapperRef.current) {
  //     return true;
  //   }
  //   return false;
  // };
  // //toast 소멸 애니메이션 함수
  // const disappearToast = () => {
  //   if (!wrapperRef.current) {
  //     return true;
  //   }
  //   wrapperRef.current.style.opacity =
  //     parseFloat(wrapperRef.current.style.opacity) - 0.016;
  //   if (type === 'load') {
  //     wrapperRef.current.style.top = `${
  //       parseFloat(wrapperRef.current.style.top) - 1
  //     }px`;
  //   }
  //   if (type === 'url') {
  //     wrapperRef.current.style.bottom = `${
  //       parseFloat(wrapperRef.current.style.bottom) - 1
  //     }px`;
  //   }
  //   return false;
  // };
  //toast x버튼을 눌렀을 때 실행하는 함수 -> 0ms부터 50ms까지 투명도 감소 및 종류에 따른 위치 업데이트 후 타이머 제거
  const handleClickCloseButton = () => {
    timerID.current += 1;
    // const timeCallback = [[500, disappearToast]];
    // setTimer(timeCallback, timerID, updateToastvisible);
  };


  const appear = () => {
    if (!wrapperRef.current) {
      return true;
    }

      if (type === 'load') {
        wrapperRef.current.style.top = '60px';
      }
      if (type === 'url') {
        wrapperRef.current.style.bottom = '60px';
      }
      wrapperRef.current.style.opacity = '0';
    const animationInterval = setInterval(() => {
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
    }, 10);

    setTimeout(() => {
      clearInterval(animationInterval);
      setToastState('show')
    }, 500)
  }
    
  const disappear = () => {
    if (!wrapperRef.current) {
      return true;
    }
    const animationInterval = setInterval(() => {
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
  }, 10);
    setTimeout(() => {
      clearInterval(animationInterval);
      updateToastvisible(false);
      setToastState('hide');
    }, 500)
  }

  useEffect(() => {
    if(!toastStatus.visible && !toastStatus.update) return;

    switch (true) {
      case toastState === 'hide':
        return appear();
      case toastState === 'show':
        setTimeout(() => {
          disappear();
        }, 4000)
        return;
      default:
        return;
    }
  }, [toastState, toastStatus.visible, toastStatus.update])

  // //toast가 생성(애니메이션)되는 부분 -> 0ms 부터 500ms까지 투명도가 증가하고 종류에 따라서 위치를 이동시킨 후, 4500ms부터 5000ms까지 투명도가 감소하고 위치를 이동시킨 후 타이머를 삭제하는 코드
  // useEffect(() => {
  //   if (toastStatus.visible && toastStatus.update) {
  //     handleToastUpdate(false);
  //     timerID.current += 1;
  //     if (type === 'load') {
  //       wrapperRef.current.style.top = '60px';
  //     }
  //     if (type === 'url') {
  //       wrapperRef.current.style.bottom = '60px';
  //     }
  //     wrapperRef.current.style.opacity = '0';
  //     const timeCallback = [
  //       [500, appearToast],
  //       [4000, waitToast],
  //       [500, disappearToast],
  //     ];
  //     setTimer(timeCallback, timerID, updateToastvisible);
  //   }
  // }, [toastStatus]);
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
