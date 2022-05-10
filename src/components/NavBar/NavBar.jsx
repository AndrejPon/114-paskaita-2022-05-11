import React from 'react';
import Button from '../Button/Button';
import * as S from './NavBar.style';

const NavBar = () => {
  return (
    <S.NavBar>
      <S.StyledImage src='images\logo.png' alt='logo' />
      <S.StyledUl>
        <li>
          <S.StyledLink class='active' href='#home'>
            Home
          </S.StyledLink>
        </li>
        <li>
          <S.StyledLink href='#info'>Info</S.StyledLink>
        </li>
        <li>
          <S.StyledLink href='#contact'>Contact</S.StyledLink>
        </li>
      </S.StyledUl>
      <div>
        <Button text='Sign Up' />
        <Button text='Log In' />
      </div>
    </S.NavBar>
  );
};

export default NavBar;
