/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import ChevronScroll from './scroll-down-indicator';

const SectionIntro = styled.section`
  width: 100%;
  height: calc(100vh - 80px);
  padding-top: 5rem;

  @media (min-width: 576px) {
    height: calc(100vh - 120px);
  }

  & p {
    font-weight: 400;
    line-height: 1.65;
    font-size: 1rem;
    max-width: 30em;
    @media (min-width: 576px) {
      font-size: 1.4rem;
    }
    @media (min-width: 786px) {
      max-width: 32em;
    }
  }

  p + p {
    margin-top: 1.5rem;

    @media (min-width: 576px) {
      margin-top: 0.8rem;
    }
  }

  .subtitle {
    margin-top: 3em;
    font-size: 1rem;
    @media (min-width: 576px) {
      font-size: 1.2rem;
    }
  }
`;

const H2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 3rem;
  @media (min-width: 576px) {
    font-size: 2rem;
  }
`;

const LinkButton = styled.a`
  cursor: pointer;
  display: block;
  width: 230px;
  height: 50px;
  font-size: 1.1rem;
  margin: 0;
  margin-top: 1rem;
  padding: 13px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #f9a800;

  border-radius: 4px;
  white-space: nowrap;
  word-break: keep-all;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 2px;
  transition: all 0.2s ease-in-out 0s;

  &:link {
    color: #fff;
  }

  &:hover {
    opacity: 1;
    background-color: #e76f03;
    box-shadow: 0px 3px 6px #b0b0b0;
  }
`;

export default () => (
  <SectionIntro>
    <H2>
      Hello there! <span>👋</span>
    </H2>
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
