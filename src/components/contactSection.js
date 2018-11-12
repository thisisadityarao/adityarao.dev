import React from 'react';
import styled from 'styled-components';
import { Github } from 'styled-icons/fa-brands/Github';
import { Envelope } from 'styled-icons/fa-regular/Envelope';
import { Twitter } from 'styled-icons/fa-brands/Twitter';
import { ExternalLinkAlt } from 'styled-icons/fa-solid/ExternalLinkAlt';

const SectionContact = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  padding-bottom: 10rem;

  @media (min-width: 576px) {
    padding-top: 4rem;
  }
`;

const H3 = styled.h3.attrs({
  margin: props => props.size || '1.5rem',
})`
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
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

  & li a {
    color: #29384d;

    &:hover {
      opacity: 1;
      color: #3b92de;
    }
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
