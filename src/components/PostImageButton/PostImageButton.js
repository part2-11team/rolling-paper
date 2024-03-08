import React, { useState } from 'react';
import * as S from './PostImageButton.style';
import SelectImg from '../../assets/icon/background-selected.png';
import sky from '../../assets/images/background-img1.jpeg';
import book from '../../assets/images/background-img2.jpeg';
import mountain from '../../assets/images/background-img3.jpeg';
import ground from '../../assets/images/background-img4.jpeg';

const INITIAL_IMAGE = {
  'https://picsum.photos/id/683/3840/2160': sky,
  'https://picsum.photos/id/24/3840/2160': book,
  'https://picsum.photos/id/599/3840/2160': mountain,
  'https://picsum.photos/id/1058/3840/2160': ground,
};

export const PostSelectImageButton = ({
  imageUrl,
  index,
  clickedIndex,
  handleClickedIndex,
}) => {
  const Selected = index === clickedIndex;
  const [imgURL, setImgURL] = useState(INITIAL_IMAGE[imageUrl]);
  const [loadImage, setLoadImage] = useState(false);
  useState(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImgURL(imageUrl);
      setLoadImage(true);
    };
    return () => {
      img.onload = null;
    };
  }, []);
  return (
    <S.SelectBox>
      <S.SelectBoxImage
        $imageUrl={imgURL}
        $selected={Selected}
        $loadImage={loadImage}
        onClick={() => handleClickedIndex(index)}
      ></S.SelectBoxImage>
      {Selected && (
        <S.SelectedImg src={SelectImg} alt="selected"></S.SelectedImg>
      )}
    </S.SelectBox>
  );
};
