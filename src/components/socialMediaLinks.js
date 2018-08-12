import React from 'react';
import { Link } from 'gatsby';
import GithubIcon from '../../static/social-icons/github-logo.svg';
import TwitterIcon from '../../static/social-icons/twitter-logo.svg';
import MailIcon from '../../static/social-icons/mail-svg.svg';
import styles from '../stylesheets/socialLinks.module.scss';

const ListLink = props => (
  <li className={ styles.socialIcons }>
    <Link to={props.to} alt={props.alt}>
      {props.children}
    </Link>
  </li>
);

export default () => (
  <ul className={ styles.socialIconsContainer }>
    <ListLink to="https://twitter.com/ad1tyarao">
      <img src={TwitterIcon} alt="Aditya's Twitter" />
    </ListLink>
    <ListLink to="https://github.com/ad1tyara0">
      <img src={GithubIcon} alt="Aditya's GitHub" />
    </ListLink>
    <ListLink to="dev.adityarao@gmail.com">
      <img src={MailIcon} alt="Aditya's email address" />
    </ListLink>
  </ul>
);
