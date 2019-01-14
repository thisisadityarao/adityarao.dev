import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = styled.header`
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #eeeeee;

  @media (min-width: 480px) {
    padding: 2rem;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (min-width: 786px) {
    padding: 0;
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
