import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/icon/logo.svg';
import * as Style from './LogoButton.style.js';

const HeaderButton = ({ to }) => {
  return (
    <Link to={to}>
      <Style.LogoButton>
        <Style.LogoImage src={logo} alt="logo" />
        <Style.LogoText>Rolling</Style.LogoText>
      </Style.LogoButton>
    </Link>
  );
};

export default HeaderButton;
