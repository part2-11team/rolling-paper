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
} from './PostMessagePage.style';

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
    <>
      <PostMessageContainer>
        <PostMessageContent>
          <PostMessageContentHeader>From.</PostMessageContentHeader>
          <PostMessageInput placeholder="이름을 입력해 주세요."></PostMessageInput>
        </PostMessageContent>
        <PostMessageContent>
          <PostMessageContentHeader>프로필 이미지</PostMessageContentHeader>
        </PostMessageContent>
        <PostMessageContent>
          <PostMessageContentHeader>상대와의 관계</PostMessageContentHeader>
          <PostMessageDropdownList>
            <PostMessageDropdownListButton onClick={handleToggleDropdown}>
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
        </PostMessageContent>
        <PostMessageContent>
          <PostMessageContentHeader>폰트 선택</PostMessageContentHeader>
          <PostMessageDropdownList>
            <PostMessageDropdownListButton onClick={handleFontToggleDropdown}>
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
    </>
  );
};
