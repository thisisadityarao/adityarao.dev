/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/utils/seo';
import SectionService from '../components/services';
import SectionWork from '../components/work';
import ProjectWork from '../components/project';
import SectionHireMe from '../components/associate';
import SectionIntro from '../components/intro';

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
      <SectionService />
      <SectionWork />
      <ProjectWork />
      <SectionHireMe />
    </Main>
  </Layout>
);
