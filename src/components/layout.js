import React from 'react';
import Head from './head';
import Header from './header';
import Footer from './footer';
import styles from '../stylesheets/layout.module.scss';

export default ({ children }) => (
  <>
    <Head />
    <div className={ styles.container }>
      <Header />
      {children}
      <Footer />
      </div>
  </>
);
