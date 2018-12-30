import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SectionWork from '../components/work';
import SectionAbout from '../components/about';
import SectionHireMe from '../components/associate';
import SectionContact from '../components/contact';

const HomeSection = styled.section`
  min-height: 100%;
`;

const SectionIntro = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1.5rem;
  padding-top: 3rem;

  @media (min-width: 786px) {
    padding-top: 5rem;
  }

  @media (min-width: 1220px) {
    background-image: url('https://res.cloudinary.com/adityar/image/upload/c_scale,h_200/v1544967290/raoaditya.com/Website%20Asset/profile.svg');
    background-position: center right;
    background-size: 400px 400px;
  }

  @media (min-width: 1300px) {
    background-image: url('https://res.cloudinary.com/adityar/image/upload/c_scale,h_200/v1544967290/raoaditya.com/Website%20Asset/profile.svg');
    background-position: center right;
    background-size: 500px 500px;
  }

  & p {
    color: #3d4852;
    font-weight: 300;
    font-size: 1.2rem;
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
  font-size: 1.1em;
  margin-top: 1em;
  padding: 1rem 2rem;
  border-radius: 6px;
  transition: all 0.2s linear;

  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #f43059;

  &:link {
    color: #fff;
  }

  &:hover {
    opacity: 1;
    background-color: #e91e63;
    box-shadow: 0px 3px 6px #b0b0b0;
  }

  @media (min-width: 576px) {
    height: 60px;
    width: 200px;
    font-size: 1.2em;
  }

  @media (min-width: 786px) {
    height: 65px;
    font-size: 1.1em;
  }

  @media (min-width: 900px) {
    font-size: 1em;
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
        <SectionWork />
        <SectionHireMe />
        <SectionContact />
      </HomeSection>
    </main>
  </Layout>
);
