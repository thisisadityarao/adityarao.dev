/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import styled from 'styled-components';
import ListLink from './ListLink';
import MobileNav from './mobile-nav';

const Nav = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  line-height: 1.25;

  .mobile-nav {
    display: block;
    visibility: visible;
    @media (min-width: 768px) {
      display: none;
      visibility: hidden;
    }
  }
`;

export default class Navigation extends Component {
  render() {
    return (
      <Nav>
        <MobileNav className="mobile-nav" />
        <ListLink to="/">Home</ListLink>
        <ListLink to="#about">About Me</ListLink>
        <ListLink to="/blog/">Blog</ListLink>
        <ListLink to="#contact">Contact</ListLink>
      </Nav>
    );
  }
}
