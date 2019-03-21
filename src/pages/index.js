/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/layout';
import SectionWork from '../components/work';
import SectionIntro from '../components/intro';
import SectionAbout from '../components/about';
import SectionHireMe from '../components/associate';
import SectionContact from '../components/contact';

const PageWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

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
    <PageWrapper>
      <Header />
      <Main>
        <SectionIntro />
        <SectionAbout />
        <SectionWork />
        <SectionHireMe />
        <SectionContact />
      </Main>
      <Footer />
    </PageWrapper>
  </Layout>
);
