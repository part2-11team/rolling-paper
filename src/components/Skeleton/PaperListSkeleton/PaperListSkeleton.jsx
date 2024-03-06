import React from 'react';
import DelayComponent from '../DelayComponent';
import * as S from './PaperListSkeleton.style';

const PaperListSkeleton = () => {
  return (
    <DelayComponent>
      <S.SkeletonContainer>
        <S.SkeletonCard />
        <S.SkeletonCard />
        <S.SkeletonCard />
        <S.SkeletonCard />
      </S.SkeletonContainer>
    </DelayComponent>
  );
};

export default PaperListSkeleton;
