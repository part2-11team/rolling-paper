import React, { useState } from 'react';
import {
  PostMessageContainer,
  PostMessageContent,
  PostMessageContentHeader,
  PostMessageDropdownList,
  PostMessageDropdownListButton,
  PostMessageDropdownListContent,
  PostMessageInput,
  DropdownListContentOption,
  SelectPictureContain,
  SelectedPicture,
  SelectPictureListContain,
  SelectPictureListInfo,
  SelectPictureList,
  SelectPictures,
  PostWrapper,
  SubmitButton,
  DropdownIcon,
} from './PostMessagePage.style';
import arrowDownIcon from './asset/arrow_down.png';
import arrowUpIcon from './asset/arrow_top.png';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const PostMessagePage = () => {
  const [isOpenRelation, setIsOpen] = useState(false);
  const [isOpenFont, setIsOpenFont] = useState(false);
  const [selectedRelationOption, setSelectedRelationOption] = useState('지인');
  const [selectedFontOption, setSelectedFontOption] = useState('지인');

  const dropdownRelationOptions = [
    { value: '가족', label: '가족' },
    { value: '지인', label: '지인' },
    { value: '동료', label: '동료' },
    { value: '친구', label: '친구' },
  ];

  const dropdownFontOptions = [
    { value: '가족', label: '가족' },
    { value: '지인', label: '지인' },
    { value: '동료', label: '동료' },
    { value: '친구', label: '친구' },
  ];

  const samplePicture = [
    { value: '가족', label: '가족' },
    { value: '지인', label: '지인' },
    { value: '동료', label: '동료' },
    { value: '친구', label: '친구' },
    { value: '친구', label: '친구' },
    { value: '친구', label: '친구' },
    { value: '친구', label: '친구' },
    { value: '친구', label: '친구' },
    { value: '친구', label: '친구' },
    { value: '친구', label: '친구' },
    { value: '친구', label: '친구' },
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
    <PostWrapper>
      <PostMessageContainer>
        <PostMessageContent>
          <PostMessageContentHeader>From.</PostMessageContentHeader>
          <PostMessageInput placeholder="이름을 입력해 주세요."></PostMessageInput>
        </PostMessageContent>

        <PostMessageContent>
          <PostMessageContentHeader>프로필 이미지</PostMessageContentHeader>
          <SelectPictureContain>
            <SelectedPicture />
            <SelectPictureListContain>
              <SelectPictureListInfo>
                프로필 이미지를 선택해주세요!
              </SelectPictureListInfo>
              <SelectPictureList>
                {samplePicture.slice(0, 10).map((samplePicture, index) => (
                  <SelectPictures key={index}>
                    {samplePicture.label}
                  </SelectPictures>
                ))}
              </SelectPictureList>
            </SelectPictureListContain>
          </SelectPictureContain>
        </PostMessageContent>

        <PostMessageContent>
          <PostMessageContentHeader>상대와의 관계</PostMessageContentHeader>
          <PostMessageDropdownList onClick={handleToggleDropdown}>
            <DropdownIcon src={isOpenRelation ? arrowUpIcon : arrowDownIcon} />

            <PostMessageDropdownListButton>
              {selectedRelationOption}
            </PostMessageDropdownListButton>
            <PostMessageDropdownListContent isOpen={isOpenRelation}>
              {dropdownRelationOptions.map((DropOption) => (
                <DropdownListContentOption
                  key={DropOption.value}
                  onClick={() => handleSelectRelation(DropOption.value)}
                >
                  {DropOption.label}
                </DropdownListContentOption>
              ))}
            </PostMessageDropdownListContent>
          </PostMessageDropdownList>
        </PostMessageContent>

        <PostMessageContent>
          <PostMessageContentHeader>
            내용을 입력해 주세요
          </PostMessageContentHeader>
          <ReactQuill style={{ width: '720px', height: '260px' }} />
        </PostMessageContent>

        <PostMessageContent>
          <PostMessageContentHeader>폰트 선택</PostMessageContentHeader>
          <PostMessageDropdownList onClick={handleFontToggleDropdown}>
            <DropdownIcon src={isOpenFont ? arrowUpIcon : arrowDownIcon} />

            <PostMessageDropdownListButton>
              {selectedFontOption}
            </PostMessageDropdownListButton>
            <PostMessageDropdownListContent isOpen={isOpenFont}>
              {dropdownFontOptions.map((DropOption) => (
                <DropdownListContentOption
                  key={DropOption.value}
                  onClick={() => handleSelectFont(DropOption.value)}
                >
                  {DropOption.label}
                </DropdownListContentOption>
              ))}
            </PostMessageDropdownListContent>
          </PostMessageDropdownList>
        </PostMessageContent>
      </PostMessageContainer>

      <SubmitButton>생성하기</SubmitButton>
    </PostWrapper>
  );
};
