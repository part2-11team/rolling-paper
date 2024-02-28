import React, { useRef, useState } from 'react';
import './TextEditor.css';
import {
  TextArea,
  TextEditorWrapper,
  ToolBar,
  ToolBarBackground,
  ToolBarIcon,
  ToolBarIconColor,
  ToolBarIcons,
  PlaceHolder,
} from './TextEditor.style';
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
      document.execCommand('foreColor', false, color);
    } else {
      const range = selection.getRangeAt(0);
      const collapsedRange = range.cloneRange();
      collapsedRange.setStart(range.endContainer, range.endOffset);
      selection.removeAllRanges();
      selection.addRange(collapsedRange);
      document.execCommand('foreColor', false, color);
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
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const isTextOnly = Array.from(range.cloneContents().childNodes).every(
        (node) => node.nodeType === Node.TEXT_NODE,
      );
      if (isTextOnly) {
        const ulElement = document.createElement('ul');
        const fragment = document.createDocumentFragment();
        Array.from(range.cloneContents().childNodes).forEach((child) => {
          const liElement = document.createElement('li');
          liElement.appendChild(child.cloneNode(true));
          fragment.appendChild(liElement);
        });
        range.deleteContents(); // 선택한 범위의 컨텐츠 삭제
        ulElement.appendChild(fragment); // <li> 요소들을 <ul> 요소에 추가
        range.insertNode(ulElement); // 새로운 <ul> 요소를 삽입하여 선택한 범위에 넣기
      }
    }
  };
  const handleBulletOlList = () => {
    const selection2 = window.getSelection();
    if (selection2.rangeCount > 0) {
      const range = selection2.getRangeAt(0);
      const isTextOnly = Array.from(range.cloneContents().childNodes).every(
        (node) => node.nodeType === Node.TEXT_NODE,
      );
      if (isTextOnly) {
        const ulElement = document.createElement('ol');
        const fragment = document.createDocumentFragment();
        Array.from(range.cloneContents().childNodes).forEach((child) => {
          const liElement = document.createElement('li');
          liElement.appendChild(child.cloneNode(true));
          fragment.appendChild(liElement);
        });
        range.deleteContents(); // 선택한 범위의 컨텐츠 삭제
        ulElement.appendChild(fragment); // <li> 요소들을 <ul> 요소에 추가
        range.insertNode(ulElement); // 새로운 <ul> 요소를 삽입하여 선택한 범위에 넣기
      }
    }
  };

  const handleInput = (e) => {
    const text = e.target.innerHTML;
    setContent(text);
  };

  return (
    <TextEditorWrapper>
      <ToolBarBackground>
        <ToolBar>
          <ToolBarIcons>
            <ToolBarIcon src={boldIcon} onClick={handleBoldClick}></ToolBarIcon>
            <ToolBarIcon
              src={italicIcon}
              onClick={handleItalicClick}
            ></ToolBarIcon>
            <ToolBarIcon
              src={underLineIcon}
              onClick={handleUnderlineClick}
            ></ToolBarIcon>
          </ToolBarIcons>
          <ToolBarIcons>
            <ToolBarIcon
              src={centerIcon}
              onClick={() => handleTextAlign('center')}
            ></ToolBarIcon>
            <ToolBarIcon
              src={rightIcon}
              onClick={() => handleTextAlign('right')}
            ></ToolBarIcon>
            <ToolBarIcon
              src={leftIcon}
              onClick={() => handleTextAlign('left')}
            ></ToolBarIcon>
          </ToolBarIcons>
          <ToolBarIcons>
            <ToolBarIcon
              src={bulletDotIcon}
              onClick={handleBulletList}
            ></ToolBarIcon>
            <ToolBarIcon
              src={bulletNumberIcon}
              onClick={handleBulletOlList}
            ></ToolBarIcon>
          </ToolBarIcons>
          <ToolBarIcons>
            <ToolBarIconColor
              icon={colorIcon}
              type="color"
              onChange={(e) => handleTextColorChange(e.target.value)}
            />
          </ToolBarIcons>
        </ToolBar>
      </ToolBarBackground>
      <TextArea
        ref={editorRef}
        contentEditable={true}
        suppressContentEditableWarning={true}
        style={{
          minHeight: '100px',
          padding: '10px',
        }}
        onInput={handleInput}
      ></TextArea>
      {content ? '' : <PlaceHolder>I am your reach text editor.</PlaceHolder>}
    </TextEditorWrapper>
  );
};

export default TextEditor;
