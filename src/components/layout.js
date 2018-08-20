/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */

import React from 'react';
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import Head from './head';
import Header from './header';
import Footer from './footer';

injectGlobal`
${styledNormalize}

*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  height: 100%;
  width: 100%;
  padding: 0;
  background: #ffffff;
  border-top: 0.35rem solid #CA2259;
}
main {
  display: block;
}
audio,
canvas,
iframe,
img,
svg,
video {
  vertical-align: middle;
}
a {
  text-decoration: none;
}
a:link {
  color: #e35204;
}
a:visited {
  color: #ff6732;
}
a:focus,
a:hover {
  border-bottom: 3px solid #e35204;
}
a:active {
  color: #ffc466;
}

li,
ul {
  margin: 0;
  padding: 0;
}

nav ul, nav ol {
  list-style: none;
}
`;


export default ({ children }) => (
  <>
    <Head />
    <Header />
    {children}
    <Footer />
  </>
);
