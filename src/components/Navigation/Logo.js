/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';

const Logo = styled.a`
  display: flex;
  align-items: center;
  font-family: 'Inter';
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 2px;
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
    color: rgb(249, 73, 73);
  }
  &:active {
    color: rgb(249, 73, 73);
  }

  span {
    font-weight: 700;
    letter-spacing: 1.5px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export default () => (
  <Logo href="/">
    <span>ADITYA RAO</span>
  </Logo>
);
