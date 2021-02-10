/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { between } from 'polished';
import Layout from '../components/layout';
import SEO from '../components/utils/seo';

const About = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 732px;
  border-radius: 3px;
  box-shadow: rgba(19, 17, 16, 0.1) 0px -1rem 1rem -0.5rem;
  background: #ffffff;
`;

const SectionAbout = styled.section`
  width: 100%;
  padding: 16px;

  @media (min-width: 600px) {
    padding: 32px;
  }

  & p {
    font-size: ${between('16px', '18px')};
    line-height: 1.5;

    @media (min-width: 600px) {
      line-height: 1.7;
    }
  }

  p + p {
    margin-top: 30px;
  }

  p + h3 {
    margin-top: 3rem;
  }

  p:last-of-type {
    text-align: center;
    margin-top: 3rem;
  }

  & a:link {
    font-weight: normal;
    text-decoration: unerline;
    padding: 2px 2px 1px;
    color: #3740ff;
    transition: all 150ms linear 0s;
  }

  & a:visited {
    background-color: transparent;
    color: #3740ff;
  }

  & a:focus,
  & a:hover {
    outline: 0px;
    text-decoration: none;
  }

  & a:active {
    color: #0053ba;
  }

  ul {
    margin: 1.5rem 0;
    list-style: default;
    padding-left: 0px;
    list-style-position: inside;
  }
  li {
    line-height: 1.5;
    font-size: ${between('16px', '18px')};
    margin-bottom: 1rem;
    margin-left: 0;

    @media (min-width: 600px) {
      line-height: 1.7;
    }
  }
`;

const H1 = styled.h1`
  font-family: 'Bree Serif', serif;
  position: relative;
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: 2px;
  word-spacing: 4px;
  margin-bottom: 0.4rem;
  text-align: center;
  padding: 0 0 15px 0;
  color: #3a4a5a;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const H3 = styled.h3`
  position: relative;
  font-weight: 700;
  font-size: 1.6rem;
  font-family: 'Bree Serif', serif;
  margin-bottom: 0.5rem;
  text-align: center;
  padding: 0 0 15px 0;
  color: #3a4a5a;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('https://res.cloudinary.com/adityar/image/upload/v1579750956/adityarao/website/background/so-white.png');
`;

const ImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  
  & img {
    margin: 0 auto;
  }
`

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
          <ImgWrapper>
          <img src="https://res.cloudinary.com/adityar/image/upload/ar_1:1,b_rgb:ffffff,bo_5px_solid_rgb:ffffff,c_fill,g_auto,r_max,w_350/v1612938273/adityarao/IMG20210119194854.jpg" />
</ImgWrapper>
          <H1>
            <span role="img" aria-label="wave emoji">
              👋
            </span>
          </H1>
          <p>
            Hi, again~ My name is Aditya. I&apos;m a Developer. SEO. Marketer. I focus on optimizing, designing,
            developing, marketing, and managing websites and applications. I work on complex front-end projects with
            up-to-date languages and technologies, and I also have a decent grasp of server-side development.
          </p>
          <p>
            {' '}
            My focus is mainly in front-end technologies such as HTML, CSS, JavaScript, GatsbyJS, ReactJS &amp; others
            that make up the <a href="https://jamstack.org">JAMSTACK</a> architecture.
          </p>
          <p>
            {' '}
            I see every new experience as an opportunity to learn. My favorite projects are those that require me to
            push beyond my boundaries and acquire new skills and knowledge in order to succeed.
          </p>
          <p>
            I help people & organization get the positive attention they deserve, by creating elegant, functional and
            modern websites. My emphasis is on producing thoughtful, conceptually driven work that comes from a close
            understanding of the client and their audience.
          </p>
          <H3>Personal Life</H3>
          <p>
            I’m passionate about technology, design and making peoples lives easier by solving complex problems to
            create user-friendly, intuitive digital products. I’m constantly trying to expand and evolve my set of
            technical skills and apply them to equally varied methods of problem solving and understanding. I am
            inspired by new trends and details are essential to me.
          </p>
          <p>
            I live in Mumbai, India. I’m a very private person and I strive for my own fundamental freedom. I’ve been
            making mistakes since 1990 and find it’s still the best way to reach new ground.{' '}
          </p>
          <p>
            If I’m not catching up with my friends, I’m probably at home, writing, coding, reading, or filling my
            ever-increasing bucket list.{' '}
          </p>
          <H3>About This Site</H3>
          <p>
            This is my personal website and blog, a collection of personal musings, and my digital journaling. This
            website was formally built in the year 2017, but the style of the site has been changed several times.
          </p>
          <p>The main purposes of this website are listed here:</p>
          <ul>
            <li>Showcase my personal projects.</li>
            <li>Document new learnings in front-end landscape.</li>
            <li>It works as a portfolio.</li>
          </ul>
          <p>
            To know more about me you can follow me on <a href="https://twitter.com/thisisadityarao">Twitter</a> or send
            me a <a href="mailto:dev.adityarao@gmail.com">Email</a>.
          </p>
          <p>
            <span role="img" aria-label="flower">
              🌼🌼🌼
            </span>
          </p>
        </SectionAbout>
      </About>
    </Wrapper>
  </Layout>
);
