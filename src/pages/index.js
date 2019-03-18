/* eslint-disable react/display-name */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SectionWork from '../components/work';
import SectionAbout from '../components/about';
import SectionHireMe from '../components/associate';
import SectionContact from '../components/contact';
import ChevronScroll from '../components/scroll-down-indicator';

const Main = styled.main`
  height: 100%;
  width: 100%;
  padding: 0 1rem;
`;

const SectionIntro = styled.section`
  width: 100%;
  height: calc(100vh - 125px);
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 7rem;
  padding-bottom: 7rem;

  & p {
    color: #3d4852;
    font-weight: 400;
    line-height: 1.5;
    font-size: 1.4rem;
    max-width: 30em;
    @media (min-width: 576px) {
      font-size: 1.6rem;
    }
    @media (min-width: 786px) {
      max-width: 32em;
    }
  }

  .subtitle {
    margin-top: 3em;
    font-size: 1rem;
    @media (min-width: 576px) {
      font-size: 1.4rem;
    }
  }

  p + p {
    margin-top: 0.5em;

    @media (min-width: 576px) {
      margin-top: 0.8em;
    }
  }

  & p > span {
    color: rgb(44, 44, 44);
    font-weight: 400;
  }
`;

const H2 = styled.h2`
  font-size: 3rem;
  margin-bottom: 3rem;

  @media (min-width: 576px) {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
`;

const LinkButton = styled.a`
  cursor: pointer;

  display: block;
  width: 230px;
  height: 50px;
  font-size: 1.1rem;
  margin: 0;
  margin-top: 1.5rem;
  padding: 13px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #f43059;

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
    background-color: #e91e63;
    box-shadow: 0px 3px 6px #b0b0b0;
  }
`;

const LinkChevron = styled(Link)`
  cursor: pointer;
  color: #3a4a5a;
`;

export default () => (
  <Layout>
    <Main>
      <SectionIntro>
        <H2>
          Hi, there! <span>👋</span>
        </H2>
        <p>I’m Aditya Rao, a freelance front-end developer.</p>
        <p>
          I build digital products that are intuitive, accessible, beautiful,
          and fun. I am here to help you and your business turn great ideas into
          amazing products.
        </p>
        <p className="subtitle">Want to chat about your project?</p>
        <LinkButton href="mailto:dev.adityarao@gmail.com">
          Get in Touch
        </LinkButton>
        <LinkChevron to="#about">
          <ChevronScroll />
        </LinkChevron>
      </SectionIntro>
      <SectionAbout />
      <SectionWork />
      <SectionHireMe />
      <SectionContact />
    </Main>
  </Layout>
);
