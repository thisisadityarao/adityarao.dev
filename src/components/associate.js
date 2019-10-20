/* eslint-disable react/display-name */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Reveal, Animation } from 'react-genie';

const SectionHireMe = styled.section`
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 4rem;
  padding-top: 3rem;
  padding-bottom: 4rem;
  background-color: #fafafa;

  & h3 {
    font-weight: 900;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;

    @media (min-width: 576px) {
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }
  }

  & p {
    font-size: 1.1rem;
    line-height: 1.45;
    max-width: 30em;
    text-align: center;
    padding-left: 0.5em;
    padding-right: 0.5em;
    margin: 0 auto;
    margin-bottom: 3rem;

    @media (min-width: 576px) {
      font-size: 1.5rem;
      line-height: 1.5;
      margin-bottom: 3.5rem;
    }
  }
`;

const offset = keyframes`
    50% {
      background-position: 100% 0;
    }
`;

const EmailButton = styled.a`
  cursor: pointer;
  display: block;
  border: none;
  border-radius: 3px;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0 auto;
  padding: 1rem 4rem;
  width: 242px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background: linear-gradient(45deg, #0069ed, #8200ff);
  background-size: 400% 400%;
  transition: all 0.3s ease;
  box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.3);

  &:hover {
    animation: ${offset} 10s ease infinite;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  }

  @media (min-width: 768px) {
    width: 254px;
    font-size: 1.3rem;
  }
`;

export default () => (
  <SectionHireMe className="hire">
    <Reveal animation={Animation.FadeInUp} delay={450}>
      <h3>Let&apos;s talk about your project.</h3>
      <p>
        I&apos;m currently seeking freelance opportunities. If you are interested in a new project or collaboration,
        send me an email.
      </p>
      <EmailButton href="mailto:dev.adityarao@gmail.com" target="_blank" rel="noopener noreferrer">
        Send Email
      </EmailButton>
    </Reveal>
  </SectionHireMe>
);
