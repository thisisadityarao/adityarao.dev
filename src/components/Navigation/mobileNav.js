import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from './sideBar';
import useLockBodyScroll from '../utils/use-lock-body-scroll';

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

const Toggle = () => {
  const [isToggledOn, setToggle] = useState(false);
  const toggle = () => setToggle(!isToggledOn);
  const bodyScrollLock = useLockBodyScroll;
  return (
    <div className="mobile-nav">
      <Menu
        onClick={toggle}
        aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}
      >
        <MenuItem className="hamburger" menuToggle={isToggledOn} />
      </Menu>
      {isToggledOn && (
        <SideBar bodyscrolllock={bodyScrollLock} toggle={toggle} />
      )}
    </div>
  );
};

export default Toggle;
