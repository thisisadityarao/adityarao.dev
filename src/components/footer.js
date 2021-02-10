/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { Github } from '@styled-icons/fa-brands/Github';
import { Twitter } from '@styled-icons/fa-brands/Twitter';
import Wrapper from './wrapper-background';

const Footer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 3rem 20px;
  background: #fafafa;

  border-top: 1px solid #eeeeee;

  @media (min-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 768px) {
    padding: 1rem 40px;
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
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }

  & a:link {
    text-decoration: underline;
    padding: 2px 2px 1px;
    color: #3740ff;
    transition: all 150ms linear 0s;
  }

  & a:visited {
    background-color: transparent;
    color: #3740ff;
  }

  & a:hover {
    outline: 0px;
    text-decoration: none;
  }

  & a:active {
    color: #0053ba;
  }

  & a:focus {
    outline: 3px dotted;
  }
`;

const SocialIcons = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: space-around;
  margin-top: 2rem;
  padding-left: 0;

  & li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  && a {
    display: inline-block;
    color: rgba(0, 0, 0, 0.7);
    font-size: 18px;
    font-style: normal;
    transition: all 0.2s linear;
    text-decoration: none;

    @media (min-width: 768px) {
      font-size: 20px;
    }

    &:hover {
      color: rgb(0, 105, 237);
    }
  }
`;

const GithubAlt = styled(Github)`
  width: 22px;
  height: 22px;
  vertical-align: middle;

  @media (min-width: 1200px) {
    width: 25px;
    height: 25px;
  }
`;

const TwitterAlt = styled(Twitter)`
  width: 22px;
  height: 22px;
  vertical-align: middle;

  @media (min-width: 1200px) {
    width: 25px;
    height: 25px;
  }
`;

export default () => (
  <Wrapper>
    <Footer className="footer">
      <>
        <p>
          Build with{' '}
          <a href="https://www.gatsbyjs.org/" aria-label="Visit Gatsby website">
            Gatsby
          </a>
          . Hosted on{' '}
          <a href="https://www.netlify.com/" aria-label="Visit Netlify">
            Netlify
          </a>
          . The code is open source and available at{' '}
          <a href="https://github.com/ad1tyara0/raoaditya.com" aria-label="Visit GitHub profile of Aditya Rao">
            Github
          </a>
          .
        </p>
        <p>&copy; Aditya Rao - 2020</p>
      </>
      <SocialIcons>
        <li>
          <a href="mailto:dev.adityarao@gmail.com">
            <TwitterAlt />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/thisisadityarao">
            <GithubAlt />
          </a>
        </li>
      </SocialIcons>
    </Footer>
  </Wrapper>
);
