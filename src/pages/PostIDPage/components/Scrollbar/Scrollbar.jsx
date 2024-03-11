import React, { useEffect, useRef } from 'react';
import * as S from './Scrollbar.style';

export const Scrollbar = ({ pageRef, scrollWrapperRef }) => {
  const scrollThumbRef = useRef(null);
  const scrollbarStartY = useRef(0);
  const startScrollHeight = useRef(0);
  const drag = useRef(false);

  //스크롤바 드래그 함수 -> drag상태 업데이트 및 색상 변경
  const handleMouseDownScroll = (e) => {
    scrollbarStartY.current = e.clientY;
    startScrollHeight.current = pageRef.current.scrollTop;
    drag.current = true;
    scrollThumbRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
  };
  //드래그상태에서 마우스를 움직이고 놓았을 때 처리할 함수 등록 -> 움직인 위치를 계산하여 스크롤바 위치 업데이트(드래그 위치가 화면 전체에 적용하기 위한 함수)
  useEffect(() => {
    const handleMouseMoveScroll = (e) => {
      if (drag.current) {
        const deltaH = e.clientY - scrollbarStartY.current;
        const pageHeight = pageRef.current.scrollHeight;
        const deltaScrollPosition =
          startScrollHeight.current +
          (deltaH / (window.innerHeight - 65)) * pageHeight;
        pageRef.current.scrollTop = deltaScrollPosition;
      }
    };
    const handleMouseUpScroll = () => {
      drag.current = false;
      scrollThumbRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    };
    document.addEventListener('mousemove', handleMouseMoveScroll);
    document.addEventListener('mouseup', handleMouseUpScroll);
    return () => {
      document.removeEventListener('mousemove', handleMouseMoveScroll);
      document.removeEventListener('mouseup', handleMouseUpScroll);
    };
  }, []);

  return (
    <S.ScrollbarTrack>
      <S.scrollbarWrapper
        ref={scrollWrapperRef}
        onMouseDown={handleMouseDownScroll}
      >
        <S.scrollbarThumb ref={scrollThumbRef}></S.scrollbarThumb>
      </S.scrollbarWrapper>
    </S.ScrollbarTrack>
  );
};
