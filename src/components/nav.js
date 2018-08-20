import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { device } from '../utils/device';


const Nav = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  flex-grow: 2;
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    max-width: 400px;
  }

  li {
    margin-bottom: 0;
  }

  li a {
    text-decoration: none;
  }
`;

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default () => (
  <Nav>
    <ListLink to="/">
      Home
    </ListLink>
    <ListLink to="/blog/">
      Blog
    </ListLink>
    <ListLink to="/contact/">
      Contact
    </ListLink>
  </Nav>
);
