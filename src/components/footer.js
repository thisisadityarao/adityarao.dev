import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  height: 5rem;
  background: #fafafa;

  display: flex;
  justify-content: center;
  align-items: center;

`;

export default () => (
  <Footer>
    <small>
    &copy;2018 All rights reserved - Designed and coded by Aditya
    </small>
  </Footer>
);
