import React from 'react';
import * as S from './Button.style.js';

const Button = ({
  className,
  children,
  disabled = false,
  size = 'md',
  onClick,
}) => {
  return (
    <S.Button
      className={className}
      disabled={disabled}
      $size={size}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
};

export default Button;
