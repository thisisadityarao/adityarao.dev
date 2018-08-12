import React from 'react';
import { Link } from 'gatsby';
import styles from '../stylesheets/nav.module.scss';

const ListLink = props => (
  <li className={styles.nav_list_item}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default () => (
  <ul className={styles.nav_list}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/blog/">Blog</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
  </ul>
);
