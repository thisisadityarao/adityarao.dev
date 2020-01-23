/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';

const IntroWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('https://res.cloudinary.com/adityar/image/upload/v1579750956/adityarao/website/background/dot-grid.jpg');
`;

const Intro = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  padding: 4rem 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;

  @media (min-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 768px) {
    padding: 6rem 40px;
  }

  & .intro {
    margin: 0 auto;

    @media (min-width: 600px) {
      max-width: 75%;
    }

    @media (min-width: 1120px) {
      max-width: 80%;
    }
  }

  & h1 {
    color: #234361;
    font-family: 'Bree Serif', sans-serif;
    font-size: 2rem;
    line-height: 1.2;
    font-weight: 400;

    @media (min-width: 1120px) {
      font-size: 3.5rem;
    }
  }

  & p {
    color: #234361;
    line-height: 1.4;
    font-size: 1.2rem;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  & .work {
    padding: 0 8%;
    margin: 40px auto 54px;
  }

  .subtitle {
    font-size: 1.2rem;
    margin: 0 auto 24px;

    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
  }
`;

const LinkButton = styled.a`
  cursor: pointer;
  display: inline-block;
  margin-top: 1rem;
  border: none;
  margin: 0;
  padding: 1rem 3rem;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 1px;
  text-align: center;
  border-radius: 3px;
  background: #38a169;
  background-size: 400% 400%;
  color: #fff;
  outline: 0px;
  transition: background-color 0.2s ease 0s, box-shadow 0.2s ease 0s;

  &:hover {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

const SectionIntro = () => (
  <IntroWrapper>
    <Intro>
      <div className="intro">
        <h1>Hi!, I’m Aditya Rao, a freelance front-end developer.</h1>
        <p className="work">
          I build digital products that are intuitive, accessible, beautiful, and fun. I am here to help you and your
          business turn great ideas into amazing products.
        </p>
        <p className="subtitle">Want to chat about your project?</p>
        <LinkButton href="mailto:dev.adityarao@gmail.com" target="_blank" rel="noopener noreferrer">
          Get in Touch
        </LinkButton>
      </div>
    </Intro>
  </IntroWrapper>
);

export default SectionIntro;
