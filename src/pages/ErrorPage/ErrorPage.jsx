import React from 'react';
import * as S from './ErrorPage.style.js';
import ErrorIcon from 'assets/icon/error-icon.png';

const ErrorPage = ({ error }) => {
  const goBack = () => {
    window.history.back();
  };
  console.log(error);

  let errorMessage = '';
  switch (error) {
    case 404:
      errorMessage =
        '죄송합니다. 요청하신 페이지를 찾을 수 없습니다. 다시 시도해주세요.';
      break;
    case 400:
      errorMessage =
        '죄송합니다. 요청하신 URL을 찾을 수 없습니다. 다시 시도해주세요.';
      break;
    case 500:
      errorMessage = '서버에 문제가 발생했습니다. 다시 시도해주세요.';
      break;
    case 502:
      errorMessage = '많은 요청이 발생하였습니다. 잠시후에 다시 시도해주세요.';
      break;
    case 503:
      errorMessage = '네트워크에 문제가 발생했습니다. 다시 시도해주세요.';
      break;
    default:
      errorMessage = '알 수 없는 오류가 발생했습니다. 다시 시도해주세요.';
  }

  return (
    <S.ErrorContainer>
      <S.ErrorIcon src={ErrorIcon} alt="에러 아이콘" />
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      <S.BackButton onClick={goBack}>뒤로가기</S.BackButton>
    </S.ErrorContainer>
  );
};

export default ErrorPage;
