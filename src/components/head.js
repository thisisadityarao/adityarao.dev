import React from 'react';
import Helmet from 'react-helmet';

export default () => (
  <Helmet
  title="Aditya Rao"
  meta={[
    { charSet: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
    { httpEquiv: 'x-ua-compatible', content: 'ie=edge' },
    { name: 'author', content: 'Aditya Rao' },
    { name: 'description', content: 'Front-End developer - Aditya Rao' },
    { name: 'keywords', content: 'webdev, gatsbyjs, reactjs, frontend, graphql' },
  ]}
  link={[
    { rel: 'icon', type: 'image/png', href: '../../static/favicon.ico' },
    {
      rel: 'icon', type: 'image/png', sizes: '32x32', href: '../../static/favicon-32x32.png',
    },
    {
      rel: 'icon', type: 'image/png', sizes: '16x16', href: '../../static/favicon-16x16.png',
    },
  ]}
>
<html lang="en" />
</Helmet>
);
