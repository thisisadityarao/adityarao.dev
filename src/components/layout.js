/* eslint-disable react/display-name */
/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
// eslint-disable-next-line

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header/header';
import Footer from './footer';
//import ScrollToTop from './utils/scroll-to-top';

// CSS Reset
import '../../node_modules/sanitize.css/sanitize.css';

// Create global styles
const GlobalStyle = createGlobalStyle`

  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    font-style: normal;
  }

  html {
    font-size: 100%;
    overflow-x: hidden;
    overflow-y: auto !important;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: #fff;
    position: relative;
    line-height: 1.65;
    color: #324354;
    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, "Segoe  UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Source Sans Pro';
    color: rgb(30, 13, 43);;
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default ({ children }) => (
  <>
    <GlobalStyle />
    <PageWrapper>
      <Header />
      {children}
      <Footer />
    </PageWrapper>
  </>
);
