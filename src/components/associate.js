/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fefefe;
  background-image: url('https://res.cloudinary.com/adityar/image/upload/v1577797341/adityarao/Website%20Assets/so-white.png');
`;

const SectionHireMe = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  padding-top: 5rem;
  padding-bottom: 6rem;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  & h3 {
    font-family: 'Bree Serif', serif;
    font-weight: 900;
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 2rem;

    @media (min-width: 576px) {
      font-size: 3rem;
      margin-bottom: 3rem;
    }
  }

  & p {
    font-size: 1.2rem;
    line-height: 1.45;
    max-width: 30em;
    text-align: center;
    padding-left: 0.6em;
    padding-right: 0.6em;
    margin: 0 auto;
    margin-bottom: 3rem;

    @media (min-width: 576px) {
      font-size: 1.6rem;
      line-height: 1.5;
      margin-bottom: 3.5rem;
    }
  }
`;

const EmailButton = styled.a`
  cursor: pointer;
  display: inline-block;
  border: none;
  margin: 0 auto;
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

export default () => (
  <Wrapper>
    <SectionHireMe className="hire">
      <h3>Let&apos;s talk about your project.</h3>
      <p>
        I&apos;m currently seeking short-term projects. If you are interested in a new project or collaboration, send me
        an email.
      </p>
      <EmailButton href="mailto:dev.adityarao@gmail.com" target="_blank" rel="noopener noreferrer">
        Send Email
      </EmailButton>
    </SectionHireMe>
  </Wrapper>
);
