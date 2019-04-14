import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Menu = styled.button`
  height: 30px;
  padding: 0;
  width: 33px;
  z-index: 300;
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
  width: 27px;
  height: 2px;
  position: absolute;
  left: 0;
  background: ${props => (props.menuToggle ? 'transparent' : '#2a3a4a')};
  transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);

  &::before {
    content: '';
    top: -8px;
    width: 27px;
    height: 2px;
    position: absolute;
    background: ${props => (props.menuToggle ? 'white' : '#2a3a4a')};
    left: 0;
    transform: ${props =>
      props.menuToggle ? `rotate(45deg); top: 0` : `rotate(0)`};
    transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
  }

  &::after {
    top: 8px;
    content: '';
    width: 27px;
    height: 2px;
    background: ${props => (props.menuToggle ? 'white' : '#2a3a4a')};
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
  background-image: linear-gradient(-20deg, #288cff 0%, #8200ff 100%);
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

// Hook
function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, []); // Empty array ensures effect is only run on mount and unmount
}

const Toggle = () => {
  // Call hook to lock body scroll
  useLockBodyScroll();
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
            <Link
              aria-label="View home page"
              to="/"
              activeClassName="active"
              onClick={toggle}
            >
              Home
            </Link>
            <Link
              aria-label="View about page"
              to="/about/"
              activeClassName="active"
              onClick={toggle}
            >
              About
            </Link>
            <Link
              aria-label="View blog page"
              to="/blog/"
              activeClassName="active"
              onClick={toggle}
            >
              Blog
            </Link>
            <Link
              aria-label="View contact page"
              to="#contact"
              activeClassName="active"
              onClick={toggle}
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
