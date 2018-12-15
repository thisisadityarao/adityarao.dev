import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = styled.header`
  height: 60px;
  width: 100%;
  margin: 4rem 0 2rem 0;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 1em;
  padding-right: 1em;
  display: flex;
  justify-content: space-between;

  @media (min-width: 786px) {
    justify-content: space-between;
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
