/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';

const SectionAbout = styled.section`
  margin: 0 auto;
  width: 100%;
  margin-bottom: 4rem;

  & p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.65;
    max-width: 30em;

    @media (min-width: 768px) {
      font-size: 1.4rem;
      max-width: 32em;
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
  font-size: 1.2rem;
  letter-spacing: 0.1em;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HR = styled.hr`
  height: 3px;
  max-width: 60px;
  border: none;
  margin: 0;
  margin-bottom: 3rem;
  background: rgb(249, 73, 73);
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
