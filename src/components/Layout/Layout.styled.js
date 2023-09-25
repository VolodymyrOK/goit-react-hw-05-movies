import { ImFilm } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 90vw;
  padding: 0 32px;
  margin: 0 auto;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const LogoWrapper = styled(NavLink)`
  margin-left: 32px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: yellow;
  font-size: 24px;
  font-weight: 500;
`;
export const LinkWrapper = styled.div`
  margin-right: 32px;
  display: flex;
  gap: 18px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 8px;
  background-color: RoyalBlue;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  color: yellow;
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

export const LogoIcon = styled(ImFilm)`
  width: 48px;
  height: 48px;
  color: yellow;
`;
