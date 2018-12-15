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
    color: #3d4852;
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
    width: 45%;
  }

  @media (min-width: 768px) {
    width: 30%;
    text-align: left;
  }

  h1 {
    margin: 0;
    padding: 0;
    line-height: 65px;
    font-size: 20px;
    letter-spacing: 1px;

    @media (min-width: 435px) {
      font-size: 24px;
    }

    @media (min-width: 768px) {
      font-size: 30px;
    }

    & a {
      transition: color 0.3s ease-in-out;
      background: linear-gradient(to right, #ff0057, #008eff 50%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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
