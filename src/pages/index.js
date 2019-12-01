/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
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
`;

export default () => (
  <Layout>
    <SEO title="Aditya Rao - Main" keywords={[`blog`, `gatsby`, `javascript`, `react`, `webdev`, `frontend`]} />
    <Main>
      <SectionIntro />
      <SectionWork />
      <SectionHireMe />
      <SectionContact />
    </Main>
  </Layout>
);
