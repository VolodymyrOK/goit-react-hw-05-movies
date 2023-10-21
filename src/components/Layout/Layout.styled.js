import { ImFilm } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../images/funart.jpg';

export const Main = styled.main`
  flex-grow: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 90vw;
  padding: 0 32px;
  margin: 0 auto;
  height: 100vh;
  &:before {
    content: '';
    background-image: linear-gradient(
        rgba(106, 191, 235, 0),
        rgba(106, 191, 235, 1)
      ),
      url(${background});
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -5;
    opacity: 0.6;
    filter: blur(1px);
  }
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
  gap: 8px;
`;

export const Nav = styled.nav`
  display: flex;
  padding: 8px;
  background-color: RoyalBlue;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: yellow;
  font-size: 24px;
  outline: none;
  padding: 4px 8px;
  border-radius: 8px;
  transition: background-color 250ms ease-in, color 250ms ease-in;
  &:is(:hover, :focus) {
    color: white;
  }
  &.active {
    color: RoyalBlue;
    background-color: white;
    box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
    -webkit-box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
    -moz-box-shadow: 3px 3px 19px 0px rgba(17, 17, 17, 0.75);
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
