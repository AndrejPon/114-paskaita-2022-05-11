import styled from 'styled-components';

export const NavBar = styled.nav`
  align-items: center;
  border-radius: 1rem;
  box-shadow: 8px 3px 72px rgba(0, 0, 0, 0.18);
  display: flex;
  height: 72px;
  justify-content: space-between;
  margin-top: 2rem;
  width: 1312px;
  background: white;
`;

export const StyledUl = styled.ul`
  column-gap: 40px;
  display: flex;
  flex-direction: row;
  list-style: none;
`;
export const StyledLink = styled.a`
  color: #1b1c37;
  font-size: 17px;
  font-weight: 600;
  line-height: 26px;
  padding: 1rem 0;
  text-decoration: none;
`;

export const StyledImage = styled.img`
  height: 28px;
  padding-left: 50px;
  width: 98px;
`;
