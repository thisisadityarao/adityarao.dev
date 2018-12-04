import React from 'react';
import styled from 'styled-components';
import ListLink from './ListLink';
import MenuClose from './MenuClose';

const Nav = styled.nav`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 10;
`;

const NavList = styled.ul`
  height: 100vh;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  background-color: #2193b0;

  & li {
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & a {
    cursor: pointer;
    font-size: 1.5rem;
    text-decoration: none;
    display: inline-block;
    padding: calc(100vh / 10) 0;
    width: 100%;
    line-height: 0;
    text-align: center;
    color: #fff;

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
