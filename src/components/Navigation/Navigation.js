import React, { Component } from 'react';
import styled from 'styled-components';
import { Home } from 'styled-icons/fa-solid/Home';
import { Person } from 'styled-icons/material/Person';
import { Edit } from 'styled-icons/fa-regular/Edit';
import { LocationOn } from 'styled-icons/material/LocationOn';
import ListLink from './ListLink';
import HamburgerMenu from './HamburgerMenu';
import SideBar from './SideBar';

const HomeIcon = styled(Home)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-bottom: 1px;
  line-height: 60px;
`;

const PersonIcon = styled(Person)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-bottom: 3px;
  line-height: 60px;
`;

const EditIcon = styled(Edit)`
  width: 20px;
  height: 18px;
  margin-right: 5px;
  margin-bottom: 3px;
  line-height: 60px;
`;

const LocationOnIcon = styled(LocationOn)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-bottom: 5px;
  line-height: 60px;
`;

const Nav = styled.nav`
  margin: 0;
  padding: 0;
  height: 60px;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 768px) {
    display: block;
    width: 60%;
  }

  @media (min-width: 1400px) {
    width: 40%;
  }
`;

const NavLinks = styled.ul`
  display: none;

  @media (min-width: 768px) {
    padding: 0;
    margin: 0;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      margin: 0;
      padding: 0;
      padding-top: 5px;
      height: 60px;
      line-height: 60px;
      list-style: none;
    }

    li a {
      cursor: pointer;
      color: #999;
      margin: 0;
      padding: 0;
      position: relative;
      letter-spacing: 1px;
      display: block;
      height: 60px;
      line-height: 60px;
    }
  }
`;
const windowGlobal = typeof window !== 'undefined' && window;
export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    try {
      if (this.state.isOpen) {
        windowGlobal.document.style = 'overflow: hidden';
      }
    } catch (e) {
      console.error(e);
    }
  }

  componentWillUnmount() {
    if (!this.state.isOpen) {
      windowGlobal.document.style = 'overflow: none';
    }
  }

  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const sidebarOn = this.state.isOpen;

    if (!sidebarOn) {
      return (
        <Nav>
          <NavLinks>
            <ListLink to="/">
              <HomeIcon />
              Home
            </ListLink>
            <ListLink to="#about">
              <PersonIcon />
              About Me
            </ListLink>
            <ListLink to="/blog/">
              <EditIcon />
              Blog
            </ListLink>
            <ListLink to="#contact">
              <LocationOnIcon />
              Contact
            </ListLink>
          </NavLinks>
          <HamburgerMenu click={this.toggleMenu} />
        </Nav>
      );
    }
    return <SideBar click={this.toggleMenu} />;
  }
}
