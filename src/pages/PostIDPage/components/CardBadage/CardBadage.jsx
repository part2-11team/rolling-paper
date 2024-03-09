import React from 'react';
import * as S from './CardBadage.style';

export const CardBadage = ({ $type }) => {
  return <S.Badge $type={$type}>{$type}</S.Badge>;
};
