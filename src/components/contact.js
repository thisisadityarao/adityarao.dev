/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { Github } from 'styled-icons/fa-brands/Github';
import { Envelope } from 'styled-icons/fa-regular/Envelope';
import { Twitter } from 'styled-icons/fa-brands/Twitter';
import { ExternalLinkAlt } from 'styled-icons/fa-solid/ExternalLinkAlt';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const SectionContact = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 5rem auto;
  padding: 2rem 20px;

  @media (min-width: 600px) {
    padding: 2rem 30px;
  }

  @media (min-width: 768px) {
    padding: 2rem 40px;
  }
`;

const H3 = styled.h3`
  position: relative;
  letter-spacing: 0.1rem;
  font-weight: 900;
  font-size: 2rem;
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0 0 15px 0;

  &:after {
    display: block;
    width: 100px;
    height: 5px;
    background: #e4004e;
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
  }

  @media (min-width: 768px) {
    font-size: 3rem;

    &:after {
      width: 165px;
    }
  }
`;

const SocialIcons = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  padding-left: 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5rem;
  }

  & li {
    margin: 0;
    margin-bottom: 2em;
    padding: 0;
    list-style-type: none;
  }

  & a {
    display: inline-block;
    position: relative;
    padding-bottom: 3px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    color: #4a5a6a;
    font-size: 16px;
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

  & a::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    transition: width 0s ease, background 0.5s ease;
  }

  & a:hover::before {
    width: 100%;
    background: rgb(0, 105, 237);
    transition: width 0.5s ease;
  }

  & a::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background: rgb(0, 105, 237);

    transition: width 0.5s ease;
  }

  & a:hover::after {
    width: 100%;
    background: transparent;
    transition: all 0s ease;
  }

  & li span {
    font-size: 1.2rem;
    padding-left: 15px;
    padding-right: 8px;
    @media (min-width: 1200px) {
      font-size: 1.5rem;
    }
  }
`;

const GithubAlt = styled(Github)`
  width: 20px;
  height: 20px;
  vertical-align: middle;

  @media (min-width: 1200px) {
    width: 25px;
    height: 25px;
  }
`;

const EnvelopeAlt = styled(Envelope)`
  width: 20px;
  height: 20px;
  vertical-align: middle;

  @media (min-width: 1200px) {
    width: 25px;
    height: 25px;
  }
`;

const TwitterAlt = styled(Twitter)`
  width: 20px;
  height: 20px;
  vertical-align: middle;

  @media (min-width: 1200px) {
    width: 25px;
    height: 25px;
  }
`;

const ExternalLink = styled(ExternalLinkAlt)`
  width: 15px;
  height: 15px;

  @media (min-width: 1200px) {
    width: 17px;
    height: 17px;
  }
`;

export default () => (
  <Wrapper>
    <SectionContact id="contact">
      <H3>CONTACT</H3>
      <SocialIcons>
        <li>
          <a href="mailto:dev.adityarao@gmail.com">
            <EnvelopeAlt />
            <span>dev.adityarao@gmail.com</span>
            <ExternalLink />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/thisisadityarao">
            <TwitterAlt />
            <span>@thisisadityarao</span>
            <ExternalLink />
          </a>
        </li>
        <li>
          <a href="https://github.com/thisisadityarao">
            <GithubAlt />
            <span>@thisisadityarao</span>
            <ExternalLink />
          </a>
        </li>
      </SocialIcons>
    </SectionContact>
  </Wrapper>
);
