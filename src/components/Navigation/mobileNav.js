import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from './sideBar';
import useLockBodyScroll from '../utils/use-lock-body-scroll';

const MenuItem = styled.div`
  width: 30px;
  height: 3px;
  border-radius: 8px;
  position: absolute;
  left: 0;
  background: ${props => (props.menuToggle ? 'transparent' : '#fff')};
  transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);

  &::before {
    content: '';
    top: -8px;
    width: 30px;
    height: 3px;
    border-radius: 8px;
    position: absolute;
    background: ${props => (props.menuToggle ? '#fff' : '#fff')};
    left: 0;
    transform: ${props => (props.menuToggle ? `rotate(45deg); top: 0` : `rotate(0)`)};
    transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
  }

  &::after {
    top: 8px;
    content: '';
    width: 30px;
    height: 3px;
    border-radius: 8px;
    background: ${props => (props.menuToggle ? '#fff' : '#fff')};
    position: absolute;
    left: 0;
    transform: ${props => (props.menuToggle ? `rotate(-45deg); top: 0` : `rotate(0)`)};
    transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
  }
`;

const Menu = styled.button`
  height: 30px;
  padding: 0;
  width: 33px;
  z-index: 300;
  position: relative;
  background: transparent;
  border: none;

  &::after {
    content: '';
    position: absolute;
    left: -10px;
    top: -9px;
    z-index: -1;
    width: 50px;
    height: 50px;
    background: #e4004e;
    border-radius: 7px;
    opacity: 0.5;
    transition: 0.3s ease-out;
  }

  &:hover:not(.touch),
  &:focus {
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const Toggle = () => {
  const [isToggledOn, setToggle] = useState(false);
  const toggle = () => setToggle(!isToggledOn);
  const bodyScrollLock = useLockBodyScroll;
  return (
    <div className="mobile-nav">
      <Menu onClick={toggle} aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}>
        <MenuItem className="hamburger" menuToggle={isToggledOn} />
      </Menu>
      {isToggledOn && <SideBar bodyscrolllock={bodyScrollLock} toggle={toggle} />}
    </div>
  );
};

export default Toggle;
