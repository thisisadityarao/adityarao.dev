import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Github } from 'styled-icons/fa-brands/Github';
import { Envelope } from 'styled-icons/fa-regular/Envelope';
import { Twitter } from 'styled-icons/fa-brands/Twitter';
import ListLink from './ListLink';
import MenuClose from './MenuClose';

const slide = keyframes`
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  height: 100vh;
  width: 100%;
  color: #fff;
  z-index: 1000;
  background: #fff;
  animation: ${slide} 0.5s ease-in-out;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavWrapper = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 0px 40px;
  margin: 0 auto;
  margin: 14vh auto;
`;

const SocialMediaWrapper = styled.div`
  margin-top: 7rem;
  display: flex;
  max-width: 100%;
  justify-content: space-around;
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  height: 50%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  background: transparent;

  & li {
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  && a {
    cursor: pointer;
    font-size: 1.8rem;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    display: inline-block;
    padding: 35px 40px;
    width: 100%;
    line-height: 0;
    text-align: center;
    letter-spacing: 2px;
    color: #e91e63;

    @media (min-width: 768px) {
      display: none;
    }
  }

  && a:hover {
    border-bottom: none;
    color: #3798ec;
    background-color: #ffffff;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const GithubAlt = styled(Github)`
  color: #e91e63;
  width: 30px;
  height: 30px;
  vertical-align: middle;

  &:hover {
    color: #3798ec;
  }
`;

const EnvelopeAlt = styled(Envelope)`
  color: #e91e63;
  width: 30px;
  height: 30px;
  vertical-align: middle;

  &:hover {
    color: #3798ec;
  }
`;

const TwitterAlt = styled(Twitter)`
  color: #e91e63;
  width: 30px;
  height: 30px;
  vertical-align: middle;

  &:hover {
    color: #3798ec;
  }
`;

export default props => (
  <Nav>
    <NavWrapper>
      <NavList onClick={props.click}>
        <MenuClose close={props.click} />
        <ListLink to="/">Home</ListLink>
        <ListLink to="#about">About Me</ListLink>
        <ListLink to="/blog/">Blog</ListLink>
        <ListLink to="#contact">Contact</ListLink>
      </NavList>
      <SocialMediaWrapper>
        <a href="mailto:dev.adityarao@gmail.com">
          <EnvelopeAlt />
        </a>
        <a href="https://twitter.com/ad1tyarao">
          <TwitterAlt />
        </a>
        <a href="https://github.com/ad1tyara0">
          <GithubAlt />
        </a>
      </SocialMediaWrapper>
    </NavWrapper>
  </Nav>
);
