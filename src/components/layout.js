/* eslint-disable react/display-name */
/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
// eslint-disable-next-line

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
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
    font-style: normal;
  }

  html {
    font-size: 100%;
    overflow-x: hidden;
    overflow-y: auto !important;
    box-sizing: border-box;
  }

  body {
    background-color: #fff;
    line-height: 1.65;
    color: #324354;
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, "Segoe  UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway';
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

  /* DARK MODE STYLES */
  body.dark,
  body.dark header,
  body.dark footer,
  body.dark article,
  body.dark main[class*=blog-] {
    background-color: #141414;
    color: #efefef;
  }


  body.dark main[class*=blog-] .page-header {
    color: #fff;
  }

  body.dark img {
  filter: grayscale(30%);
}

  body.dark #tag-link {
    color: #fff;
  }

  body.dark article pre code[class*=language-],
  body.dark article table tbody>tr:nth-child(odd)>td,
  body.dark article table tbody>tr:nth-child(odd)>th {
      background: #282c34;
  }
  body.dark article :not(pre) > code[class*="language-"] {
    padding: 2px;
    background: #e5e5e5;
    color: #232323;
    border-radius: 2px;
  }
  body.dark article pre code {
    color: #fff;
  }

  body.dark h1,
  body.dark h2,
  body.dark h3,
  body.dark h4,
  body.dark h5,
  body.dark h6 {
    color: #fff;
  }

  body.dark a {
    color: #008ffc;
  }
  body.dark .footer a {
    color: #008ffc;
  }

  body.dark .logo,
  body.dark .navigation a {
    color: #fff;
  }
  body.dark .navigation a:hover {
    background-color: #f94949;
  }

  body.dark .mobile-nav .hamburger,
  body.dark .mobile-nav .hamburger::after,
  body.dark .mobile-nav .hamburger::before {
    background: #fff;
  }


  body.dark .hire h3, body.dark .hire p {
    color: #282c34;
  }
  body.dark .hire a {
    color: #fff;
  }
  body.dark section[class*=intro] a {
    color: #fff;
  }
  body.dark #pagination-links a {
    color: #fff;
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
    <PageWrapper>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </PageWrapper>
  </>
);
