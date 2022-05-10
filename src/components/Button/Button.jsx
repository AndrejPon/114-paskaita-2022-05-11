import React from 'react';
import * as S from './Button.style';

const Button = ({ text }) => {
  return <S.PrimaryButton>{text}</S.PrimaryButton>;
};

export default Button;
