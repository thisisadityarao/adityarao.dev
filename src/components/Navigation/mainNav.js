/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Toggle from './mobileNav';

const StyledLink = styled(Link)`
  font-weight: 500;
  cursor: pointer;
  margin: 0;
  margin-right: 2px;
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
    color: #fff;
    box-shadow: none;
    background: #e4004e;
    border-radius: 4px;
    transition: all 0.2s ease-in-out 0s;
  }
  &:active {
    color: #fff;
  }

  &:last-of-type {
    margin-right: 0;
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
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 18px;
  line-height: 18px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 20px;
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
    letter-spacing: 1px;
  }

  @media (min-width: 768px) {
    font-size: 26px;
    line-height: 26px;
  }
`;

function Navigation() {
  return (
    <NavigationWrapper>
      <Logo href="/">
        <span className="logo">ADITYA RAO</span>
      </Logo>
      <Nav className="navigation">
        <Toggle className="mobile-nav" />
        <StyledLink
          to="/"
          activeStyle={{
            color: '#fff',
            boxShadow: 'none',
            background: '#e4004e',
            borderRadius: '4px',
          }}
        >
          Home
        </StyledLink>
        <StyledLink
          to="/about/"
          activeStyle={{
            color: '#fff',
            boxShadow: 'none',
            background: '#e4004e',
            borderRadius: '4px',
          }}
        >
          About Me
        </StyledLink>
        <StyledLink
          to="/blog/"
          activeStyle={{
            color: '#fff',
            boxShadow: 'none',
            background: '#e4004e',
            borderRadius: '4px',
          }}
        >
          Blog
        </StyledLink>
        <StyledLink to="/#contact">Contact</StyledLink>
      </Nav>
    </NavigationWrapper>
  );
}

export default Navigation;
