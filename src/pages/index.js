import React from 'react';
import Layout from '../components/layout';
import SocialMediaLinks from '../components/socialMediaLinks';
import styles from '../stylesheets/index.module.scss';

export default () => (
  <Layout>
    <main className={styles.main}>
      <img
        src="http://via.placeholder.com/400x400"
        alt="Aditya"
        className={styles.profile_pic}
      />
      <div className={styles.intro_text}>
        <h2>Hello.</h2>
        <p>I’m Aditya Rao a freelance front-end developer &amp; designer.</p>
        <p>
          I help people &amp; organization get the positive attention they
          deserve by creating elegant, functional and modern websites.
        </p>
      </div>
      <SocialMediaLinks />
    </main>
  </Layout>
);
