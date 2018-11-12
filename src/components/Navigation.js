/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import StyledLink from './StyledLink';


const ListLink = ({ to, children }) => (
  <li>
    <StyledLink to={to}>{children}</StyledLink>
  </li>
);

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};


const Nav = styled.ul`
  display: none;
  
  ${media.greaterThan('medium')`
    margin: 0;
    padding: 0;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 55%;

    li {
      margin: 0;
      padding: 0;
    }

    li a {
    font-size: 110%;
    font-weight: normal;
    letter-spacing: 1px;
  }
`}
`;

export default () => (
  <Nav>
    <ListLink to="/">Home</ListLink>
    <ListLink to="#about">About Me</ListLink>
    <ListLink to="/blog/">Blog</ListLink>
    <ListLink to="#contact">Contact</ListLink>
  </Nav>
);
