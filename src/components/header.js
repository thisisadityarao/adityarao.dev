import React from 'react';
import { Link } from 'gatsby';
import Nav from './nav';

export default () => (
  <div style={{ margin: '0 auto', maxWidth: 960, padding: '0 1rem' }}>
    <header style={{ marginBottom: '1.5rem' }}>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/adityar/image/upload/v1533139983/raoaditya.com/ar-logo_smooth.svg"
          alt="Aditya Rao"
          width="60px"
          height="60px"
        />
      </Link>
      <Nav />
    </header>
  </div>
);
