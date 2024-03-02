import React, { useState } from 'react';
import * as S from './PostMessagePage.style.js';
import arrowDownIcon from './asset/arrow_down.png';
import arrowUpIcon from './asset/arrow_top.png';
import TextEditor from './TextEditor';
import Man1 from './asset/man1.png';
import Man2 from './asset/man2.png';
import DefaultImg from './asset/defaultImg.png';

export const PostMessagePage = () => {
  const [isOpenRelation, setIsOpen] = useState(false);
  const [isOpenFont, setIsOpenFont] = useState(false);
  const [selectedRelationOption, setSelectedRelationOption] = useState('지인');
  const [selectedFontOption, setSelectedFontOption] = useState('Noto Sans');
  //const [profileImg, setProfileImg] = useState(DefaultImg); 추후 이미지 설정 작업을 위한 코드

  const dropdownRelationOptions = [
    { value: '가족', label: '가족' },
    { value: '지인', label: '지인' },
    { value: '동료', label: '동료' },
    { value: '친구', label: '친구' },
  ];

  const dropdownFontOptions = [
    { value: 'Noto Sans', label: 'Noto Sans' },
    { value: 'Pretendard', label: 'Pretendard' },
    { value: '나눔명조', label: '나눔명조' },
    { value: '나눔손글씨 손편지체', label: '나눔손글씨 손편지체' },
  ];

  const samplePicture = [
    { src: Man1 },
    { src: Man2 },
    { src: Man1 },
    { src: Man2 },
    { src: Man1 },
    { src: Man2 },
    { src: Man1 },
    { src: Man2 },
    { src: Man1 },
    { src: Man2 },
    { src: Man1 },
    { src: Man2 },
  ];

  const handleToggleDropdown = () => {
    setIsOpen(!isOpenRelation); // 드롭다운 열고 닫기 토글
  };

  const handleFontToggleDropdown = () => {
    setIsOpenFont(!isOpenFont); // 드롭다운 열고 닫기 토글
  };

  const handleSelectRelation = (relation) => {
    setSelectedRelationOption(relation);
    setIsOpen(false); // 드롭다운 닫기
  };

  const handleSelectFont = (font) => {
    setSelectedFontOption(font);
    setIsOpenFont(false); // 드롭다운 닫기
  };

  return (
    <S.PostWrapper>
      <S.PostMessageContainer>
        <S.PostMessageContent>
          <S.PostMessageContentHeader>From.</S.PostMessageContentHeader>
          <S.PostMessageInput placeholder="이름을 입력해 주세요."></S.PostMessageInput>
        </S.PostMessageContent>

        <S.PostMessageContent>
          <S.PostMessageContentHeader>프로필 이미지</S.PostMessageContentHeader>

          <S.SelectPictureContain>
            <S.SelectedPicture src={DefaultImg} />

            <S.SelectPictureListContain>
              <S.SelectPictureListInfo>
                프로필 이미지를 선택해주세요!
              </S.SelectPictureListInfo>

              <S.SelectPictureList>
                {samplePicture.slice(0, 10).map((samplePicture, index) => (
                  <S.SelectPictures
                    key={index}
                    src={samplePicture.src}
                  ></S.SelectPictures>
                ))}
              </S.SelectPictureList>
            </S.SelectPictureListContain>
          </S.SelectPictureContain>
        </S.PostMessageContent>

        <S.PostMessageContent>
          <S.PostMessageContentHeader>상대와의 관계</S.PostMessageContentHeader>
          <S.PostMessageDropdownList onClick={handleToggleDropdown}>
            <S.DropdownIcon
              src={isOpenRelation ? arrowUpIcon : arrowDownIcon}
            />

            <S.PostMessageDropdownListButton>
              {selectedRelationOption}
            </S.PostMessageDropdownListButton>
            <S.PostMessageDropdownListContent isOpen={isOpenRelation}>
              {dropdownRelationOptions.map((DropOption) => (
                <S.DropdownListContentOption
                  key={DropOption.value}
                  onClick={() => handleSelectRelation(DropOption.value)}
                >
                  {DropOption.label}
                </S.DropdownListContentOption>
              ))}
            </S.PostMessageDropdownListContent>
          </S.PostMessageDropdownList>
        </S.PostMessageContent>

        <S.PostMessageContent>
          <S.PostMessageContentHeader>
            내용을 입력해 주세요
          </S.PostMessageContentHeader>
          <TextEditor />
        </S.PostMessageContent>

        <S.PostMessageContent>
          <S.PostMessageContentHeader>폰트 선택</S.PostMessageContentHeader>

          <S.PostMessageDropdownList onClick={handleFontToggleDropdown}>
            <S.DropdownIcon src={isOpenFont ? arrowUpIcon : arrowDownIcon} />

            <S.PostMessageDropdownListButton>
              {selectedFontOption}
            </S.PostMessageDropdownListButton>
            <S.PostMessageDropdownListContent isOpen={isOpenFont}>
              {dropdownFontOptions.map((DropOption) => (
                <S.DropdownListContentOption
                  key={DropOption.value}
                  onClick={() => handleSelectFont(DropOption.value)}
                >
                  {DropOption.label}
                </S.DropdownListContentOption>
              ))}
            </S.PostMessageDropdownListContent>
          </S.PostMessageDropdownList>
        </S.PostMessageContent>
      </S.PostMessageContainer>

      <S.SubmitButton>생성하기</S.SubmitButton>
    </S.PostWrapper>
  );
};

export default PostMessagePage;
