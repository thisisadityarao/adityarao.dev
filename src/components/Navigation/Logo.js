/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';

const Logo = styled.a`
  display: flex;
  align-items: center;
  font-family: 'Inter';
  text-decoration: none;
  cursor: pointer;
  margin-top: 3px;
  transition: all 0.2s ease-in-out 0s;

  &:link {
    color: #29384c;
    text-decoration: none;
  }
  &:visited {
    color: #29384c;
  }
  &:focus,
  &:hover {
    color: #f43059;
  }
  &:active {
    color: #f43059;
  }

  span {
    font-weight: 700;
    letter-spacing: 1.5px;
  }
`;

export default () => (
  <Logo href="/">
    <span>ADITYA RAO</span>
  </Logo>
);
