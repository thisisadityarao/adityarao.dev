import React from 'react';
import styled from 'styled-components';

const SectionHireMe = styled.section`
  width: 100%;
  background-color: #fafafa;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  margin-top: 4rem;
  padding-top: 3rem;
  padding-bottom: 4rem;

  & h3 {
    color: #29384d;
    font-weight: 700;
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 1.5em;

    @media (min-width: 576px) {
      font-size: 1.5rem;
    }
  }

  & p {
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.5;
    max-width: 30em;
    text-align: center;
    padding-left: 0.5em;
    padding-right: 0.5em;
    margin: 0 auto;
    margin-bottom: 1em;

    @media (min-width: 576px) {
      font-size: 1.4rem;
      line-height: 1.6;
    }
  }
`;

const EmailButton = styled.a`
  cursor: pointer;

  display: block;
  width: 200px;
  border-radius: 6px;
  font-size: 1.1em;
  letter-spacing: 1px;
  padding: 1rem 2rem;
  margin: 0 auto;

  color: white;
  text-align: center;
  text-decoration: none;
  background-color: #f43059;
  transition: all 0.2s linear;

  &:hover {
    opacity: 1;
    background-color: #e91e63;
    box-shadow: 0px 3px 6px #b0b0b0;
  }

  @media (min-width: 576px) {
    font-size: 0.9em;
    height: 62px;
    width: 200px;
  }
`;

export default () => (
  <SectionHireMe>
    <h3>Let's talk about your project.</h3>
    <p>
      I'm currently seeking freelance opportunities. If you are interested in a new project or
      collaboration, send me an email.
    </p>
    <EmailButton>Send Email</EmailButton>
  </SectionHireMe>
);
