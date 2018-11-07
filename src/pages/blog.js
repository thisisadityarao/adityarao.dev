import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const MainContainer = styled.main`
  min-height: 100%;
  height: calc(100vh - 235px);

  & h1 {
    margin-top: 0;
    padding-top: 3rem;
    text-align: center;
    font-weight: 300;
  }
`;

export default () => (
  <Layout>
    <MainContainer>
      <h1>🚧 Work In Progress! 🚧</h1>
    </MainContainer>
  </Layout>
);
