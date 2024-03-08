import React from 'react';
import * as S from './PaperListEmojiBadge.style';

const PaperListEmojiBadge = ({ emoji, count }) => {
  return (
    <S.Wrapper>
      <span>{emoji}</span>
      <span>{count}</span>
    </S.Wrapper>
  );
};

const Container = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

PaperListEmojiBadge.Container = Container;

export default PaperListEmojiBadge;
