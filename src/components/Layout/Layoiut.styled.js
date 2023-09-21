import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  padding: 0 32px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: RoyalBlue;
  border-top-right-radius: 18px;
  border-top-left-radius: 18px;
`;

export const StyledLink = styled(NavLink)`
  color: yellow;
  font-weight: 500;
  font-size: 24px;
  outline: none;
  &:is(:hover, :focus) {
    color: white;
  }
  &.active {
    color: orange;
    text-decoration: underline;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  margin-bottom: 48px;
  text-align: center;
`;
