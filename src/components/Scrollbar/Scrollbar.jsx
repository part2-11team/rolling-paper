import React, { useEffect, useRef } from 'react';
import * as S from './Scrollbar.style';
import { setScrollBarHeightPosition } from '../../pages/PostIDPage';

export const Scrollbar = ({ pageRef, scrollWrapperRef }) => {
  const scrollThumbRef = useRef(null);
  const scrollbarStartY = useRef(0);
  const startScrollHeight = useRef(0);
  const drag = useRef(false);

  //drag scrollbar
  const handleMouseDownScroll = (e) => {
    scrollbarStartY.current = e.clientY;
    startScrollHeight.current = pageRef.current.scrollTop;
    drag.current = true;
    scrollThumbRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  };
  useEffect(() => {
    const handleMouseMoveScroll = (e) => {
      if (drag.current) {
        const deltaH = e.clientY - scrollbarStartY.current;
        const pageHeight = pageRef.current.scrollHeight;
        const deltaScrollPosition =
          startScrollHeight.current +
          (deltaH / (window.innerHeight - 76)) * pageHeight;
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

  useEffect(() => {
    const handleResize = () => {
      setScrollBarHeightPosition(pageRef, scrollWrapperRef);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    drag.current = false;
    if (scrollWrapperRef.current) {
      scrollThumbRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    }
  }, [scrollWrapperRef.current && scrollWrapperRef.current.style.height]);

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
