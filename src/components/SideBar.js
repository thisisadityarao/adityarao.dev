import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import StyledLink from './StyledLink';
import NavClose from './NavClose';

const ListLink = ({ to, children }) => (
  <li style={{ listStyle: 'none' }}>
    <StyledLink to={to}>{children}</StyledLink>
  </li>
);

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

const Nav = styled.ul`
  height: 100vh;
  margin: 0;
  padding: 15% 5%;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 100;
  width: 70%;

  background-image: linear-gradient(to bottom, #d74177, #3a3897);

  & li {
    margin: 0;
    margin-bottom: 3rem;
    width: 80%;
  }

  & a {
    display: block;
    width: 100%;
    padding: 0.5rem;
    font-size: 1.5rem;
    text-align: center;
    color: #fff;
  }

  ${media.greaterThan('medium')`
    display: none;
  `}
`;

export default props => (
  <>
    <Nav>
      <NavClose click={props.close} />
      <ListLink to="/">Home</ListLink>
      <ListLink to="#about">About Me</ListLink>
      <ListLink to="/blog/">Blog</ListLink>
      <ListLink to="#contact">Contact</ListLink>
    </Nav>
  </>
);
