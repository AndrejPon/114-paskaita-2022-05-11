import React from 'react';
import * as S from './Section.style';

const Section = () => {
  return (
    <S.StyledSection>
      <S.StyledImg
        src='images/Moneyverse Buy Online.jpg'
        alt='Buying online picture'
      />
      <div>
        <S.StyledH3>Title</S.StyledH3>
        <S.StyledText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
          urna, a habitant. Ornare sagittis, blandit blandit erat at sed. Diam
          consectetur sit condimentum metus, suspendisse elementum diam semper
          proin. Sem volutpat suspendisse pretium dis non laoreet diam eget.
          Vestibulum nisi morbi faucibus pellentesque. Sed elit pretium pulvinar
          quis sit. Neque amet sed habitant elementum sit lectus nibh. Ac
          sagittis scelerisque potenti pharetra ullamcorper. In lectus amet,
          dolor condimentum purus arcu, tortor. Eget mauris, at vestibulum eget
          odio sit eget et. Aliquam sed venenatis sed aliquam a massa tempor.
          Donec donec ut interdum mauris consectetur. Ultricies aliquam
          consectetur id ante mi varius aliquet.
        </S.StyledText>
        <S.StyledWave src='images/Wave.svg' alt='Wave image' />
      </div>
    </S.StyledSection>
  );
};

export default Section;
