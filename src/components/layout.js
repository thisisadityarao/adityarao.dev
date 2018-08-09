import React from 'react';
import HeadElement from './head';
import Header from './header';
import Footer from './footer';

export default ({ children }) => (
  <div style={{
    margin: '0 auto', maxWidth: 1200, padding: '0 1rem', fontFamily: 'Source Sans Pro',
  }}>
    <HeadElement />
    <Header />
    {children}
    <Footer />
  </div>
);
