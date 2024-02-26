import React from 'react';
import { Link } from 'react-router-dom';
import * as style from './HeaderButton.style.js';

const HeaderButton = ({ to }) => {
  return (
    <Link to={to}>
      <style.HeaderButton>롤링 페이퍼 만들기</style.HeaderButton>;
    </Link>
  );
};

export default HeaderButton;
