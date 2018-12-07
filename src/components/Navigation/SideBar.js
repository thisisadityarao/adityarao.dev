import React from 'react';
import styled, { keyframes } from 'styled-components';
import ListLink from './ListLink';
import MenuClose from './MenuClose';

const slide = keyframes`
  0% {
    transform: scaleX(0);
    opacity: 1;
  }
  100% {
    transform: scaleX(-100px);
    opacity: 1;
  }
`;

const Nav = styled.nav`
  overflow: hidden;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  margin-right: 0;
  height: 100vh;
  max-height: 100vh;
  z-index: 100;
  animation: ${slide} 0.3s ease-out;
`;

const NavList = styled.ul`
  color: white;
  height: 100vh;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  background-color: #2196f3;

  & li {
    color: white;
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  && a {
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    text-decoration: none;
    display: inline-block;
    padding: calc(100vh / 10) 0;
    width: 100%;
    line-height: 0;
    text-align: center;

    @media (min-width: 768px) {
      display: none;
    }
  }

  & a:hover {
    border-bottom: none;
    background-color: #f9f9f9;
    color: #5a5a5a;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default props => (
  <Nav>
    <NavList>
      <MenuClose close={props.click} />
      <ListLink to="/">Home</ListLink>
      <ListLink to="#about">About Me</ListLink>
      <ListLink to="/blog/">Blog</ListLink>
      <ListLink to="#contact">Contact</ListLink>
    </NavList>
  </Nav>
);
