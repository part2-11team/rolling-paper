import React from 'react';
import logo from '../../../assets/icon/logo.svg';
import HeaderButton from './HeaderButton/HeaderButton';
import * as Style from './Header.style.js';

const Header = ({ page }) => {
  if (page === 'main') {
    return (
      <Style.HeaderWrapper>
        <Style.HeaderContent>
          <Style.LogoDiv>
            <Style.LogoImage src={logo} alt="logo" />
            <Style.LogoText>rolling</Style.LogoText>
          </Style.LogoDiv>
          <HeaderButton />
        </Style.HeaderContent>
      </Style.HeaderWrapper>
    );
  }
};

export default Header;
