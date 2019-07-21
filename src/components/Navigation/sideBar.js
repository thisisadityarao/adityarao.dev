import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  a {
    color: white;
    font-size: 22px;
    margin: 10px 0;
    padding: 10px;
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
  position: absolute;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: linear-gradient(-20deg, #288cff 0%, #8200ff 100%);
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
    </Wrapper>
  );
}
