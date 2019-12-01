/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/display-name */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('https://res.cloudinary.com/adityar/image/upload/v1573571421/adityarao/Website%20Assets/2.png');
`;

const SectionIntro = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  padding: 4rem 20px;
  text-align: left;
  display: flex;
  justify-content: space-between;

  @media (min-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 768px) {
    padding: 6rem 40px;
  }

  & p {
    color: #234361;
    line-height: 1.4;
    font-size: 1.5rem;
    max-width: 45rem;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  & .self {
    color: #234361;
    font-family: 'Bree Serif', sans-serif;
    font-size: 2.6rem;
    line-height: 1.2;
    font-weight: 400;
    max-width: 30ch;

    @media (min-width: 992px) {
      font-size: 3.5rem;
    }
  }

  & .work {
    margin-top: 40px;
    margin-bottom: 60px;
  }

  .subtitle {
    font-size: 1.4rem;
    margin-top: 0;

    @media (min-width: 768px) {
      font-size: 1.6rem;
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
  padding: 1rem 3rem;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 1px;
  text-align: center;
  border-radius: 3px;
  background: linear-gradient(45deg, #0069ed, #0037ff);
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
    font-size: 1.6rem;
  }
`;

export default () => (
  <Wrapper>
    <SectionIntro>
      <div className="intro">
        <h1 className="self">Hi!, I’m Aditya Rao, a freelance front-end developer.</h1>
        <p className="work">
          I build digital products that are intuitive, accessible, beautiful, and fun. I am here to help you and your
          business turn great ideas into amazing products.
        </p>
        <p className="subtitle">Want to chat about your project?</p>
        <LinkButton href="mailto:dev.adityarao@gmail.com" target="_blank" rel="noopener noreferrer">
          Get in Touch
        </LinkButton>
      </div>
    </SectionIntro>
  </Wrapper>
);
