/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SectionWork from '../components/services';
import SectionIntro from '../components/intro';
import SectionHireMe from '../components/associate';
import SectionContact from '../components/contact';

const Main = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`;

export default () => (
  <Layout>
    <Main>
      <SectionIntro />
      <SectionWork />
      <SectionHireMe />
      <SectionContact />
    </Main>
  </Layout>
);
