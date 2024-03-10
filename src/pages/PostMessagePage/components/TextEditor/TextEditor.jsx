import React, { useRef, useState } from 'react';
import './TextEditor.css';
import * as S from './TextEditor.style';
import colorIcon from '../../../../assets/textEditor/color.png';
import centerIcon from '../../../../assets/textEditor/center.png';
import leftIcon from '../../../../assets/textEditor/left.png';
import rightIcon from '../../../../assets/textEditor/right.png';
import boldIcon from '../../../../assets/textEditor/bold.png';
import italicIcon from '../../../../assets/textEditor/italic.png';
import underLineIcon from '../../../../assets/textEditor/underline.png';
import bulletDotIcon from '../../../../assets/textEditor/bulletDot.png';
import bulletNumberIcon from '../../../../assets/textEditor/bulletNumber.png';
import { COLORS } from '../../../../style/colorPalette';

const TextEditor = ({ onChange, fontFamily }) => {
  const editorRef = useRef(null);
  const [content, setContent] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnder, setIsUnder] = useState(false);

  //진하게
  const handleBoldClick = (e) => {
    e.preventDefault(); // 이벤트 기본 동작 방지
    isBold ? setIsBold(false) : setIsBold(true);
    document.execCommand('bold', false, null);
  };

  //기울기
  const handleItalicClick = (e) => {
    e.preventDefault();
    isItalic ? setIsItalic(false) : setIsItalic(true);
    document.execCommand('italic', false, null);
  };

  //밑줄
  const handleUnderlineClick = (e) => {
    e.preventDefault();
    isUnder ? setIsUnder(false) : setIsUnder(true);
    document.execCommand('underline', false, null);
  };

  //색깔 설정
  const handleTextColorChange = (color) => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const targetDiv = document.querySelector('.target-div');

    if (!targetDiv || !targetDiv.contains(range.commonAncestorContainer)) {
      return; // 특정 부모 요소를 찾지 못하거나 일치하는 요소가 없는 경우
    }

    if (!selection.isCollapsed) {
      // 선택된 텍스트가 있는 경우
      document.execCommand('foreColor', false, color);
    } else {
      // 선택된 텍스트가 없는 경우
      const newColorNode = document.createElement('span');
      newColorNode.style.color = color;
      newColorNode.textContent = '\uFEFF'; // 텍스트 추가

      // 수정된 부분: 새로운 텍스트 노드를 현재 포커스된 위치에 삽입
      range.insertNode(newColorNode);
    }
  };

  //글 정렬
  const handleTextAlign = (alignment) => {
    document.execCommand(
      'justify' + alignment.charAt(0).toUpperCase() + alignment.slice(1),
      false,
      null,
    );
  };

  const handleBulletList = () => {
    const selection = window.getSelection(); //범위 선택
    const range = selection.getRangeAt(0);
    const targetDiv = document.querySelector('.target-div');

    if (!targetDiv || !targetDiv.contains(range.commonAncestorContainer)) {
      return; // 특정 부모 요소를 찾지 못하거나 일치하는 요소가 없는 경우
    } else {
      document.execCommand('insertUnorderedList', false, null);
    }
  };

  const handleBulletOlList = () => {
    const selection = window.getSelection(); //범위 선택
    const range = selection.getRangeAt(0);
    const targetDiv = document.querySelector('.target-div');

    if (!targetDiv || !targetDiv.contains(range.commonAncestorContainer)) {
      return; // 특정 부모 요소를 찾지 못하거나 일치하는 요소가 없는 경우
    } else {
      document.execCommand('insertOrderedList', false, null);
    }
  };

  const handleInput = (e) => {
    const text = e.target.innerHTML;
    const content = editorRef.current.innerHTML;
    setContent(text);
    onChange(content);
  };

  return (
    <S.TextEditorWrapper>
      <S.ToolBarBackground>
        <S.ToolBar>
          <S.ToolBarIcons>
            <S.ToolBarIcon
              src={boldIcon}
              onTouchEnd={handleBoldClick}
              onClick={handleBoldClick}
              style={{
                backgroundColor: isBold ? `${COLORS.GRAY_300}` : ``,
              }}
            ></S.ToolBarIcon>
            <S.ToolBarIcon
              src={italicIcon}
              onTouchEnd={handleItalicClick}
              onClick={handleItalicClick}
              style={{
                backgroundColor: isItalic ? `${COLORS.GRAY_300}` : ``,
              }}
            ></S.ToolBarIcon>
            <S.ToolBarIcon
              src={underLineIcon}
              onTouchEnd={handleUnderlineClick}
              onClick={handleUnderlineClick}
              style={{
                backgroundColor: isUnder ? `${COLORS.GRAY_300}` : ``,
              }}
            ></S.ToolBarIcon>
          </S.ToolBarIcons>
          <S.ToolBarIcons>
            <S.ToolBarIcon
              src={centerIcon}
              onClick={() => handleTextAlign('center')}
            ></S.ToolBarIcon>
            <S.ToolBarIcon
              src={rightIcon}
              onClick={() => handleTextAlign('right')}
            ></S.ToolBarIcon>
            <S.ToolBarIcon
              src={leftIcon}
              onClick={() => handleTextAlign('left')}
            ></S.ToolBarIcon>
          </S.ToolBarIcons>
          <S.ToolBarIcons>
            <S.ToolBarIcon
              src={bulletDotIcon}
              onClick={handleBulletList}
            ></S.ToolBarIcon>
            <S.ToolBarIcon
              src={bulletNumberIcon}
              onClick={handleBulletOlList}
            ></S.ToolBarIcon>
          </S.ToolBarIcons>
          <S.ToolBarIcons>
            <S.ToolBarIconColor
              src={colorIcon}
              type="color"
              onChange={(e) => handleTextColorChange(e.target.value)}
            />
          </S.ToolBarIcons>
        </S.ToolBar>
      </S.ToolBarBackground>
      <S.TextAreaContainer
        className="target-div"
        style={{
          fontFamily: fontFamily,
        }}
      >
        <S.TextArea
          ref={editorRef}
          contentEditable={true}
          suppressContentEditableWarning={true}
          style={{
            minHeight: '100px',
            padding: '10px',
            fontFamily: fontFamily, //폰트 프롭
          }}
          onInput={handleInput}
        ></S.TextArea>
      </S.TextAreaContainer>
      {content.trim() ? (
        ''
      ) : (
        <S.PlaceHolder>I am your reach text editor.</S.PlaceHolder>
      )}
    </S.TextEditorWrapper>
  );
};

export default TextEditor;
