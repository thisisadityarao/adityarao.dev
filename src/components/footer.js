/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 120px;
  width: 100%;
  padding: 20px;
  background: #f9f9fb;
  border: 1px solid #eeeeee;

  @media (min-width: 768px) {
    padding: 30px 40px;
  }

  & p {
    font-size: 14px;
    margin: 0 auto;
    text-align: center;
    line-height: 1.6;

    @media (min-width: 768px) {
      font-size: 15px;
    }
  }

  & p:first-of-type {
    margin-bottom: 0.8rem;

    @media (min-width: 768px) {
      margin-bottom: 1rem;
    }
  }

  & a:link {
    text-decoration: underline;
    padding-bottom: 1px;
    color: #345cd5;
    text-decoration-skip: ink;
    text-decoration: underline;
  }

  & a:focus,
  & a:hover {
    color: #5e80de;
    outline-width: 0;
  }

  & a:active {
    color: #5e80de;
  }

  & a:visited {
    color: #345cd5;
  }
`;

export default () => (
  <Footer>
    <p>
      Build with <a href="https://www.gatsbyjs.org/">Gatsby</a> and{' '}
      <a href="https://reactjs.org/">React</a>. Hosted on{' '}
      <a href="https://www.netlify.com/">Netlify</a>. The code is open source
      and available at{' '}
      <a href="https://github.com/ad1tyara0/raoaditya.com">Github</a>.
    </p>
    <p>&copy; Aditya Rao - 2019</p>
  </Footer>
);
