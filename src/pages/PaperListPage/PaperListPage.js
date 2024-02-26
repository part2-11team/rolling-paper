import React from 'react';
import * as S from './PaperListPage.style';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PaperCard from '../../components/PaperCard';
import ArrowButton from '../../components/ArrowButton';

const PaperListPage = () => {
  return (
    <S.Container>
      <PaperSection
        title="인기 롤링 페이퍼 🔥"
        papers="인기"
        isLoading="loadingPoppular"
      />
      <PaperSection
        title="최근에 만든 롤링 페이퍼⭐️"
        papers="최근"
        isLoading="isLoadingRecent"
      />
    </S.Container>
  );
};

export default PaperListPage;

function PaperSection({ title, papers, isLoading }) {
  return (
    <S.Section>
      <S.Title>{title}</S.Title>
      <S.CardContainer>
        <CardList papers={papers} isLoading={isLoading} />
      </S.CardContainer>
    </S.Section>
  );
}

function CardList({ papers }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const slideLeft = () => {
    if (slideIndex <= 0) return;
    setSlideIndex((prev) => prev - 1);
  };
  const slideRight = () => {
    if (slideIndex - 1 >= papers?.results?.length - 4) return;
    setSlideIndex((prev) => prev + 1);
  };

  return (
    <>
      {papers?.results?.map((paper) => (
        <Link key={paper?.id} to={`/post/${paper?.id}`}>
          <PaperCard data={paper} slideIndex={slideIndex} />
        </Link>
      ))}
      {slideIndex > 0 && (
        <S.ArrowButtonContainer $left>
          <ArrowButton type="button" left onClick={slideLeft} />
        </S.ArrowButtonContainer>
      )}
      {slideIndex < papers?.results?.length - 4 && (
        <S.ArrowButtonContainer $right>
          <ArrowButton type="button" right onClick={slideRight} />
        </S.ArrowButtonContainer>
      )}
    </>
  );
}
