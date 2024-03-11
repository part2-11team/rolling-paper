import React, { useRef, useEffect } from 'react';
import * as S from './EmojiModal.style';
import PaperListEmojiBadge from 'components/Badge/EmojiBadge/PaperListEmojiBadge';

const EmojiModal = ({ setModalOpen, value }) => {
  const modalRef = useRef(null);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.ModalWrap ref={modalRef}>
      <S.closeButton onClick={closeModal}>X</S.closeButton>
      <S.emojiWrap>
        {value.length !== 0 &&
          value
            .slice(0, 8)
            .map((reaction) => (
              <PaperListEmojiBadge
                key={reaction.id}
                emoji={reaction.emoji}
                count={reaction.count}
              />
            ))}
      </S.emojiWrap>
    </S.ModalWrap>
  );
};

export default EmojiModal;
