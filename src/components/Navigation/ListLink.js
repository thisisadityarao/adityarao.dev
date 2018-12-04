import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  &:link {
    text-decoration: none;
  }
  &:visited {
    color: #5a5a5a;
  }
  &:focus,
  &:hover {
    color: #3b92de;
    border-bottom: 3px solid #3b92de;
  }
  &:active {
    color: #3b92de;
  }
`;

export default ({ to, children }) => (
  <li>
    <StyledLink to={to}>{children}</StyledLink>
  </li>
);
