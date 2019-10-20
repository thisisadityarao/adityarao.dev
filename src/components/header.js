/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { Reveal, Animation } from 'react-genie';
import Navigation from './Navigation/mainNav';

const Header = styled.header`
  width: 100%;
  height: 120px;
`;

export default () => (
  <Reveal animation={Animation.FadeIn} delay={450}>
    <Header>
      <Navigation />
    </Header>
  </Reveal>
);
