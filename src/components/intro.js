/* eslint-disable react/display-name */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const SectionIntro = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 6vh;
  margin-bottom: 5rem;
  text-align: center;

  @media (min-width: 400px) {
    padding-top: 5rem;
  }
  @media (min-width: 768px) {
    margin-bottom: 10rem;
    text-align: left;
  }

  & p {
    line-height: 1.65;
    font-size: 1.2rem;
    max-width: 45rem;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p + p {
    margin-top: 1.8rem;

    @media (min-width: 768px) {
      margin-top: 1rem;
    }
  }

  .wave {
    display: block;
    font-size: 2.5rem;
    margin-top: 1rem;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  .subtitle {
    margin-top: 4rem;
    font-size: 1.2rem;
    @media (min-width: 768px) {
      font-size: 1.4rem;
      margin-top: 3rem;
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
  margin-top: 1rem;
  border: none;
  margin: 0;
  padding: 1rem 4rem;
  text-decoration: none;
  font-size: 1.1rem;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.1em;
  text-align: center;
  border-radius: 3px;
  background: linear-gradient(45deg, #0069ed, #8200ff);
  background-size: 400% 400%;
  color: #fff;
  transition: all 0.3s ease;
  -webkit-appearance: none;
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
    font-size: 1.3rem;
  }
`;

export default () => (
  <SectionIntro>
    <span className="wave" role="img" aria-label="hand wave emoji">
      👋
    </span>
    <p>I’m Aditya Rao, a freelance front-end developer.</p>
    <p>
      I build digital products that are intuitive, accessible, beautiful, and fun. I am here to help you and your
      business turn great ideas into amazing products.
    </p>
    <p className="subtitle">Want to chat about your project?</p>
    <LinkButton href="mailto:dev.adityarao@gmail.com" target="_blank" rel="noopener noreferrer">
      Get in Touch
    </LinkButton>
  </SectionIntro>
);
