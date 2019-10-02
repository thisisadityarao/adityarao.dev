/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Moon } from 'styled-icons/fa-solid/Moon';
import styled from 'styled-components';
import { Link } from 'gatsby';
import useDarkMode from '../utils/use-dark-mode';
import Toggle from './mobileNav';

const StyledLink = styled(Link)`
  cursor: pointer;
  margin: 0;
  display: inline-block;
  position: relative;
  padding: 10px 20px;
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;
  background-color: transparent;

  &:visited {
    color: #595959;
  }
  &:link {
    text-decoration: none;
    color: #595959;
  }
  &:focus,
  &:hover {
    cursor: pointer;
    color: rgb(0, 0, 0);
    box-shadow: none;
    background: #e8ebed;
    border-radius: 4px;
    transition: all 0.2s ease-in-out 0s;
  }
  &:active {
    color: rgb(0, 0, 0);
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const NavigationWrapper = styled.nav`
  cursor: pointer;
  width: 100%;
  max-width: 1280px;
  height: 120px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 18px;
  line-height: 18px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 20px;
    padding: 0 40px;
  }

  .mobile-nav {
    display: block;
    visibility: visible;

    :hover {
      cursor: pointer;
    }

    @media (min-width: 768px) {
      display: none;
      visibility: hidden;
    }
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  font-family: 'Raleway';
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  margin-top: 2px;
  transition: all 0.2s ease-in-out 0s;

  &:link {
    color: #252525;
    text-decoration: none;
  }
  &:visited {
    color: #29384c;
  }
  &:focus,
  &:hover {
    color: #29384c;
  }
  &:active {
    color: #29384c;
  }

  span {
    font-weight: 900;
    letter-spacing: 0.1em;
  }

  @media (min-width: 768px) {
    font-size: 26px;
    line-height: 26px;
  }
`;

const DarkModeButton = styled(Moon)`
  cursor: pointer;
  width: 22px;
  height: 22px;
  display: block;
  margin-right: 2rem;
`;

const DarkMode = ({ darkMode, setDarkMode }) => <DarkModeButton onClick={() => setDarkMode(!darkMode)} />;

function Navigation() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <NavigationWrapper>
      <Logo href="/">
        <span className="logo">ADITYA RAO</span>
      </Logo>
      <Nav className="navigation">
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
        <Toggle className="mobile-nav" />
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about/">About Me</StyledLink>
        <StyledLink to="/blog/">Blog</StyledLink>
        <StyledLink to="#contact">Contact</StyledLink>
      </Nav>
    </NavigationWrapper>
  );
}

export default Navigation;
