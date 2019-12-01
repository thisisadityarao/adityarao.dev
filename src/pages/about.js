/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { between } from 'polished';
import Layout from '../components/layout';
import SEO from '../components/seo';

const About = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 944px;
  border-radius: 3px;
  box-shadow: rgba(19, 17, 16, 0.1) 0px 0.5rem 1rem -0.5rem;
  background: #ffffff;

  @media (min-width: 600px) {
    padding: 0px 40px;
  }
`;

const SectionAbout = styled.section`
  width: 100%;
  padding: 32px;

  @media (min-width: 600px) {
    padding: 50px 60px;
  }

  @media (min-width: 1600px) {
    padding: 70px 80px;
  }

  & p {
    font-size: ${between('16px', '20px')};
    line-height: 1.5;

    @media (min-width: 600px) {
      line-height: 1.7;
    }
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
    margin-top: 30px;
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
    margin: 1.5rem 0;
    list-style: default;
  }
  li {
    line-height: 1.5;
    font-size: ${between('16px', '20px')};
    margin-bottom: 1rem;

    @media (min-width: 600px) {
      line-height: 1.7;
    }
  }
`;

const H1 = styled.h1`
  font-family: 'Bree Serif', serif;
  position: relative;
  font-weight: 900;
  font-size: 2.3rem;
  letter-spacing: 2px;
  word-spacing: 4px;
  margin-bottom: 0.4rem;
  text-align: center;
  padding: 0 0 15px 0;
  color: #3a4a5a;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const H2 = styled.h2`
  position: relative;
  font-weight: 700;
  font-size: 1.8rem;
  font-family: 'Bree Serif', serif;
  margin-bottom: -0.8rem;
  text-align: center;
  padding: 0 0 15px 0;
  color: #3a4a5a;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const H3 = styled.h3`
  position: relative;
  font-weight: 700;
  font-size: 1.6rem;
  font-family: 'Bree Serif', serif;
  margin-bottom: 0.5rem;
  text-align: left;
  padding: 0 0 15px 0;
  color: #3a4a5a;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const HR = styled.hr`
  height: 4px;
  max-width: 100px;
  border: none;
  margin-bottom: 6rem;
  background: #e4004e;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #f3f7f9;
`;

export default () => (
  <Layout>
    <SEO
      title="Aditya Rao - About"
      keywords={[`blog`, `gatsby`, `javascript`, `react`, `webdev`, `frontend`, `about`]}
    />
    <Wrapper>
      <About>
        {' '}
        <SectionAbout id="about">
          <H1>ABOUT</H1>
          <HR />
          <H2>I&apos;m Aditya Rao.</H2>
          <p>web developer · occasional designer</p>
          <p>I am a self-taught freelance web developer based out of Mumbai, India.</p>
          <p>
            {' '}
            My focus is mainly in front-end technologies such as <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>,{' '}
            <b>GatsbyJS</b>, <b>ReactJS</b> &amp; others that make up the <a href="https://jamstack.org">JAMSTACK</a>{' '}
            architecture.
          </p>
          <p>
            {' '}
            I help people &amp; organization get the positive attention they deserve, by creating elegant, functional
            and modern websites. My emphasis is on producing thoughtful, conceptually driven work that comes from a
            close understanding of the client and their audience.
          </p>
          <p>
            I’m passionate about technology, design and making peoples lives easier by solving complex problems to
            create user-friendly, intuitive digital products. I’m constantly trying to expand and evolve my set of
            technical skills and apply them to equally varied methods of problem solving and understanding. I am
            inspired by new trends and details are essential to me.
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
    </Wrapper>
  </Layout>
);
