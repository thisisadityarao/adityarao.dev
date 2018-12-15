import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SectionAbout from '../components/aboutSection';
import SectionHireMe from '../components/hiremeSection';
import SectionContact from '../components/contactSection';

const HomeSection = styled.section`
  min-height: 100%;
`;

const SectionIntro = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  padding-top: 4rem;

  & p {
    color: #3d4852;
    font-weight: 300;
    font-size: 1.2rem;
    max-width: 40em;
    @media (min-width: 576px) {
      font-size: 1.6rem;
    }
  }
  .subtitle {
    margin-top: 2em;
    font-size: 0.9rem;
    @media (min-width: 576px) {
      font-size: 1.3rem;
    }
  }
  p + p {
    margin-top: 0.5em;

    @media (min-width: 576px) {
      margin-top: 0.25em;
    }
  }

  & p > span {
    color: rgb(44, 44, 44);
    font-weight: 400;
  }
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 576px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const LinkButton = styled.a`
  cursor: pointer;

  display: inline-block;
  min-width: 220px;
  font-size: 1em;
  margin-top: 1em;
  padding: 1rem 2rem;
  border-radius: 9999px;
  transition: all 0.2s linear;

  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #ff4b6e;

  &:link {
    color: #fff;
  }

  &:hover {
    opacity: 1;
    background-color: #ff4b6e;
    box-shadow: 0px 3px 6px #b0b0b0;
  }

  @media (min-width: 576px) {
    height: 60px;
    width: 200px;
  }
`;

export default () => (
  <Layout>
    <main>
      <HomeSection>
        <SectionIntro>
          <H2>Hi, there! I’m a freelance front-end developer.</H2>
          <p>I am here to help you and your business turn great ideas into amazing products.</p>
          <p>
            I help people and organization get the positive attention they deserve by creating
            elegant, functional and modern websites.
          </p>
          <p className="subtitle">Want to chat about your project?</p>
          <LinkButton href="mailto:dev.adityarao@gmail.com">Get in Touch</LinkButton>
        </SectionIntro>
        <SectionAbout />
        <SectionHireMe />
        <SectionContact />
      </HomeSection>
    </main>
  </Layout>
);
