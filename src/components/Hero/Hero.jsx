import React from 'react';
import * as S from './Hero.style';

const Hero = () => {
  return (
    <S.FirstSection>
      <S.StyledHeader>
        <div>
          <S.StyledWelcome>
            <S.StyledH2>You're Welcome</S.StyledH2>
          </S.StyledWelcome>
          <S.StyledText>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              integer iaculis sollicitudin turpis proin maecenas. Quis potenti
              dignissim cras volutpat quis faucibus id hac. Turpis pellentesque
              bibendum nibh faucibus pretium nec. Nulla natoque montes,
              suspendisse suspendisse.
            </p>
          </S.StyledText>
          <S.StyledBtn>Try Free</S.StyledBtn>
          <S.StyledIconsDiv>
            <S.StyledIcon class='fa fa-facebook fa-2x' aria-hidden='true' />
          </S.StyledIconsDiv>
        </div>
        <S.StyledImg src='images/Frame 27.svg' />
      </S.StyledHeader>
    </S.FirstSection>
  );
};

export default Hero;
