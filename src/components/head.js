import React from 'react';
import Helmet from 'react-helmet';

export default () => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <title>Aditya Rao</title>
    <meta name="author" content="Aditya Rao" />
    <meta name="description" content="Aditya Rao is a Front-End Developer." />
    <link rel="apple-touch-icon" href="../../static/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon" href="../../static/apple-touch-icon-152x152.png" />
    <link rel="icon" href="../../static/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" href="../../static/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" href="../../static/favicon.ico" />
  </Helmet>
);
