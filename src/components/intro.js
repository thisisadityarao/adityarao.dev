/* eslint-disable react/display-name */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import ChevronScroll from './scroll-down-indicator';

const SectionIntro = styled.section`
  width: 100%;
  padding-top: 3rem;
  margin-bottom: 4rem;

  @media (min-width: 578px) {
    padding-top: 4rem;
  }

  @media (min-width: 768px) {
    height: calc(100vh - 120px);
  }
  @media (min-width: 1.24px) {
    padding-top: 5rem;
  }

  & p {
    font-weight: 400;
    line-height: 1.65;
    font-size: 1rem;
    max-width: 30em;
    @media (min-width: 768px) {
      font-size: 1.4rem;
      max-width: 32em;
    }
  }

  p + p {
    margin-top: 1.5rem;

    @media (min-width: 768px) {
      margin-top: 0.8rem;
    }
  }

  .wave {
    display: block;
    font-size: 1.5rem;
    margin: 1rem 0 2rem;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  .subtitle {
    margin-top: 3em;
    font-size: 0.9rem;
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const offset = keyframes`
    50% {
      background-position: 100% 0;
    }
`;

const LinkButton = styled.a`
  display: block;
  width: 200px;
  height: 45px;
  margin: 0;
  margin-bottom: 3rem;
  padding: 11px;
  font-size: 1rem;
  letter-spacing: 0.1em;
  text-align: center;
  text-decoration: none;
  color: #fff;
  border: none;
  border-radius: 3px;
  outline: none;
  background: linear-gradient(45deg, #288cff, #8200ff);
  background-size: 400% 400%;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.3);

  &:hover {
    animation: ${offset} 10s ease infinite;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 230px;
    height: 55px;
    margin-bottom: 5rem;
    padding: 14px;
    font-size: 1.1rem;
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
    <LinkButton href="mailto:dev.adityarao@gmail.com">Get in Touch</LinkButton>
    <ChevronScroll />
  </SectionIntro>
);
