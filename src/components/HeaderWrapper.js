import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import media from 'styled-media-query';
import Navigation from './Navigation';
import HamburgerMenu from './HamburgerMenu';

const HeaderWrapper = styled.nav`
  width: 100%;
  max-width: 1200px;
  height: 120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: 45%;

  & a:link {
    font-family: 'Fira Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
    text-decoration: none;

    ${media.greaterThan('small')`
      font-size: 2rem;
    `}
      ${media.greaterThan('medium')`
      font-size: 2.2rem;
    `}
      ${media.greaterThan('large')`
      font-size: 2.5rem;
    `}
  }

  & a:visited {
    color: #000;
  }

  & a:focus,
  & a:hover {
    color: #00bdff;
  }
`;

export default props => (
  <HeaderWrapper>
    <Logo>
      <Link to="/">aditya rao</Link>
    </Logo>
    <Navigation />
    <HamburgerMenu click={props.clickHandler} />
  </HeaderWrapper>
);
