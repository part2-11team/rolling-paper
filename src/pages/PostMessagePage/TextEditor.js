import React, { useRef, useState } from 'react';
import './TextEditor.css';
import * as S from './TextEditor.style';
import colorIcon from './asset/textEditor/color.png';
import centerIcon from './asset/textEditor/center.png';
import leftIcon from './asset/textEditor/left.png';
import rightIcon from './asset/textEditor/right.png';
import boldIcon from './asset/textEditor/bold.png';
import italicIcon from './asset/textEditor/italic.png';
import underLineIcon from './asset/textEditor/underline.png';
import bulletDotIcon from './asset/textEditor/bulletDot.png';
import bulletNumberIcon from './asset/textEditor/bulletNumber.png';

const TextEditor = ({ onChange, fontFamily }) => {
  const editorRef = useRef(null);
  const [content, setContent] = useState('');

  //진하게
  const handleBoldClick = () => {
    document.execCommand('bold', false, null);
  };

  //기울기
  const handleItalicClick = () => {
    document.execCommand('italic', false, null);
  };

  //밑줄
  const handleUnderlineClick = () => {
    document.execCommand('underline', false, null);
  };

  //색깔 설정
  const handleTextColorChange = (color) => {
    const selection = window.getSelection();

    if (!selection) {
      return; // 선택된 텍스트가 없을 때
    }

    const range = selection.getRangeAt(0);
    let targetDiv = range.commonAncestorContainer; // 특정 부모 요소 찾기, 일정 영역에만 적용하기 위함.

    // 특정 부모 요소를 찾음
    while (
      targetDiv &&
      (targetDiv.nodeType !== Node.ELEMENT_NODE ||
        !targetDiv.classList.contains('target-div'))
    ) {
      targetDiv = targetDiv.parentNode;
    }

    if (!targetDiv) {
      return; // 특정 부모 요소를 찾지 못한 경우
    }

    const collapsedRange = range.cloneRange();

    if (!collapsedRange.collapsed) {
      // 선택된 텍스트가 있는 경우
      collapsedRange.setStart(range.endContainer, range.endOffset);
      selection.removeAllRanges();
      selection.addRange(collapsedRange);
    } else {
      // 커서 위치에 텍스트가 없는 경우
      const newNode = document.createElement('span');
      newNode.style.color = color;
      newNode.appendChild(document.createTextNode('\uFEFF')); // Zero-width space character
      range.insertNode(newNode);
      range.setStartAfter(newNode);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }

    document.execCommand('foreColor', false, color); // 텍스트 색상 변경
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
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0); //범위 영역 선택 시작
      let targetDiv = range.commonAncestorContainer; //특정 부모 요소 찾기, 일정 영역에만 적용하기 위함.
      while (
        targetDiv &&
        (targetDiv.nodeType !== Node.ELEMENT_NODE ||
          !targetDiv.classList.contains('target-div'))
      ) {
        targetDiv = targetDiv.parentNode;
      }
      // 찾은 부모 요소의 특정 클래스 확인
      if (targetDiv && targetDiv.classList.contains('target-div')) {
        const isTextOnly = Array.from(range.cloneContents().childNodes).every(
          (node) => node.nodeType === Node.TEXT_NODE,
        ); // 텍스트만 있는지 확인하기
        if (isTextOnly) {
          //확인 후 ul,li 생성 및  반복
          const ulElement = document.createElement('ul');
          const fragment = document.createDocumentFragment();
          Array.from(range.cloneContents().childNodes).forEach((child) => {
            const liElement = document.createElement('li');
            liElement.appendChild(child.cloneNode(true));
            fragment.appendChild(liElement);
          });
          range.deleteContents(); // 선택한 범위의 컨텐츠 삭제 => 이동을 위한 삭제
          ulElement.appendChild(fragment); // ul에 li 추가
          range.insertNode(ulElement); // 완성된 ul 삽입
        }
      }
    }
  };

  const handleBulletOlList = () => {
    const selection = window.getSelection(); //범위 선택
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0); //범위 영역 선택 시작
      let targetDiv = range.commonAncestorContainer; //특정 부모 요소 찾기, 일정 영역에만 적용하기 위함.
      while (
        targetDiv &&
        (targetDiv.nodeType !== Node.ELEMENT_NODE ||
          !targetDiv.classList.contains('target-div'))
      ) {
        targetDiv = targetDiv.parentNode;
      }
      // 찾은 부모 요소의 특정 클래스 확인
      if (targetDiv && targetDiv.classList.contains('target-div')) {
        const isTextOnly = Array.from(range.cloneContents().childNodes).every(
          (node) => node.nodeType === Node.TEXT_NODE,
        ); // 텍스트만 있는지 확인하기
        if (isTextOnly) {
          //확인 후 ol,li 생성 및  반복
          const ulElement = document.createElement('ol');
          const fragment = document.createDocumentFragment();
          Array.from(range.cloneContents().childNodes).forEach((child) => {
            const liElement = document.createElement('li');
            liElement.appendChild(child.cloneNode(true));
            fragment.appendChild(liElement);
          });
          range.deleteContents(); // 선택한 범위의 컨텐츠 삭제 => 이동을 위한 삭제
          ulElement.appendChild(fragment); // ol에 li 추가
          range.insertNode(ulElement); // 완성된 ol 삽입
        }
      }
    }
  };

  //고민중인 부분
  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault(); // 기본 동작인 줄 바꿈을 막음
  //     document.execCommand('insertHTML', false, '<br><br>'); // 줄 바꿈 처리
  //   }
  // };

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
              onClick={handleBoldClick}
            ></S.ToolBarIcon>
            <S.ToolBarIcon
              src={italicIcon}
              onClick={handleItalicClick}
            ></S.ToolBarIcon>
            <S.ToolBarIcon
              src={underLineIcon}
              onClick={handleUnderlineClick}
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
