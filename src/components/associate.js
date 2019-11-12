/* eslint-disable react/display-name */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Wrapper from './wrapper-background';

const SectionHireMe = styled.section`
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  padding-top: 5rem;
  padding-bottom: 6rem;
  background-color: #fafafa;

  & h3 {
    font-weight: 900;
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 2rem;

    @media (min-width: 576px) {
      font-size: 3rem;
      margin-bottom: 3rem;
    }
  }

  & p {
    font-size: 1.2rem;
    line-height: 1.45;
    max-width: 30em;
    text-align: center;
    padding-left: 0.5em;
    padding-right: 0.5em;
    margin: 0 auto;
    margin-bottom: 3rem;

    @media (min-width: 576px) {
      font-size: 1.6rem;
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
  font-size: 1.4rem;
  font-weight: bold;
  font-family: 'Fira Sans', sans-serif;
  letter-spacing: 1px;
  margin: 0 auto;
  padding: 0.9rem 2.2rem;
  width: 242px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background: linear-gradient(45deg, #0069ed, #0037ff);
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
    padding: 1rem 3rem;
    width: 254px;
    font-size: 1.6rem;
  }
`;

export default () => (
  <Wrapper>
    <SectionHireMe className="hire">
      <h3>Let&apos;s talk about your project.</h3>
      <p>
        I&apos;m currently seeking freelance opportunities. If you are interested in a new project or collaboration,
        send me an email.
      </p>
      <EmailButton href="mailto:dev.adityarao@gmail.com" target="_blank" rel="noopener noreferrer">
        Send Email
      </EmailButton>
    </SectionHireMe>
  </Wrapper>
);
