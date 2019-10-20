/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { Reveal, Animation } from 'react-genie';

const Footer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 160px;
  width: 100%;
  padding: 2rem 1rem;
  background: #fafafa;
  border-top: 1px solid #eeeeee;

  @media (min-width: 768px) {
    padding: 30px 40px;
  }

  & p {
    font-size: 16px;
    margin: 0 auto;
    text-align: center;
    line-height: 1.6;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }

  & p:first-of-type {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;

    @media (min-width: 768px) {
      margin-bottom: 1rem;
    }
  }

  & a:link {
    text-decoration: none;
    border-bottom: 1px solid rgb(0, 105, 237);
    padding: 2px 2px 1px;
    color: rgb(0, 105, 237);
    transition: all 150ms linear 0s;
  }

  & a:visited {
    background-color: transparent;
    color: rgb(0, 105, 237);
  }

  & a:focus,
  & a:hover {
    background-color: rgb(0, 105, 237);
    color: rgb(255, 255, 255);
    outline: 0px;
    text-decoration: none;
  }

  & a:active {
    color: #0053ba;
  }
`;

export default () => (
  <Footer className="footer">
    <Reveal animation={Animation.FadeInUp} delay={400}>
      <p>
        Build with <a href="https://www.gatsbyjs.org/">Gatsby</a> and <a href="https://reactjs.org/">React</a>. Hosted
        on <a href="https://www.netlify.com/">Netlify</a>. The code is open source and available at{' '}
        <a href="https://github.com/ad1tyara0/raoaditya.com">Github</a>.
      </p>
      <p>&copy; Aditya Rao - 2019</p>
    </Reveal>
  </Footer>
);
