import React from 'react';
import { Link } from 'gatsby';


const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default () => (
  <>
    <ListLink to="/">
      Home
    </ListLink>
    <ListLink to="/blog/">
      Blog
    </ListLink>
    <ListLink to="/contact/">
      Contact
    </ListLink>
  </>
);
