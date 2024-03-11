import React from 'react';
import * as S from './TextForm.style';

export const TextForm = ({ type, onChange, onBlur, vailed, onFocus }) => {
  const content = {
    card: {
      placeholder: '이름을 입력해 주세요.',
      title: 'From.',
    },
    user: {
      placeholder: '받는 사람 이름을 입력해주세요',
      title: 'To.',
    },
  };
  return (
    <S.Wrapper>
      <S.ContentHeader>{content[type].title}</S.ContentHeader>
      <S.ContentInput
        placeholder={content[type].placeholder}
        onChange={onChange}
        $vailed={vailed}
        onBlur={onBlur}
        onFocus={onFocus}
      ></S.ContentInput>
      <S.ErrorMessage $vailed={vailed}>값을 입력해주세요.</S.ErrorMessage>
    </S.Wrapper>
  );
};
