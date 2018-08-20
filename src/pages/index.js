import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/device';
import Layout from '../components/layout';

const MainWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export default () => (
  <Layout>
    <MainWrapper>
      <main>
        <h2>Hello!</h2>
        <p>I’m Aditya Rao a freelance front-end developer &amp; designer.</p>
        <p>
          I help people &amp; organization get the positive attention they
          deserve by creating elegant, functional and modern websites.
        </p>
      </main>
    </MainWrapper>
  </Layout>
);
