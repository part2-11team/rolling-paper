import React, { useEffect, useRef } from 'react';
import * as S from './KakaoModal.style';

const BASE_URL = 'https://rolling-api.vercel.app/4-11/';

const KakaoModal = ({
  setKakaoOpen,
  setToastOpen,
  value,
  updateToastvisible,
  handleToastUpdate,
}) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setKakaoOpen(false);
    }
  };

  const copyToClipboard = () => {
    const url = `${BASE_URL}recipients/${value}/`;
    navigator.clipboard.writeText(url);
    setKakaoOpen(false);
    setToastOpen(true);
    updateToastvisible(true);
    handleToastUpdate(true);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setKakaoOpen]);
  return (
    <S.ModalWrap ref={modalRef}>
      <S.ShareButton>카카오톡 공유</S.ShareButton>
      <S.ShareButton onClick={copyToClipboard}>URL 공유</S.ShareButton>
    </S.ModalWrap>
  );
};

export default KakaoModal;
