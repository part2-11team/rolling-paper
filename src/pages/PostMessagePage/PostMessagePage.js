import React, { useState, useEffect } from 'react';
import * as S from './PostMessagePage.style.js';
import arrowDownIcon from './asset/arrow_down.png';
import arrowUpIcon from './asset/arrow_top.png';
import TextEditor from './TextEditor';
import { COLORS } from '../../style/colorPalette';
import Header from '../../components/Common/Header/Header.jsx';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import sampleImg1 from '../../assets/images-message/1.png';
import sampleImg2 from '../../assets/images-message/2.jpg';
import sampleImg3 from '../../assets/images-message/3.jpg';
import sampleImg4 from '../../assets/images-message/4.jpg';
import sampleImg5 from '../../assets/images-message/5.jpg';
import sampleImg6 from '../../assets/images-message/6.jpg';
import sampleImg7 from '../../assets/images-message/7.jpg';
import sampleImg8 from '../../assets/images-message/8.jpg';
import sampleImg9 from '../../assets/images-message/9.jpg';
import sampleImg10 from '../../assets/images-message/10.jpg';

export const PostMessagePage = () => {
  const [isOpenRelation, setIsOpen] = useState(false);
  const [isOpenFont, setIsOpenFont] = useState(false);
  const [isName, setIsName] = useState();
  const [selectedRelationOption, setSelectedRelationOption] = useState('지인'); //관계
  const [selectedFontOption, setSelectedFontOption] = useState('Noto Sans'); // 폰트
  const [profileImg, setProfileImg] = useState(sampleImg1); //프로필 사진
  const [editorTextContent, setEditorTextContent] = useState(''); //메세지
  const [passValue, setPassValue] = useState(true); //값 확인
  const [name, setName] = useState(''); //이름
  const { userID } = useParams();
  const [samplePicture, setSamplePicture] = useState([
    { src: sampleImg1 },
    { src: sampleImg2 },
    { src: sampleImg3 },
    { src: sampleImg4 },
    { src: sampleImg5 },
    { src: sampleImg6 },
    { src: sampleImg7 },
    { src: sampleImg8 },
    { src: sampleImg9 },
    { src: sampleImg10 },
  ]); // 이미지 URL 배열 상태
  const navigate = useNavigate();
  const [isBlur, setIsBlur] = useState(true);

  const teamId = '4-11';

  const IMAGEURL = 'https://rolling-api.vercel.app/profile-images/';

  const CLIENT_ID = '4c8db1c88e920c2';

  const url = `https://rolling-api.vercel.app/${teamId}/recipients/${userID}/messages/`;

  let data = {
    team: teamId,
    recipientId: userID,
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

  const handleNameError = (e) => {
    const value = e.target.value;
    value.trim() === '' ? setIsName(true) : setIsName(false);
    setName(value);
  };

  const handleSetProfileImg = (src) => {
    setProfileImg(src);
  };

  //이미지그루를 이용한 이미지파일 url 형성api
  const handleImportProfileImg = async (src) => {
    try {
      const file = src.target.files[0]; //파일 선택 처음 꺼
      const formData = new FormData();
      formData.append('image', file);

      const response = await axios.post(
        'https://api.imgur.com/3/image',
        formData,
        {
          headers: {
            Authorization: `Client-ID ${CLIENT_ID}`,
          },
        },
      );

      const imageUrl = response.data.data.link;
      setProfileImg(imageUrl);
    } catch (error) {
      return;
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

  const handleSendData = async () => {
    try {
      const response = await axios.post(url, data);
      navigate(`/post/${userID}`); //페이지 이동
      return { success: true, data: response.data }; //성공시 데이터 출력
    } catch (error) {
      return { success: false, error: error }; //실패시 에러 데이터 출력
    }
  };

  useEffect(() => {
    if (isName === false && editorTextContent.trim() !== '') {
      setPassValue(true);
    } else {
      setPassValue(false);
    }
  }, [isName, editorTextContent]);

  useEffect(() => {
    const loadingImageUrls = async () => {
      try {
        const response = await axios.get(IMAGEURL);
        const imageUrls = response.data.imageUrls;
        setSamplePicture(imageUrls.map((url) => ({ src: url })));
        setProfileImg(imageUrls[0]);
        setIsBlur(false);
      } catch (error) {
        return []; // 실패할 경우 빈 배열 반환
      }
    };

    loadingImageUrls();
  }, []);

  return (
    <>
      <S.NavController>
        <Header
          page="postMeesge"
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
                style={{
                  borderColor: isName
                    ? `${COLORS.ERROR}`
                    : `${COLORS.GRAY_300}`,
                }}
                onChange={handleNameError}
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
              <S.SelectedPicture src={profileImg} alt="선택된 프로필 이미지" />

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
                  {samplePicture.map((samplePicture, index) => (
                    <S.SelectPictures
                      key={index}
                      src={samplePicture.src}
                      alt={`샘플 이미지 no${index + 1}`}
                      width={`56px`}
                      height={`56px`}
                      onClick={() => handleSetProfileImg(samplePicture.src)}
                      style={{
                        filter: !isBlur ? 'blur(0)' : 'blur(3px)',
                      }}
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

        <S.SubmitButton
          disabled={!passValue}
          onClick={() => handleSendData(url, data)}
        >
          생성하기
        </S.SubmitButton>
      </S.PostWrapper>
    </>
  );
};

export default PostMessagePage;
