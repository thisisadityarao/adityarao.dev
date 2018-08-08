import React from "react";
import { Link } from "gatsby";

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children }) => (
  <div style={{ margin: "0 auto", maxWidth: 640, padding: "0 1rem" }}>
    <header style={{ marginBottom: "1.5rem" }}>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/adityar/image/upload/v1533139983/raoaditya.com/ar-logo_smooth.svg"
          alt="Aditya Rao"
          width="60px"
          height="60px"
        />
      </Link>
      <ul style={{ listStyle: "none", float: "right" }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/blog/">Blog</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
);
