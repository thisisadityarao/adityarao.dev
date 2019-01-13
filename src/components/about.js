import React from 'react';
import styled from 'styled-components';

const SectionAbout = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 2rem auto;
  padding-top: 1rem;

  @media (min-width: 480px) {
    padding-top: 4rem;
  }

  & p {
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.5;
    max-width: 35em;

    @media (min-width: 768px) {
      font-size: 1.4rem;
      line-height: 1.6;
    }
    @media (min-width: 992px) {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }

  p + p {
    margin-top: 1.2em;

    @media (min-width: 480px) {
      margin-top: 1em;
    }
  }
`;

const H3 = styled.h3`
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const HR = styled.hr`
  height: 5px;
  max-width: 60px;
  border: none;
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 3rem;
  background: #f43059;
`;

export default () => (
  <SectionAbout>
    <H3>ABOUT ME</H3>
    <HR />
    <p>I’m Aditya Rao, a Front-End Developer.</p>
    <p>
      I help people & organization get the positive attention they deserve, by creating elegant,
      functional and modern websites. My emphasis is on producing thoughtful, conceptually driven
      work that comes from a close understanding of the client and their audience.
    </p>
    <p>
      I’m passionate about technology, design and making peoples lives easier by solving complex
      problems to create user-friendly, intuitive digital products. I’m constantly trying to expand
      and evolve my set of technical skills and apply them to equally varied methods of problem
      solving and understanding.
    </p>
  </SectionAbout>
);
