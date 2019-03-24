/* eslint-disable react/display-name */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { between } from 'polished';

const SectionIntro = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 6vh;
  margin-bottom: 3rem;

  @media (min-width: 400px) {
    padding-top: 5rem;
  }

  & p {
    line-height: 1.65;
    font-size: 1rem;
    font-size: ${between('16px', '21px')};
    max-width: 30em;
  }

  p + p {
    margin-top: 1.5rem;

    @media (min-width: 768px) {
      margin-top: 0.8rem;
    }
  }

  .wave {
    display: block;
    font-size: 1.8em;
    margin-top: 1rem;

    @media (min-width: 768px) {
      font-size: 2em;
    }
  }

  .subtitle {
    margin-top: 2rem;
    font-size: 1rem;
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
  }
`;

const offset = keyframes`
    50% {
      background-position: 100% 0;
    }
`;

const LinkButton = styled.a`
  cursor: pointer;
  display: inline-block;
  width: 200px;
  height: 48px;
  margin: 0;
  padding: 11px;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.1em;
  text-align: center;
  text-decoration: none;
  color: #fff;
  border: none;
  border-radius: 3px;
  outline: none;
  background: linear-gradient(45deg, #288cff, #8200ff);
  background-size: 400% 400%;
  transition: all 0.3s ease;
  box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.3);

  &:hover {
    animation: ${offset} 10s ease infinite;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 230px;
    height: 54px;
    margin-bottom: 5vh;
    padding: 12px;
    font-size: 1rem;
  }
`;

export default () => (
  <SectionIntro>
    <span className="wave">👋</span>
    <p>I’m Aditya Rao, a freelance front-end developer.</p>
    <p>
      I build digital products that are intuitive, accessible, beautiful, and
      fun. I am here to help you and your business turn great ideas into amazing
      products.
    </p>
    <p className="subtitle">Want to chat about your project?</p>
    <LinkButton
      href="mailto:dev.adityarao@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Get in Touch
    </LinkButton>
  </SectionIntro>
);
