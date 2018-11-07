import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ListLink = props => (
  <li style={{ listStyle: 'none' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Nav = styled.nav`
  width: 100%;

  @media (min-width: 576px) {
    width: 100%;
  }
  @media (min-width: 758px) {
    width: 65%;
    margin-left: auto;
  }
  @media (min-width: 1200px) {
    width: 50%;
  }

  ul {
    margin-bottom: 0;
    margin-top: 0;
    height: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 576px) {
      flex-wrap: nowrap;
      height: 160px;
    }
  }

  li a {
    font-size: 110%;
    font-weight: normal;
    letter-spacing: 1px;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-right: 15px;

    @media (min-width: 435px) {
      font-size: 105%;
      padding-right: 0;
    }
    @media (min-width: 758px) {
      font-size: 110%;
    }
    @media (min-width: 945px) {
      font-size: 100%;
    }
  }
`;

export default () => (
  <Nav>
    <ul>
      <ListLink to="/">Home →</ListLink>
      <ListLink to="#about">About Me →</ListLink>
      <ListLink to="/blog/">Blog →</ListLink>
      <ListLink to="#contact">Contact →</ListLink>
    </ul>
  </Nav>
);
