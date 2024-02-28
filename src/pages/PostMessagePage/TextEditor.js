import React, { useRef, useState } from 'react';
import './TextEditor.css';
import * as TES from './TextEditor.style';
import colorIcon from './asset/textEditor/color.png';
import centerIcon from './asset/textEditor/center.png';
import leftIcon from './asset/textEditor/left.png';
import rightIcon from './asset/textEditor/right.png';
import boldIcon from './asset/textEditor/bold.png';
import italicIcon from './asset/textEditor/italic.png';
import underLineIcon from './asset/textEditor/underline.png';
import bulletDotIcon from './asset/textEditor/bulletDot.png';
import bulletNumberIcon from './asset/textEditor/bulletNumber.png';

const TextEditor = () => {
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

    if (selection.isCollapsed) {
      document.execCommand('foreColor', false, color); //선택범위가 있을 때
    } else {
      const range = selection.getRangeAt(0);
      const collapsedRange = range.cloneRange();
      collapsedRange.setStart(range.endContainer, range.endOffset);
      selection.removeAllRanges();
      selection.addRange(collapsedRange);
      document.execCommand('foreColor', false, color); //없을 때
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

  const handleInput = (e) => {
    const text = e.target.innerHTML;
    setContent(text);
  };

  return (
    <TES.TextEditorWrapper>
      <TES.ToolBarBackground>
        <TES.ToolBar>
          <TES.ToolBarIcons>
            <TES.ToolBarIcon
              src={boldIcon}
              onClick={handleBoldClick}
            ></TES.ToolBarIcon>
            <TES.ToolBarIcon
              src={italicIcon}
              onClick={handleItalicClick}
            ></TES.ToolBarIcon>
            <TES.ToolBarIcon
              src={underLineIcon}
              onClick={handleUnderlineClick}
            ></TES.ToolBarIcon>
          </TES.ToolBarIcons>
          <TES.ToolBarIcons>
            <TES.ToolBarIcon
              src={centerIcon}
              onClick={() => handleTextAlign('center')}
            ></TES.ToolBarIcon>
            <TES.ToolBarIcon
              src={rightIcon}
              onClick={() => handleTextAlign('right')}
            ></TES.ToolBarIcon>
            <TES.ToolBarIcon
              src={leftIcon}
              onClick={() => handleTextAlign('left')}
            ></TES.ToolBarIcon>
          </TES.ToolBarIcons>
          <TES.ToolBarIcons>
            <TES.ToolBarIcon
              src={bulletDotIcon}
              onClick={handleBulletList}
            ></TES.ToolBarIcon>
            <TES.ToolBarIcon
              src={bulletNumberIcon}
              onClick={handleBulletOlList}
            ></TES.ToolBarIcon>
          </TES.ToolBarIcons>
          <TES.ToolBarIcons>
            <TES.ToolBarIconColor
              src={colorIcon}
              type="color"
              onChange={(e) => handleTextColorChange(e.target.value)}
            />
          </TES.ToolBarIcons>
        </TES.ToolBar>
      </TES.ToolBarBackground>
      <div className="target-div">
        <TES.TextArea
          ref={editorRef}
          contentEditable={true}
          suppressContentEditableWarning={true}
          style={{
            minHeight: '100px',
            padding: '10px',
          }}
          onInput={handleInput}
        ></TES.TextArea>
      </div>
      {content ? (
        ''
      ) : (
        <TES.PlaceHolder>I am your reach text editor.</TES.PlaceHolder>
      )}
    </TES.TextEditorWrapper>
  );
};

export default TextEditor;
