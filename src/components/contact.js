/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { Github } from 'styled-icons/fa-brands/Github';
import { Envelope } from 'styled-icons/fa-regular/Envelope';
import { Twitter } from 'styled-icons/fa-brands/Twitter';
import { ExternalLinkAlt } from 'styled-icons/fa-solid/ExternalLinkAlt';

const SectionContact = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 4rem auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const H3 = styled.h3`
  font-size: 1.4rem;
  margin: 0;
  margin-bottom: 0.5rem;
  font-weight: 900;

  @media (min-width: 576px) {
    font-size: 2rem;
  }
`;

const HR = styled.hr`
  height: 4px;
  max-width: 90px;
  border: none;
  margin: 0;
  background: rgb(249, 73, 73);
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
      font-size: 18px;
    }

    &:hover {
      color: #345cd5;
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
    background: #345cd5;
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
    background: #345cd5;

    transition: width 0.5s ease;
  }

  & a:hover::after {
    width: 100%;
    background: transparent;
    transition: all 0s ease;
  }

  & li span {
    font-size: 1.1em;
    padding-left: 15px;
    padding-right: 8px;
    @media (min-width: 1200px) {
      font-size: 1em;
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
  <SectionContact id="contact">
    <H3>CONTACT</H3>
    <HR />
    <SocialIcons>
      <li>
        <a href="mailto:dev.adityarao@gmail.com">
          <EnvelopeAlt />
          <span>dev.adityarao@gmail.com</span>
          <ExternalLink />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/ad1tyarao">
          <TwitterAlt />
          <span>@ad1tyarao</span>
          <ExternalLink />
        </a>
      </li>
      <li>
        <a href="https://github.com/ad1tyara0">
          <GithubAlt />
          <span>@ad1tyarao</span>
          <ExternalLink />
        </a>
      </li>
    </SocialIcons>
  </SectionContact>
);
