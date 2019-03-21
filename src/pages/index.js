/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SectionWork from '../components/work';
import SectionIntro from '../components/intro';
import SectionAbout from '../components/about';
import SectionHireMe from '../components/associate';
import SectionContact from '../components/contact';

const Main = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1440px;

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`;

export default () => (
  <Layout>
    <Main>
      <SectionIntro />
      <SectionAbout />
      <SectionWork />
      <SectionHireMe />
      <SectionContact />
    </Main>
  </Layout>
);
