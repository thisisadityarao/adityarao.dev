/* eslint-disable react/display-name */
/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
// eslint-disable-next-line

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ProgressBar from './progress-bar';
import Head from './head';
import Footer from './footer';
import Header from './header';
import ScrollToTop from './scroll-to-top';

// CSS Reset
import '../../node_modules/sanitize.css/sanitize.css';

// Create global styles
const GlobalStyle = createGlobalStyle`

  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: 'Clear Sans', 'sans-serif';
    font-style: normal;
  }

  html {
    font-size: 100%;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    overflow-y: auto !important;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    //scroll-behavior: smooth;
  }

  body {
    background-color: #fff;
    line-height: 1.65;
    color: #4a5a6a;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', 'sans-serif';
    color: #2a3a4a;
  }


  ul, ol {
    margin-left: 0;
  }

  [role='button'] {
    cursor: pointer;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
