/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import styled from 'styled-components';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import ListLink from './ListLink';
import HamburgerMenu from './HamburgerMenu';
import SideBar from './SideBar';

const Nav = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 1400px) {
    width: 40%;
  }
`;

const NavLinks = styled.ul`
  display: none;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
`;

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.targetElement = null;
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.targetElement = document.querySelector('body');
      if (this.state.isOpen === true) {
        document.body.style.overflow = 'hidden';
      } else if (this.state.isOpen === false) {
        document.body.style.overflow = 'visible';
      }
    }
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  openMenu() {
    this.setState({
      isOpen: true,
    });
    disableBodyScroll(this.targetElement);
  }

  closeMenu() {
    this.setState({
      isOpen: false,
    });
    enableBodyScroll(this.targetElement);
  }

  render() {
    const sidebarOn = this.state.isOpen;

    if (!sidebarOn) {
      return (
        <Nav>
          <NavLinks>
            <ListLink to="/">Home</ListLink>
            <ListLink to="#about">About Me</ListLink>
            <ListLink to="/blog/">Blog</ListLink>
            <ListLink to="#contact">Contact</ListLink>
          </NavLinks>
          <HamburgerMenu click={this.openMenu} />
        </Nav>
      );
    }
    return <SideBar click={this.closeMenu} />;
  }
}
