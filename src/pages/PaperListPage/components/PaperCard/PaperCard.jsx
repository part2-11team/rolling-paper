import React from 'react';
import * as S from './PaperCard.style';
import PaperListFromBadge from 'components/Badge/FromBadge/PaperListFromBadge';
import PaperListEmojiBadge from 'components/Badge/EmojiBadge/PaperListEmojiBadge';
import PatternPurple from 'assets/icon/pattern_purple.svg';
import PatternBeige from 'assets/icon/pattern_beige.svg';
import PatternBlue from 'assets/icon/pattern_blue.svg';
import PatternGreen from 'assets/icon/pattern_green.svg';

const BACKGROUND = {
  purple: { color: 'PURPLE_200', pattern: PatternPurple },
  beige: { color: 'ORANGE_200', pattern: PatternBeige },
  blue: { color: 'BLUE_200', pattern: PatternBlue },
  green: { color: 'GREEN_200', pattern: PatternGreen },
};

const PaperCard = ({ data = {}, slideIndex = 0 }) => {
  const {
    name,
    backgroundColor,
    backgroundImageURL,
    messageCount,
    topReactions,
    recentMessages,
  } = data;

  const fromImgUrls = [
    recentMessages?.[0]?.profileImageURL,
    recentMessages?.[1]?.profileImageURL,
    recentMessages?.[2]?.profileImageURL,
  ];

  const hasBackgroundImage = Boolean(backgroundImageURL);

  const reduceText = (text, length) => {
    if (!text) return;
    if (text.length > length) {
      return `${text.slice(0, length)}...`;
    } else {
      return text;
    }
  };
  return (
    <S.Container
      $slideIndex={slideIndex}
      $backgroundColor={BACKGROUND?.[backgroundColor]?.color}
      $backgroundImageURL={backgroundImageURL}
    >
      <S.Wrapper $hasBackgroundImage={hasBackgroundImage}>
        <S.TextContainer>
          <S.Title $hasBackgroundImage={hasBackgroundImage}>
            {reduceText(name, 9)}
          </S.Title>
          <PaperListFromBadge imgUrls={fromImgUrls} count={messageCount} />
          <S.Description $hasBackgroundImage={hasBackgroundImage}>
            <S.Count>{messageCount}</S.Count>명이 작성했어요!
          </S.Description>
        </S.TextContainer>
        <S.Line />
        <PaperListEmojiBadge.Container>
          {topReactions &&
            topReactions?.map((reaction) => (
              <PaperListEmojiBadge
                key={reaction.id}
                emoji={reaction.emoji}
                count={reaction.count}
              />
            ))}
        </PaperListEmojiBadge.Container>
      </S.Wrapper>
      {!backgroundImageURL && (
        <S.Pattern src={BACKGROUND?.[backgroundColor]?.pattern} />
      )}
    </S.Container>
  );
};

export default PaperCard;
