import React from 'react';
import styled from 'styled-components';
import { Github } from 'styled-icons/fa-brands/Github';
import { Envelope } from 'styled-icons/fa-regular/Envelope';
import { Twitter } from 'styled-icons/fa-brands/Twitter';
import { ExternalLinkAlt } from 'styled-icons/fa-solid/ExternalLinkAlt';

const SectionContact = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1.5rem;
  padding-bottom: 3rem;

  @media (min-width: 576px) {
    padding-top: 2rem;
  }
`;

const H3 = styled.h3.attrs({
  margin: props => props.size || '1.5rem',
})`
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin-top: ${props => props.margin};

  @media (min-width: 576px) {
    font-size: 1.8rem;
  }
`;

const HR = styled.hr.attrs({
  margin: props => props.size || '3rem',
})`
  height: 6px;
  max-width: 100px;
  border: none;
  margin: 0;
  margin-bottom: ${props => props.margin};
  background-image: linear-gradient(to right, #ff4b6e, #e11665);
  background: #ff4b6e;
`;

const SocialIcons = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 4em;
  padding-left: 0;

  @media (min-width: 786px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5em;
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
    color: #888;
    font-style: normal;
    transition: all 0.2s linear;
    text-decoration: none;

    &:hover {
      color: #2c9cdb;
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
    background: #2c9cdb;
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
    background: #2c9cdb;
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
    padding-right: 5px;
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
    width: 20px;
    height: 20px;
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
