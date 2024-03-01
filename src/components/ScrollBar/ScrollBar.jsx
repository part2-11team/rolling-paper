import React from 'react';
import * as S from './ScrollBar.style';
export const ScrollBar = ({ pageHeight, scrollHeight }) => {
  const height = (window.innerHeight / pageHeight) * window.innerHeight;
  const top = (scrollHeight / pageHeight) * window.innerHeight;
  return (
    <S.ScrollbarTrack>
      <S.scrollbarThumb $height={height} $position={top}></S.scrollbarThumb>
    </S.ScrollbarTrack>
  );
};
