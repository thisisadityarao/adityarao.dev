import React from 'react';
import styled from 'styled-components';
import { between } from 'polished';
import Layout from '../components/layout';
import SEO from '../components/utils/seo';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('https://res.cloudinary.com/adityar/image/upload/v1577797341/adityarao/Website%20Assets/so-white.png');
`;

const Contact = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 668px;

  @media (min-width: 600px) {
    padding: 0 16px;
  }
`;

const SectionContact = styled.section`
  width: 100%;
  padding: 7rem 0;

  @media (min-width: 600px) {
    padding: 5rem 0;
  }

  & p {
    font-family: 'Source Sans Pro', serif;
    font-size: ${between('18px', '22px')};
    line-height: 1.5;
    text-align: center;

    @media (min-width: 600px) {
      line-height: 1.7;
    }
  }

  & p:last-of-type {
    font-size: ${between('18px', '22px')};
  }

  & a:link {
    display: inline-block;
    font-size: 1.5rem;
    text-decoration: none;
    color: #fff;
    position: relative;
    color: #fff;
    line-height: 1;
    position: relative;
    z-index: 10;
    padding: 0.1rem 0.5rem;
  }
  & a:before {
    background: #38a169;
    display: block;
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    transform: rotate(2deg);
    z-index: -4;
    height: 105%;
    top: -2.5%;
    transition: all 0.2s;
  }
  & a:after {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -4;
    background: #1b1b1b;
    transform: rotate(0deg);
  }
  & a:visited {
    background-color: transparent;
    color: #3740ff;
  }

  & a:focus,
  & a:hover {
    outline: 0px;
    opacity: 0.8;
  }

  & a:active {
    color: #0053ba;
  }
`;

const H1 = styled.h1`
  font-family: 'Bree Serif', serif;
  position: relative;
  font-weight: 900;
  font-size: 2rem;
  letter-spacing: 2px;
  word-spacing: 4px;
  text-align: center;
  color: #3a4a5a;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export default () => (
  <Layout>
    <SEO
      title="Aditya Rao - About"
      keywords={[`blog`, `gatsby`, `javascript`, `react`, `webdev`, `frontend`, `about`]}
    />
    <Wrapper>
      <Contact>
        <SectionContact>
          <H1>Contact</H1>
          <p>
            The best way to get in touch is to follow me on Twitter at 
            <a href="https://twitter.com/thisisadityarao">@thisisadityarao</a>. If you’d rather send an email, though,
            you can reach me at:
          </p>
          <p>
            <a href="mailto:dev.adityarao@gmail.com">dev.adityarao@gmail.com</a>
          </p>
        </SectionContact>
      </Contact>
    </Wrapper>
  </Layout>
);
