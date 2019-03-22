/* eslint-disable react/display-name */
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
    background: rgb(249, 73, 73);
    box-shadow: none;
    border-radius: 4px;
    transition: all 0.2s ease-in-out 0s;
  }
  &:active {
    color: rgb(249, 73, 73);
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export default ({ to, children }) => (
  <StyledLink to={to}>{children}</StyledLink>
);
