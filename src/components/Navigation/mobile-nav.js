import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Menu = styled.button`
  cursor: pointer;
  width: 30px;
  z-index: 300;
  top: -7px;
  position: relative;
  background: transparent;
  border: none;

  &:hover:not(.touch),
  &:focus {
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
  width: 24px;
  height: 2px;
  position: absolute;
  left: 0;
  background: ${props => (props.menuToggle ? 'transparent' : '#2a3a4a')};
  transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);

  &::before {
    content: '';
    top: -8px;
    width: 24px;
    height: 2px;
    position: absolute;
    background: #2a3a4a;
    left: 0;
    transform: ${props =>
      props.menuToggle ? `rotate(45deg); top: 0` : `rotate(0)`};
    transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
  }

  &::after {
    top: 8px;
    content: '';
    width: 24px;
    height: 2px;
    background: #2a3a4a;
    position: absolute;
    left: 0;
    transform: ${props =>
      props.menuToggle ? `rotate(-45deg); top: 0` : `rotate(0)`};
    transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
  }
`;

const SideBar = styled.div`
  position: absolute;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: orange;
`;

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  a {
    color: white;
    font-size: 22px;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    :hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
  .active {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const Toggle = () => {
  const [isToggledOn, setToggle] = useState(false);
  const toggle = () => setToggle(!isToggledOn);
  return (
    <div className="mobile-nav">
      <Menu
        onClick={toggle}
        aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}
      >
        <MenuItem menuToggle={isToggledOn} />
      </Menu>
      {isToggledOn && (
        <SideBar>
          <Container>
            <Link aria-label="View blog page" to="/" activeClassName="active">
              Home
            </Link>
            <Link
              aria-label="View talks page"
              to="/About"
              activeClassName="active"
            >
              About
            </Link>
            <Link
              aria-label="View workshops page"
              to="/Blog"
              activeClassName="active"
            >
              Blog
            </Link>
            <Link
              aria-label="View about page"
              to="/Contact"
              activeClassName="active"
            >
              Contact
            </Link>
          </Container>
        </SideBar>
      )}
    </div>
  );
};

export default Toggle;
