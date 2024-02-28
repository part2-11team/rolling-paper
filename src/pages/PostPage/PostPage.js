import React, { useState } from 'react';
import * as S from './PostPage.style.js';
import Button from '../../components/MainButton';
import SelectedImg from '../../assets/icon/background-selected.png'

const PostPage = () => {
  const [choiceColor, setChoiceColor] = useState(true);
  const [choiceImage, setChoiceImage] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState('');

  //컬러 버튼을 눌렀을때 => 컬러버튼 활성화, 이미지버튼 비활성화
  const handleBackgroundColor = () => {
    setChoiceColor(true);
    setChoiceImage(false);
  }
  
  //이미지 버튼을 눌렀을때 => 컬러버튼 비활성화, 이미지버튼 활성화
  const handleBackgroundImage = () => {
    setChoiceImage(true);
    setChoiceColor(false);
  }

  //포커스 아웃 했을때 공백만 있으면 에러 스테이트 활성화
  const handleBlur = () => {
    if (!value.trim()) {
      return setError(true);
    }
    return setError(false);
  }

  //배경화면 색깔, 배열로 저장
  const Background = ['orange', 'purple', 'blue', 'green'];

  //생성하기 버튼을 눌렀을때 => 아직 구현안함
  const handleMovetoListClick = () => {
    alert("미완성입니다!")
  }

  return (
  <S.PostPage>
    <S.PostPageContainer>
      <S.ToInputDiv>
        <S.PostPageH1>
          To.
        </S.PostPageH1>
        <S.ToInput 
          type="text"
          placeholder="받는 사람 이름을 입력해 주세요" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          onBlur={handleBlur}
          $hasError={error}
        />
        <S.ErrorMessage $hasError={error}>값을 입력해 주세요.</S.ErrorMessage>
      </S.ToInputDiv>
      <S.BackgroundSelectDiv>
        <S.PostPageH1>
          배경화면을 선택해 주세요.
        </S.PostPageH1>
        <S.PostPageH2>
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </S.PostPageH2>
        <S.ButtonContainer>
          <S.ColorImageButton $chosen={choiceColor} onClick={handleBackgroundColor}>컬러</S.ColorImageButton>
          <S.ColorImageButton $chosen={choiceImage} onClick={handleBackgroundImage}>이미지</S.ColorImageButton>
        </S.ButtonContainer>
        <S.ColorSelectorDiv>
          <S.SelectBox $chosen={choiceColor} $selectNth={Background[0]}>
            <S.SelectedImg src={SelectedImg} alt="체크 완료"/>
          </S.SelectBox>
          <S.SelectBox $chosen={choiceColor} $selectNth={Background[1]} />
          <S.SelectBox $chosen={choiceColor} $selectNth={Background[2]} />
          <S.SelectBox $chosen={choiceColor} $selectNth={Background[3]} />
        </S.ColorSelectorDiv>
      </S.BackgroundSelectDiv>
      <Button size="full" onClick={(e) => handleMovetoListClick(e)}>
        생성하기
      </Button>
      </S.PostPageContainer>
  </S.PostPage>
  );
};

export default PostPage;
