/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */

import React from 'react';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import Head from './head';
import Header from './header';
import Footer from './footer';


injectGlobal`${normalize()}`;

export default ({ children }) => (
  <>
    <Head />
    <Header />
    {children}
    <Footer />
  </>
);
