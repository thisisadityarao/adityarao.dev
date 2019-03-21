/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './main-nav';

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding-top: 2rem;

  @media (min-width: 768px) {
    height: 120px;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`;

export default () => (
  <Header>
    <HeaderContainer>
      <Logo />
      <Navigation />
    </HeaderContainer>
  </Header>
);
