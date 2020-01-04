/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation/mainNav';

const Header = styled.header`
  width: 100%;
  height: 120px;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
  position: relative;
  z-index: 1000;
`;

export default () => (
  <Header>
    <Navigation />
  </Header>
);
