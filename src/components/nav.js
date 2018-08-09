import React from 'react';
import { Link } from 'gatsby';

const ListLink = props => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default () => (
  <ul style={{ listStyle: 'none', float: 'right' }}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/blog/">Blog</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
  </ul>
);
