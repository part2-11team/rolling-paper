import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './PostPage.style.js';
import Button from '../../components/MainButton';
import SelectImg from '../../assets/icon/background-selected.png';
import Header from '../../components/Common/Header/Header';
import { PostSelectImageButton } from '../../components/PostImageButton/PostImageButton.js';
import axios from 'axios';

const PostPage = () => {
  const navigate = useNavigate();
  const [clickedIndex, setClickedIndex] = useState(0);
  const [backgroundValue, setBackgroundValue] = useState('컬러');
  const [error, setError] = useState(false);
  const [value, setValue] = useState('');
  const [imageUrls, setImageUrls] = useState([]);

  const COLOR_VALUE = ['beige', 'purple', 'blue', 'green'];

  const COLOR_OR_IMAGE = ['컬러', '이미지'];

  //배경화면 이미지 데이터 받아오기
  useEffect(() => {
    const fetchBackgroundImages = async () => {
      try {
        const response = await axios.get(
          'https://rolling-api.vercel.app/background-images/',
        );
        // 이미지 배열을 객체 배열로 변환
        const url = response.data.imageUrls;
        setImageUrls(url);
      } catch (error) {
        navigate(`/error`);
      }
    };

    fetchBackgroundImages();
  }, []);

  //클릭한 인덱스 몇번째인지 저장
  const handleClickedIndex = (index) => {
    setClickedIndex(index);
  };

  //컬러인지 이미지인지 클릭한 값 저장
  const handleBackgroundValue = (value) => {
    setBackgroundValue(value);
  };

  //포커스 아웃 했을때 공백만 있으면 에러 스테이트 활성화
  const handleBlur = () => {
    if (!value.trim()) {
      return setError(true);
    }
    return setError(false);
  };

  //완성된 폼 데이터 전송
  const handleMovetoListClick = async (e) => {
    e.preventDefault();
    const url = 'https://rolling-api.vercel.app/4-11/recipients/';
    const data = {
      name: value.trim(),
      backgroundColor:
        backgroundValue === '컬러' ? COLOR_VALUE[clickedIndex] : 'beige',
      backgroundImageURL:
        backgroundValue === '이미지' ? imageUrls[clickedIndex] : null,
    };

    try {
      const response = await axios.post(url, data);
      navigate(`/post/${response.data.id}`);
    } catch (error) {
      navigate(`/error`);
    }
  };

  return (
    <>
      <S.HeaderWrapper>
        <Header page="post" />
      </S.HeaderWrapper>
      <S.PostPage>
        <S.PostPageForm>
          <S.ToInputWrapper>
            <S.PostPageH1>To.</S.PostPageH1>
            <S.ToInput
              id="recipientName"
              type="text"
              placeholder="받는 사람 이름을 입력해 주세요"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={handleBlur}
              $hasError={error}
            />
            <S.ErrorMessage $hasError={error}>
              값을 입력해 주세요.
            </S.ErrorMessage>
          </S.ToInputWrapper>
          <S.BackgroundSelectWrapper>
            <S.PostPageH1>배경화면을 선택해 주세요.</S.PostPageH1>
            <S.PostPageH2>
              컬러를 선택하거나, 이미지를 선택할 수 있습니다.
            </S.PostPageH2>
            <S.ButtonContainer>
              {COLOR_OR_IMAGE.map((value, index) => (
                <S.ColorImageButton
                  key={index}
                  onClick={() => handleBackgroundValue(value)}
                  $selectedValue={backgroundValue}
                  $value={value}
                >
                  {value}
                </S.ColorImageButton>
              ))}
            </S.ButtonContainer>
            <S.ColorSelectorDiv>
              {backgroundValue === '컬러'
                ? COLOR_VALUE.map((color, index) => (
                    <S.ColorSelectBox
                      $color={color}
                      key={index}
                      onClick={() => handleClickedIndex(index)}
                    >
                      <S.SelectedImg
                        src={SelectImg}
                        alt="selected"
                        key={index}
                        $value={index}
                        $clickedIndex={clickedIndex}
                      ></S.SelectedImg>
                    </S.ColorSelectBox>
                  ))
                : imageUrls.map((imageUrl, index) => (
                    <PostSelectImageButton
                      key={index}
                      imageUrl={imageUrl}
                      index={index}
                      clickedIndex={clickedIndex}
                      handleClickedIndex={handleClickedIndex}
                    ></PostSelectImageButton>
                  ))}
            </S.ColorSelectorDiv>
          </S.BackgroundSelectWrapper>
          <Button
            disabled={!value}
            size="full"
            onClick={(e) => handleMovetoListClick(e)}
          >
            생성하기
          </Button>
        </S.PostPageForm>
      </S.PostPage>
    </>
  );
};

export default PostPage;
