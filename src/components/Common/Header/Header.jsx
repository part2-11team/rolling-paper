import React from 'react';
import HeaderButton from './HeaderButton/HeaderButton';
import LogoButton from './LogoButton/LogoButton';
import * as Style from './Header.style.js';

const Header = ({ page }) => {
  if (page === 'main' || page === 'list') {
    return (
      <Style.HeaderWrapper>
        <Style.HeaderContent>
          <LogoButton to="/" />
          <HeaderButton to="/post" />
        </Style.HeaderContent>
      </Style.HeaderWrapper>
    );
  } else {
    return (
      <Style.HeaderWrapper>
        <Style.HeaderContent>
          <LogoButton to="/" />
        </Style.HeaderContent>
      </Style.HeaderWrapper>
    );
  }
};

export default Header;
