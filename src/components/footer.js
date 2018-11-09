import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: linear-gradient(to right, #2193b0, #6dd5ed);

  & small {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    text-align: center;
    color: #fff;
  }
`;

export default () => (
  <Footer>
    <small>&copy;2018 All rights reserved - Designed and coded by Aditya 👨🏽‍💻</small>
  </Footer>
);
