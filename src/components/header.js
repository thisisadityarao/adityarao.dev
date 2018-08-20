import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Nav from './nav';
import { device } from '../utils/device';

const Header = styled.div`
  width: 100%;
  height: 80px;
  margin: 3rem 0;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const LogoContainer = styled(Link)`
  flex-grow: 1;
  height: 40px;
  width: 40px;
  &:hover,
  &:focus {
    border-bottom: none;
  }
  img {
    height: 40px;
    width: 40px;
    margin-bottom: 0;
  }

  @media ${device.tablet} {
    img {
      height: 55px;
      width: 55px;
    }
  }
`;

export default () => (
  <Header>
    <LogoContainer to="/">
      <img
        src="https://res.cloudinary.com/adityar/image/upload/v1533139983/raoaditya.com/ar-logo_smooth.svg"
        alt="Aditya Rao"
      />
    </LogoContainer>
    <Nav />
  </Header>
);
