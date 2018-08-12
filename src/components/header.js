import React from 'react';
import { Link } from 'gatsby';
import Nav from './nav';
import styles from '../stylesheets/header.module.scss';

export default () => (
    <header className={ styles.header }>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/adityar/image/upload/v1533139983/raoaditya.com/ar-logo_smooth.svg"
          alt="Aditya Rao"
          className={ styles.logo }
        />
      </Link>
      <Nav />
    </header>
);
