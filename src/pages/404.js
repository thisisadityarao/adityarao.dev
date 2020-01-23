/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const ImgContainer = styled.div`
  background-repeat: no-repeat;
  height: 400px;
  margin: 4rem 1rem 1rem;
  background-position: center center;
  background-size: 400px 350px;
`;
const P = styled.p`
  font-size: 1.3rem;
  text-align: center;
  width: 50%;
  margin: 0 auto 6.5rem;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Main = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  width: 100%;
  max-width: 1280px;

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  & a:link {
    text-decoration: none;
    border-bottom: 1px solid rgb(0, 105, 237);
    padding: 2px 2px 1px;
    color: rgb(0, 105, 237);
    transition: all 150ms linear 0s;
  }

  & a:visited {
    background-color: transparent;
    color: rgb(0, 105, 237);
  }

  & a:hover {
    background-color: rgb(0, 105, 237);
    color: rgb(255, 255, 255);
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

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <Main>
          <ImgContainer
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/adityar/image/upload/v1573394935/adityarao/website/404_orange.svg")',
            }}
          />
          <P>
            Let&apos;s go <Link to="/">Home</Link>
          </P>
        </Main>
      </Layout>
    );
  }
}

export default NotFoundPage;
