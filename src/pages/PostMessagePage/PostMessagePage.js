import React, { useState, useEffect } from 'react';
import * as S from './PostMessagePage.style.js';
import arrowDownIcon from './asset/arrow_down.png';
import arrowUpIcon from './asset/arrow_top.png';
import TextEditor from './TextEditor';
import DefaultImg from './asset/defaultImg.png';
import { COLORS } from '../../style/colorPalette';
import Header from '../../components/Common/Header/Header.jsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const PostMessagePage = () => {
  const [isOpenRelation, setIsOpen] = useState(false);
  const [isOpenFont, setIsOpenFont] = useState(false);
  const [isName, setIsName] = useState();
  const [selectedRelationOption, setSelectedRelationOption] = useState('지인'); //관계
  const [selectedFontOption, setSelectedFontOption] = useState('Noto Sans'); // 폰트
  const [profileImg, setProfileImg] = useState(DefaultImg); //프로필 사진
  const [editorTextContent, setEditorTextContent] = useState(''); //메세지
  const [passValue, setPassValue] = useState(true); //값 확인
  const [name, setName] = useState(''); //이름
  const { userID } = useParams();
  const [samplePicture, setSamplePicture] = useState([]); // 이미지 URL 배열 상태

  const IMAGEURL = 'https://rolling-api.vercel.app/profile-images/';

  const url = `https://rolling-api.vercel.app/0-3/recipients/${userID}/messages/`;

  let data = {
    sender: name,
    profileImageURL: profileImg,
    relationship: selectedRelationOption,
    content: editorTextContent,
    font: selectedFontOption,
  };

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

  const handleImportProfileImg = (src) => {
    const file = src.target.files[0]; //파일 선택 처음 꺼
    if (file) {
      const readerImg = new FileReader(); //이미지 파일 읽는 뭐시기냐 그 이벤트 객체 생성
      readerImg.onloadend = () => {
        setProfileImg(readerImg.result); // 비동기적으로 작동하는 로드가 밑에 파일을 변환하면 그것을 프로필 이미지로
      };
      readerImg.readAsDataURL(file); //선택된 이미지 파일을 URL로 변환
    }
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

    const fetchImageUrls = async () => {
      try {
        const response = await axios.get(IMAGEURL);
        const imageUrls = response.data.imageUrls;
        setSamplePicture(imageUrls.map((url) => ({ src: url })));
      } catch (error) {
        return []; // 실패할 경우 빈 배열 반환
      }
    };
    fetchImageUrls();
  }, [isName, editorTextContent]);

  return (
    <>
      <S.NavController>
        <Header
          page="main"
          style={{
            borderColor: isName ? `${COLORS.ERROR}` : `${COLORS.GRAY_300}`,
          }}
        />
      </S.NavController>
      <S.PostWrapper>
        <S.PostMessageContainer>
          <S.PostMessageContent>
            <S.PostMessageContentHeader>From.</S.PostMessageContentHeader>
            <S.InputContainer>
              <S.PostMessageInput
                placeholder="이름을 입력해 주세요."
                onBlur={handleNameError}
                style={{
                  borderColor: isName
                    ? `${COLORS.ERROR}`
                    : `${COLORS.GRAY_300}`,
                }}
                onChange={handleNameChange}
              ></S.PostMessageInput>
              {isName && (
                <S.PostMessageInputError>
                  값을 입력해주세요.
                </S.PostMessageInputError>
              )}
            </S.InputContainer>
          </S.PostMessageContent>

          <S.PostMessageContent>
            <S.PostMessageContentHeader>
              프로필 이미지
            </S.PostMessageContentHeader>

            <S.SelectPictureContain>
              <S.SelectedPicture src={profileImg} />

              <S.SelectPictureListContain>
                <S.SubContain>
                  <S.SelectPictureListInfo>
                    프로필 이미지를 선택해주세요!
                  </S.SelectPictureListInfo>

                  <S.InputLabel
                    htmlFor="fileInput" //라벨을 이용한 커스텀 버튼
                  >
                    이미지 추가하기
                  </S.InputLabel>
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    onChange={handleImportProfileImg}
                    style={{ display: 'none' }}
                  />
                </S.SubContain>

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
            <S.PostMessageContentHeader>
              상대와의 관계
            </S.PostMessageContentHeader>
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
      </S.PostWrapper>
    </>
  );
};

export default PostMessagePage;
