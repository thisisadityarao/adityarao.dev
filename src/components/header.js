import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Nav from './nav';

const Header = styled.header`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 20px;
  border-top: 6px solid #e11665;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 160px;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 758px) and (max-width: 1440px) {
    justify-content: space-between;
  }
`;

const Logo = styled.h1`
  display: flex;
  align-self: center;
  font-size: 2rem;
  line-height: 1.1;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-weight: 700;

  a {
    text-decoration: none;
    color: #3d4852;
  }
  a:hover {
    color: #3b92de;
  }

  @media (min-width: 576px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export default () => (
  <Header>
    <HeaderWrapper>
      <Logo>
        <Link to="/">aditya rao</Link>
      </Logo>

      <Nav />
    </HeaderWrapper>
  </Header>
);
