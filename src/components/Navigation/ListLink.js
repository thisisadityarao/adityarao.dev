import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  &:link {
    text-decoration: none;
    color: #888;
  }
  &:focus,
  &:hover {
    color: #2C9CDB;
  }
  &:active {
    color: #2C9CDB;
  }
`;

export default ({ to, children }) => (
  <li>
    <StyledLink to={to}>{children}</StyledLink>
  </li>
);
