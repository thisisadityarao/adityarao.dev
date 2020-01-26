/* eslint-disable no-undef */
/* eslint-disable import/first */
/* eslint-disable import/prefer-default-export */

// Load Source Sans Pro typeface
require('typeface-source-sans-pro');
// Load IBM Plex Sans typeface
require('typeface-ibm-plex-sans');
// Load Bree Serif typeface
require('typeface-bree-serif');
// Import PrismJS Theme
require('prism-themes/themes/prism-dracula.css');
require('prismjs/plugins/line-numbers/prism-line-numbers.css');
require('./static/styles/override-prism.css');

/* global window, document */
const scrollTo = id => () => {
  const el = document.querySelector(id);
  if (el) return window.scrollTo(0, el.offsetTop - 20);
  return false;
};

export const onRouteUpdate = ({ location: { hash } }) => {
  if (hash) {
    window.setTimeout(scrollTo(hash), 10);
  }
};
