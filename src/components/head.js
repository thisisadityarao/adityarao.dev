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
>
<html lang="en" />
</Helmet>
);
