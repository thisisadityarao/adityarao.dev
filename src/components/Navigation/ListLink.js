import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  cursor: pointer;
  margin: 0;
  display: inline-block;
  position: relative;
  padding: 10px 20px;
  letter-spacing: 1px;

  transition: all 0.2s ease-in-out;

  &:visited {
    color: #595959;
  }
  &:link {
    text-decoration: none;
    color: #595959;
  }
  &:focus,
  &:hover {
    color: #fff;
    background: #f43059;
    box-shadow: none;
    border-radius: 4px;
    transition: all 0.2s ease-in-out 0s;
  }
  &:active {
    color: #f43059;
  }
`;

export default ({ to, children }) => (
  <li>
    <StyledLink to={to}>{children}</StyledLink>
  </li>
);
