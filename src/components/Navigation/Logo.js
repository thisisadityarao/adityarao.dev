import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  display: inline-block;
  height: 60px;
  width: 100%;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 75%;
  }

  &:link {
    color: #29384c;
    text-decoration: none;
  }
  &:visited {
    color: #3d4852;
  }
  &:focus,
  &:hover {
    color: #3b92de;
  }
  &:active {
    color: #3b92de;
  }
`;

const Logo = styled.div`
  height: 60px;
  width: 60%;

  @media (min-width: 400px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 35%;
    text-align: left;
  }

  h1 {
    margin: 0;
    padding: 0;
    line-height: 65px;
    font-size: 18px;
    letter-spacing: 1px;

    @media (min-width: 530px) {
      font-size: 20px;
    }

    @media (min-width: 768px) {
      font-size: 26px;
    }

    & a {
      transition: color 0.3s ease-in-out;
    }
  }
`;

export default () => (
  <Logo>
    <h1>
      <Link href="/">ADITYA RAO</Link>
    </h1>
  </Logo>
);
