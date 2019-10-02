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
  max-width: 760px;

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
    font-size: 1.8rem;
    text-align: center;
    font-weight: 700;
    margin-bottom: 3rem;
  }

  p + p {
    margin-top: 1.2rem;
  }
`;

const H1 = styled.h1`
  position: relative;
  font-weight: 900;
  font-size: 2.5rem;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
  text-align: center;
  padding: 0 0 15px 0;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const HR = styled.hr`
  height: 4px;
  max-width: 100px;
  border: none;
  margin-bottom: 6rem;
  background: #ec4c47;
`;

export default () => (
  <Layout>
    <About>
      {' '}
      <SectionAbout id="about">
        <H1>ABOUT ME</H1>
        <HR />
        <p>I'm Aditya Rao.</p>
        <p>
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
      </SectionAbout>
    </About>
  </Layout>
);
