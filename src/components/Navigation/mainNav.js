/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
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
    background: rgb(238, 239, 240);
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
  height: 80px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 16px;
  line-height: 1.25;

  @media (min-width: 768px) {
    font-size: 20px;
    padding: 0 40px;
    height: 120px;
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
  font-family: 'Clear Sans';
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 2px;
  transition: all 0.2s ease-in-out 0s;

  &:link {
    color: #29384c;
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
    font-weight: 700;
    letter-spacing: 1.5px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export default class Navigation extends Component {
  render() {
    return (
      <NavigationWrapper>
        <Logo href="/">
          <span>ADITYA RAO</span>
        </Logo>
        <Nav>
          <Toggle className="mobile-nav" />
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about/">About Me</StyledLink>
          <StyledLink to="/blog/">Blog</StyledLink>
          <StyledLink to="#contact">Contact</StyledLink>
        </Nav>
      </NavigationWrapper>
    );
  }
}
