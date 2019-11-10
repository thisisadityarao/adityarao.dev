/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { between } from 'polished';
import Layout from '../components/layout';

const About = styled.div`
  margin: 0 auto;
  margin-bottom: 120px;
  padding: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 700px;

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`;

const SectionAbout = styled.section`
  margin: 0 auto;
  width: 100%;
  padding-top: 4rem;

  & p {
    font-size: ${between('18px', '22px')};
    line-height: 1.5;
  }

  & p:first-of-type {
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1;
    margin-top: 0.5rem;
    margin-bottom: 4rem;
    text-align: center;
  }

  p + p {
    margin-top: 1.3rem;
  }

  p + h3 {
    margin-top: 3rem;
  }

  & a:link {
    font-weight: normal;
    text-decoration: none;
    border-bottom: 1px solid rgb(0, 105, 237);
    padding: 2px 2px 1px;
    color: rgb(0, 105, 237);
    transition: all 150ms linear 0s;
  }

  & a:visited {
    background-color: transparent;
    color: rgb(0, 105, 237);
  }

  & a:focus,
  & a:hover {
    background-color: rgb(0, 105, 237);
    color: rgb(255, 255, 255);
    outline: 0px;
    text-decoration: none;
  }

  & a:active {
    color: #0053ba;
  }

  ul {
    margin: 2rem 0;
    list-style: default;
  }
  li {
    line-height: 1.4;
    font-size: ${between('18px', '20px')};
    margin-bottom: 1rem;
  }
`;

const H1 = styled.h1`
  position: relative;
  font-weight: 900;
  font-size: 2.5rem;
  letter-spacing: 2px;
  word-spacing: 4px;
  margin-bottom: 0.4rem;
  text-align: center;
  padding: 0 0 15px 0;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const H2 = styled.h2`
  position: relative;
  font-weight: 700;
  font-size: 1.8rem;
  font-family: 'Source Sans Pro', sans-serif;
  margin-bottom: -0.8rem;
  text-align: center;
  padding: 0 0 15px 0;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const H3 = styled.h3`
  position: relative;
  font-weight: 700;
  font-size: 1.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  margin-bottom: 0.5rem;
  text-align: left;
  padding: 0 0 15px 0;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const HR = styled.hr`
  height: 4px;
  max-width: 100px;
  border: none;
  margin-bottom: 6rem;
  background: #ff6433;
`;

export default () => (
  <Layout>
    <About>
      {' '}
      <SectionAbout id="about">
        <H1>ABOUT ME</H1>
        <HR />
        <H2>I&apos;m Aditya Rao.</H2>
        <p>web developer · occasional designer</p>
        <H3>Who am I?</H3>
        <p>I am a self-taught freelance web developer based out of Mumbai, India.</p>
        <p>
          {' '}
          My focus is mainly in front-end technologies such as <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>,{' '}
          <b>GatsbyJS</b>, <b>ReactJS</b> &amp; others that make up the <a href="https://jamstack.org">JAMSTACK</a>{' '}
          architecture.
        </p>
        <p>
          {' '}
          I help people &amp; organization get the positive attention they deserve, by creating elegant, functional and
          modern websites. My emphasis is on producing thoughtful, conceptually driven work that comes from a close
          understanding of the client and their audience.
        </p>
        <p>
          I’m passionate about technology, design and making peoples lives easier by solving complex problems to create
          user-friendly, intuitive digital products. I’m constantly trying to expand and evolve my set of technical
          skills and apply them to equally varied methods of problem solving and understanding. I am inspired by new
          trends and details are essential to me.
        </p>
        <H3>About This Site</H3>
        <p>
          This website was formally built in the year 2017, but the style of the site has been changed several times.
        </p>
        <p>The main purposes of this website are listed here:</p>
        <ul>
          <li>Showcase my personal projects.</li>
          <li>Document new learnings and implementation in front-end landscape.</li>
          <li>It works as a portfolio.</li>
        </ul>
        <p>
          To know more about me you can follow me on <a href="https://twitter.com/thisisadityarao">Twitter</a> or send
          me a <a href="mailto:dev.adityarao@gmail.com">Email</a>.
        </p>
      </SectionAbout>
    </About>
  </Layout>
);
