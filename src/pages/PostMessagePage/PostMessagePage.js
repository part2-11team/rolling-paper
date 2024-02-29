import React, { useState, useEffect } from 'react';
import * as S from './PostMessagePage.style.js';
import arrowDownIcon from './asset/arrow_down.png';
import arrowUpIcon from './asset/arrow_top.png';
import TextEditor from './TextEditor';
import Man1 from './asset/man1.png';
import Man2 from './asset/man2.png';
import DefaultImg from './asset/defaultImg.png';
import { COLORS } from '../../style/colorPalette';

export const PostMessagePage = () => {
  const [isOpenRelation, setIsOpen] = useState(false);
  const [isOpenFont, setIsOpenFont] = useState(false);
  const [isName, setIsName] = useState();
  const [selectedRelationOption, setSelectedRelationOption] = useState('지인');
  const [selectedFontOption, setSelectedFontOption] = useState('Noto Sans');
  const [profileImg, setProfileImg] = useState(DefaultImg);
  const [editorTextContent, setEditorTextContent] = useState('');
  const [passValue, setPassValue] = useState(true);
  const [currentTime, setCurrentTime] = useState('');
  const [name, setName] = useState('');

  /*
  const [name, setName] = useState('');//이름
  const [currentTime, setCurrentTime] = useState('');//시간

  const handleNameChange = (e) => {
  setName(e.target.value);
  };

  const [currentTime, setCurrentTime] = useState('');

  let MessageRetrieve = {
    id: 'data.id',
    recipientId: 'data.recipient_id',
    sender: name,
    profileImageURL: profileImg,
    relationship: selectedRelationOption,
    content: editorTextContent,
    font: selectedFontOption,
    createdAt: currentTime,
  };

  */

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

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNameError = (e) => {
    const value = e.target.value;
    value.trim() === '' ? setIsName(true) : setIsName(false);
  };

  const handleSetProfileImg = (src) => {
    setProfileImg(src);
  };

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

  const handleSetTime = () => {
    const now = new Date();
    const dateOption = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const time = now.toLocaleDateString('ko-KR', dateOption);
    const timeNow = time.slice(0, -1);
    setCurrentTime(timeNow);
  };

  useEffect(() => {
    if (isName === false && editorTextContent.trim() !== '') {
      setPassValue(true);
    } else {
      setPassValue(false);
    }
  }, [isName, editorTextContent]);

  return (
    <S.PostWrapper>
      <S.PostMessageContainer>
        <S.PostMessageContent>
          <S.PostMessageContentHeader>From.</S.PostMessageContentHeader>
          <div>
            <S.PostMessageInput
              placeholder="이름을 입력해 주세요."
              onBlur={handleNameError}
              style={{
                borderColor: isName ? `${COLORS.ERROR}` : `${COLORS.GRAY_300}`,
              }}
              onChange={handleNameChange}
            ></S.PostMessageInput>
            {isName && (
              <S.PostMessageInputError>
                값을 입력해주세요.
              </S.PostMessageInputError>
            )}
          </div>
        </S.PostMessageContent>

        <S.PostMessageContent>
          <S.PostMessageContentHeader>프로필 이미지</S.PostMessageContentHeader>

          <S.SelectPictureContain>
            <S.SelectedPicture src={profileImg} />

            <S.SelectPictureListContain>
              <S.SelectPictureListInfo>
                프로필 이미지를 선택해주세요!
              </S.SelectPictureListInfo>

              <S.SelectPictureList>
                {samplePicture.slice(0, 10).map((samplePicture, index) => (
                  <S.SelectPictures
                    key={index}
                    src={samplePicture.src}
                    onClick={() => handleSetProfileImg(samplePicture.src)}
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
          <TextEditor
            value={editorTextContent}
            onChange={(content) => setEditorTextContent(content)}
            fontFamily={selectedFontOption}
          />
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

      <S.SubmitButton disabled={!passValue} onClick={handleSetTime}>
        생성하기
      </S.SubmitButton>
      <p>
        {currentTime}
        {name}
      </p>
    </S.PostWrapper>
  );
};

export default PostMessagePage;
