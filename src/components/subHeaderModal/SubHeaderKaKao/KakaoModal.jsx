import React, { useEffect, useRef } from 'react';
import * as S from './KakaoModal.style';

const KakaoModal = ({ setKakaoOpen }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setKakaoOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setKakaoOpen]);

  return (
    <S.ModalWrap ref={modalRef}>
      <h1>카카오 모달</h1>
    </S.ModalWrap>
  );
};

export default KakaoModal;
