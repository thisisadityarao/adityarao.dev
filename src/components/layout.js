/* eslint-disable react/display-name */
/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
// eslint-disable-next-line

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Head from './head';
import Footer from './footer';
import Header from './Navigation/Header';
import ProgressBar from './progress-bar';
import ScrollToTop from './scroll-to-top';

// CSS Reset
import '../../node_modules/sanitize.css/sanitize.css';

// Create global styles
const GlobalStyle = createGlobalStyle`

  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 112.5%;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #fff;
  }

  body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    width: 100%;
    z-index: 1004;
  }

  p {
    color: #4a5a6a;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
    color: #2a3a4a;
  }

  button {
    font-family: 'Inter', sans-serif;
  }

  img {
    height: auto;
    width: auto;
    /* max-width allows image to be responsive. */
    max-width: 100%;
  }
`;

const PageWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export default ({ children }) => (
  <>
    <Head />
    <GlobalStyle />
    <ProgressBar />
    <PageWrapper>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </PageWrapper>
  </>
);
