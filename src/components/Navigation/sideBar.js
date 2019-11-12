import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const UnderText = styled.span`
  font-family: 'Bree serif', serif;
  text-transform: uppercase;
  pointer-events: none;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32vw;
  color: #fff;
`;

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  a {
    color: white;
    font-size: 1.6rem;
    font-weight: 500;
    margin: 5vh 0;
    padding: 15px;
    border-radius: 5px;
    text-decoration: none;
    :hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
  .active {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #e4004e;
`;

export default function SideBar(props) {
  const { bodyscrolllock, toggle } = props;
  bodyscrolllock();
  return (
    <Wrapper>
      <Container>
        <Link aria-label="View home page" to="/" activeClassName="active" onClick={toggle}>
          Home
        </Link>
        <Link aria-label="View about page" to="/about/" activeClassName="active" onClick={toggle}>
          About
        </Link>
        <Link aria-label="View blog page" to="/blog/" activeClassName="active" onClick={toggle}>
          Blog
        </Link>
        <Link aria-label="View contact page" to="#contact" activeClassName="active" onClick={toggle}>
          Contact
        </Link>
      </Container>
      <UnderText>Menu</UnderText>
    </Wrapper>
  );
}
