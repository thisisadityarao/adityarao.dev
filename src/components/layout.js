import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/ar-logo_smooth.svg';

const ListLink = props => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>
);

export default ({ children }) => (
  <div style={{ margin: '0 auto', maxWidth: 640, padding: '0 1rem' }}>
    <header style={{ marginBottom: '1.5rem' }}>
      <Link to="/">
        <img src={logo} alt="Aditya Rao" />
      </Link>
      <ul style={{ listStyle: 'none', float: 'right' }}>
        <ListLink to="/">
Home
        </ListLink>
        <ListLink to="/blog/">
Blog
        </ListLink>
        <ListLink to="/contact/">
Contact
        </ListLink>
      </ul>
    </header>
    {children}
  </div>
);
