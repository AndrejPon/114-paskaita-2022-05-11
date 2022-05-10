import React from 'react';
import * as S from './Footer.style';

const Footer = () => {
  return (
    <S.StyledFooter>
      <S.StyledText>@tianmunooz 2022 All rights reserved</S.StyledText>
      <div class='FooterIcons'>
        <i class='fa fa-facebook fa-2x' aria-hidden='true'></i>
        <i class='fa fa-pinterest-p fa-2x' aria-hidden='true'></i>
        <i class='fa fa-twitter fa-2x' aria-hidden='true'></i>
        <i class='fa fa-youtube-play fa-2x' aria-hidden='true'></i>
        <i class='fa fa-instagram fa-2x' aria-hidden='true'></i>
      </div>
    </S.StyledFooter>
  );
};

export default Footer;
