import React from 'react';
import * as S from './PurpleButton.style';

export const PurpleButton = ({
  width,
  height,
  children,
  type,
  fix,
  onClick,
  disable,
  center,
}) => {
  return (
    <S.Button
      $width={width}
      $height={height}
      $type={type}
      $fix={fix}
      onClick={onClick}
      $disable={disable}
      $center={center}
    >
      {children}
    </S.Button>
  );
};
