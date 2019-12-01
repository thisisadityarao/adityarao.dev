/* eslint-disable react/display-name */
/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
// eslint-disable-next-line

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
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
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export default ({ pageMeta, children }) => (
  <>
    <Helmet>
      <title>{`Aditya Rao | ${pageMeta.title}`}</title>

      {/* The charset, viewport and author meta tags will always have the same value, so we hard code them! */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Aditya Rao" />

      {/* The rest we set dynamically with props */}
      <meta name="description" content={pageMeta.description} />

      {/* We pass an array of keywords, and then we use the Array.join method to convert them to a string where each keyword is separated by a comma */}
      <meta name="keywords" content={pageMeta.keywords.join(',')} />
    </Helmet>
    <GlobalStyle />
    <PageWrapper>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </PageWrapper>
  </>
);
