import styled from 'styled-components';

export const FirstSection = styled.section`
  background: linear-gradient(
    to right,
    white 0%,
    white 70%,
    black 70%,
    black 100%
  );
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90rem;
`;

export const StyledHeader = styled.header`
  display: flex;
  column-gap: 20px;
  flex-direction: row;
  align-items: center;
  height: 819px;
  margin: 0 auto;
  width: 1512px;
`;

export const StyledWelcome = styled.div`
  height: 288px;
  width: 535px;
`;

export const StyledH2 = styled.h2`
  color: #b224ef;
  font-weight: 700, bold;
  font-size: 96px;
  line-height: 144px;
`;

export const StyledText = styled.p`
  color: #5f6073;
  font-size: 14px;
  font-weight: 400;
  height: 88px;
  line-height: 21px;
  width: 535px;
`;

export const StyledBtn = styled.button`
  background: #1b1c37;
  border-radius: 12px;
  border: none;
  color: white;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  margin-top: 2rem;
  padding: 16px 50px;
`;

export const StyledImg = styled.img`
  height: 437px;
  margin-left: 100px;
  width: 658px;
`;

export const StyledIconsDiv = styled.div`
  column-gap: 15px;
  display: flex;
  margin-top: 20%;
`;

export const StyledIcon = styled.i`
  color: #5f6073;
  cursor: pointer;
`;
