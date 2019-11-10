/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/display-name */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const SectionIntro = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
  text-align: left;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }

  & p {
    color: rgba(65, 75, 80, 1);
    line-height: 1.4;
    font-size: 1.4rem;
    max-width: 45rem;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  & .self {
    color: hsl(0, 0%, 11%);
    font-family: 'Fira Sans', sans-serif;
    font-size: 3rem;
    line-height: 1.2;
    font-weight: 300;

    @media (min-width: 768px) {
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
  font-family: 'Fira Sans', sans-serif;
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

const ImgContainer = styled.div`
  align-self: center;

  @media (min-width: 992px) {
    background-repeat: no-repeat;
    height: 400px;
    width: 55%;
    background-position: center center;
    background-size: 400px 350px;
  }
`;

export default () => (
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
    <ImgContainer
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/adityar/image/upload/v1573394935/adityarao/Website%20Assets/do_code_orange.svg")',
      }}
    />
  </SectionIntro>
);
