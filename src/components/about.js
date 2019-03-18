/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';

const SectionAbout = styled.section`
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  height: 100vh;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding-top: 7rem;
  padding-bottom: 7rem;

  & p {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 35em;

    @media (min-width: 768px) {
      font-size: 1.4rem;
      line-height: 1.6;
    }
    @media (min-width: 992px) {
      font-size: 1.6rem;
      line-height: 1.6;
    }
  }

  p + p {
    margin-top: 1.2em;

    @media (min-width: 480px) {
      margin-top: 1.5em;
    }
  }
`;

const H3 = styled.h3`
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: 2px;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const HR = styled.hr`
  height: 5px;
  max-width: 60px;
  border: none;
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 4rem;
  background: #f43059;
`;

export default () => (
  <SectionAbout id="about">
    <H3>ABOUT ME</H3>
    <HR />
    <p>My name is Aditya Rao.</p>
    <p>
      I help people & organization get the positive attention they deserve, by
      creating elegant, functional and modern websites. My emphasis is on
      producing thoughtful, conceptually driven work that comes from a close
      understanding of the client and their audience.
    </p>
    <p>
      I’m passionate about technology, design and making peoples lives easier by
      solving complex problems to create user-friendly, intuitive digital
      products. I’m constantly trying to expand and evolve my set of technical
      skills and apply them to equally varied methods of problem solving and
      understanding. I am inspired by new trends and details are essential to
      me.
    </p>
  </SectionAbout>
);
