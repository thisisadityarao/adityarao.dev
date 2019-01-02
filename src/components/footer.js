import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  height: 120px;
  width: 100%;
  border: 1px solid #eeeeee;

  & p {
    font-size: 80%;
    margin: auto;
    margin-top: 50px;
    text-align: center;
    line-height: 1.5;
  }

  & a:link {
      text-decoration: underline;
      padding-bottom: 1px;
      color: #f43059;
    }

  & a:focus,
  & a:hover {
    color: #ff4b6e;
  }

  & a:active {
    color: #f43059;
  }

  & a:visited {
    color: #f43059;
  }
`;

export default () => (
  <Footer>
    <p>
      Build with <a href="https://www.gatsbyjs.org/">Gatsby</a> and{' '}
      <a href="https://reactjs.org/">React</a>. Hosted on{' '}
      <a href="https://www.netlify.com/">Netlify</a>. The code is open source and available at{' '}
      <a href="https://github.com/ad1tyara0/raoaditya.com">Github</a>.
    </p>
  </Footer>
);
