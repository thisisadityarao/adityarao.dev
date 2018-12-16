/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
// eslint-disable-next-line

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { modularScale } from 'polished';
import Head from './head';
import Header from './Navigation/Header';
import Footer from './footer';

// CSS Reset
import '../../node_modules/sanitize.css/sanitize.css';
// Load Clear Sans typeface
require('typeface-clear-sans');
// Load IBM Plex Serif typeface
require('typeface-ibm-plex-sans');


// Create global styles
const GlobalStyle = createGlobalStyle`

  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
  }

  html {
    margin: 0;
  }

  body {
  padding: 0;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: ${modularScale(0, '1em', 'majorThird')};
  line-height: 1.4;
  }

  body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    width: 100%;
    background: #00bcd4;
    background: linear-gradient(to right, #00bcd4 0%,#ffc107 100%);
    z-index: 1004;
  }

  p {
  color: #3d4852;
  margin: 0;
  hyphens: auto;
  }

  h1, h2, h3, h4, h5, h6 {
  font-family: "Clear Sans", sans-serif;
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

  img {
    height: auto;
    width: auto;
    /* max-width allows image to be responsive. */
    max-width: 100%;
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
