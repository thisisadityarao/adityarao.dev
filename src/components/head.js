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
    <link
      rel="icon"
      href="../../static/favicon.ico"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="../../static/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="../../static/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="../../static/favicon-16x16.png"
    />
    <link rel="manifest" href="../../static/site.webmanifest" />
    <link
      rel="mask-icon"
      href="../../static/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="msapplication-TileColor" content="#2b5797" />
    <meta name="theme-color" content="#ffffff" />
  </Helmet>
);
