/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
// eslint-disable-next-line

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { modularScale } from 'polished';
import Head from './head';
import Header from './header';
import Footer from './footer';

// CSS Reset
import '../../node_modules/sanitize.css/sanitize.css';

// Create global styles
const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
    margin: 0;
  }

  body {
  height: 100vh;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: "Nunito Sans", sans-serif;
  font-size: ${modularScale(0, '1em', 'majorThird')};
  line-height: 1.4;

  }

  p {
  color: #3d4852;
  margin: 0;
  hyphens: auto;
  }

  h1, h2, h3, h4, h5, h6 {
  font-family: "Fira Sans", sans-serif;
  /* non-scalable fallback for old browsers */
  margin: 21px 0 0;
  /* 21px, will be ignored by old browsers */
  margin-top: 1.5rem;
  color: #22292f;
  }
  h1 {
    font-size: ${modularScale(5, '1em', 'majorThird')};
  }
  h2 {
    font-size: ${modularScale(4, '1em', 'majorThird')};
  }
  h3 {
    font-size: ${modularScale(3, '1em', 'majorThird')};
  }
  h4 {
    font-size: ${modularScale(2, '1em', 'majorThird')};
  }
  h5 {
    font-size: ${modularScale(1, '1em', 'majorThird')};
  }
  h6 {
    font-size: ${modularScale(1, '1em', 'majorThird')};
  }

  a {
    text-decoration: underline;
  }
  a:link {
    cursor: pointer;
    opacity: 1;
  color: #3b92de;
  }
  a:visited {
    color: #1890ff;
  }
  a:focus,
  a:hover {
    opacity: 0.5;
    transition: opacity .15s ease-in;
  }
  a:active {
    color: #1890ff;
  }

  img {
    height: auto;
    width: auto;
    /* max-width allows image to be responsive. */
    max-width: 100%;
  }

  ul,
  ol {
    padding-left: 0;
    list-style-position: inside;
  }

  li,
  ul {
    margin: 0;
    padding: 0;
  }

  // Tab Styles
  @media (min-width: 576px) {
    body {
    font-size: ${modularScale(0, '1.125em', 'minorThird')};
    }
    h1 {
      font-size: ${modularScale(6, '1.125em', 'minorThird')};
    }
    h2 {
      font-size: ${modularScale(5, '1.125em', 'minorThird')};
    }
    h3 {
      font-size: ${modularScale(4, '1.125em', 'minorThird')};
    }
    h4 {
      font-size: ${modularScale(3, '1.125em', 'minorThird')};
    }
    h5 {
      font-size: ${modularScale(2, '1.125em', 'minorThird')};
    }
    h6 {
      font-size: ${modularScale(1, '1.125em', 'minorThird')};
    }
  }

  // Desktop styles
  @media (min-width: 992px) {
    body {
      font-size: ${modularScale(0, '1.375em', 'minorThird')};
    }
    h1 {
      font-size: ${modularScale(6, '1.375em', 'minorThird')};
    }
    h2 {
      font-size: ${modularScale(5, '1.375em', 'minorThird')};
    }
    h3 {
      font-size: ${modularScale(4, '1.375em', 'minorThird')};
    }
    h4 {
      font-size: ${modularScale(3, '1.375em', 'minorThird')};
    }
    h5 {
      font-size: ${modularScale(2, '1.375em', 'minorThird')};
    }
    h6 {
      font-size: ${modularScale(1, '1.375em', 'minorThird')};
    }
  }
`;

export default ({ children }) => (
  <>
    <Head />
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
  </>
);
