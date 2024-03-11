import React from 'react';
import * as S from './ErrorPage.style.js';
import ErrorIcon from 'assets/icon/error-icon.png';

const ErrorPage = ({ error = '알 수 없는 에러가 발생하였습니다. 다시 시도해주세요.'}) => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <S.ErrorContainer>
      <S.ErrorIcon src={ErrorIcon} alt='에러 아이콘'/>
      <S.ErrorMessage>{error}</S.ErrorMessage>
      <S.BackButton onClick={goBack}>뒤로가기</S.BackButton>
    </S.ErrorContainer>
  );
};

export default ErrorPage;