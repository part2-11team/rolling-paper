import React, { useState, useRef, useEffect } from 'react';
import * as S from '../../PostMessagePage.style.js';
import arrowDownIcon from '../../../../assets/icon/arrow_down.png';
import arrowUpIcon from '../../../../assets/icon/arrow_top.png';

const Dropdown = ({ options, onSelect, defult }) => {
  const dropDownClickRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const defaultOption = options.find((option) => option.value === defult);
  const [selectedOption, setSelectedOption] = useState(
    defaultOption || options[0],
  );

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect(option.value); // 옵션 객체의 value 속성만 전달
    setIsOpen(false);
  };

  const handleClick = (event) => {
    if (
      dropDownClickRef.current &&
      !dropDownClickRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <S.PostMessageDropdownList
      ref={dropDownClickRef}
      onClick={handleToggleDropdown}
    >
      <S.DropdownIcon src={isOpen ? arrowUpIcon : arrowDownIcon} />
      <S.PostMessageDropdownListButton>
        {selectedOption.label}
      </S.PostMessageDropdownListButton>
      <S.PostMessageDropdownListContent isOpen={isOpen}>
        {options.map((option) => (
          <S.DropdownListContentOption
            key={option.value}
            onClick={() => handleSelectOption(option)}
          >
            {option.label}
          </S.DropdownListContentOption>
        ))}
      </S.PostMessageDropdownListContent>
    </S.PostMessageDropdownList>
  );
};

export default Dropdown;
