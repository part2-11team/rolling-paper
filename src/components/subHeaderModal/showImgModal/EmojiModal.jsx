import React from 'react';
import * as S from './EmojiModal.style';
import Emoji from '../../PaperListEmojiBadge';

const EmojiModal = ({ setModalOpen, value }) => {
  // 모달 끄기
  console.log('here');
  const closeModal = () => {
    setModalOpen(false);
  };
  console.log(value);
  return (
    <S.ModalWrap>
      <S.closeButton onClick={closeModal}>X</S.closeButton>
      <S.emojiWrap>
        {value.length != 0 &&
          value
            .slice(0, 8)
            .map((reaction) => (
              <Emoji
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
