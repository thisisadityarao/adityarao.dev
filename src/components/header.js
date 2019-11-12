/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation/mainNav';
import Wrapper from './wrapper-background';

const Header = styled.header`
  width: 100%;
  height: 120px;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`;

export default () => (
  <Wrapper>
    <Header>
      <Navigation />
    </Header>
  </Wrapper>
);
