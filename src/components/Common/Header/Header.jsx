import React from 'react';
import style from './Header.module.css';
import logo from '../../../assets/icon/logo.svg';

// import * as S from './Header.style.js';

const Header = ({ page }) => {
  if (page == 'main') {
    return (
      <header>
        <div>
          <img src={logo} className={`${style.logo}`} alt="logo"></img>
          <span>rolling</span>
        </div>
      </header>
    );
  }
};

export default Header;
