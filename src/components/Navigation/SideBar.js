import React from 'react';
import styled, { keyframes } from 'styled-components';
import ListLink from './ListLink';
import MenuClose from './MenuClose';

const slide = keyframes`
  0% {
    transform: translateX(110%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  height: 100vh;
  width: 100%;
  color: #fff;
  z-index: 1000;
  background: linear-gradient(180deg, #ff3cac 0%, #784ba0 50%, #2b86c5 100%);
  animation: ${slide} 0.4s ease-in;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavWrapper = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 20px 50px;
  margin: 0 auto;
  margin-top: 8vh;
`;

const NameWrapper = styled.div`
  width: 100%;
  margin: 2em auto;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 900;
  text-align: center;
  position: relative;
`;

const Name = styled.span`
  display: inline-block;
  margin: 0;
  border-radius: 30px;
  padding: 10px 20px;
  z-index: 10;
  position: relative;
  background-color: #fff000;
  color: #17305b;
`;

const BackgroundLine = styled.div`
  display: block;
  height: 3px;
  width: 100%;
  z-index: -1;
  background-color: white;
  position: absolute;
  top: 21px;
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  background: transparent;

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
    font-size: 1.6rem;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    display: inline-block;
    padding: 40px 50px;
    width: 100%;
    line-height: 0;
    text-align: center;
    letter-spacing: 2px;
    color: #fff;

    @media (min-width: 768px) {
      display: none;
    }
  }

  & a:hover {
    border-bottom: none;
    background-color: #fff000;
    color: #000;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default props => (
  <Nav>
    <NavWrapper>
      <NameWrapper>
        <Name>Menu</Name>
        <BackgroundLine />
      </NameWrapper>
      <NavList onClick={props.click}>
        <MenuClose close={props.click} />
        <ListLink to="/">Home</ListLink>
        <ListLink to="#about">About Me</ListLink>
        <ListLink to="/blog/">Blog</ListLink>
        <ListLink to="#contact">Contact</ListLink>
      </NavList>
    </NavWrapper>
  </Nav>
);
