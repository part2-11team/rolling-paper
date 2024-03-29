import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MainPage.style.js';
import Card1 from 'assets/icon/card-img1.png';
import Card2 from 'assets/icon/card-img2.png';
import Card3 from 'assets/icon/card-img3.png';
import Emoji from 'assets/icon/Emoji.png';
import Header from 'components/Header/Header.jsx';
import { PurpleButton } from 'components/PurpleButton/PurpleButton.jsx';

const MainPage = () => {
  const navigate = useNavigate();
  function handleMovetoListClick(e) {
    e.preventDefault();
    navigate('/list');
  }

  return (
    <>
      <Header page="main" />
      <S.MainPageDiv>
        <S.Section>
          <S.DescriptionDiv>
            <S.PointDiv>Point. 01</S.PointDiv>
            <S.MainH1>
              누구나 손쉽게, 온라인
              <S.BrTag /> 롤링 페이퍼를 만들 수 있어요
            </S.MainH1>
            <S.MainH2>로그인 없이 자유롭게 만들어요.</S.MainH2>
          </S.DescriptionDiv>
          <S.ImgContainer>
            <S.ImgBox>
              <S.SingleDiv>
                <S.CoveredImg src={Card1} alt={'카드1이미지'} />
              </S.SingleDiv>
              <S.SingleDiv>
                <S.CoveredImg src={Card2} alt={'카드2이미지'} />
              </S.SingleDiv>
              <S.SingleDiv>
                <S.CoveredImg src={Card3} alt={'카드3이미지'} />
              </S.SingleDiv>
            </S.ImgBox>
          </S.ImgContainer>
        </S.Section>
        <S.Section direction="row-reverse">
          <S.DescriptionDiv>
            <S.PointDiv>Point. 02</S.PointDiv>
            <S.MainH1>
              서로에게 이모지로 감정을
              <S.BrTag /> 표현해보세요
            </S.MainH1>
            <S.MainH2>롤링 페이퍼에 이모지를 추가할 수 있어요.</S.MainH2>
          </S.DescriptionDiv>
          <S.ImgContainer>
            <S.EmojiDiv>
              <S.CoveredImg src={Emoji} alt={'이모지 이미지'} />
            </S.EmojiDiv>
          </S.ImgContainer>
        </S.Section>
        <S.ButtonContainer>
          <PurpleButton width={280} height={56} onClick={handleMovetoListClick}>
            구경해보기
          </PurpleButton>
        </S.ButtonContainer>
      </S.MainPageDiv>
    </>
  );
};

export default MainPage;
