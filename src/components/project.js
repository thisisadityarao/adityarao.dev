/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid #eeeeee;
  background: #fafafa;
`;

const ProjectWork = styled.section`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 80px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const Text = styled.div`
  & p {
    margin-top: 3rem;
    text-align: center;
    font-size: 1rem;
    padding: 0 8%;
    margin-bottom: 1rem;

    @media (min-width: 900px) {
      font-size: 1.2rem;
      padding: 0 25%;
    }
`;

const CardWrapper = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  display: flex;
  flex-direction: column;
  max-width: 660px;
  min-height: auto;
  border-radius: 8px;
  display: block;
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.2s;
  margin: 0 auto;

  & :hover {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 660px) {
    flex-direction: row;
  }
`;

const H3 = styled.h3`
  letter-spacing: 1px;
  word-spacing: 3px;
  font-weight: 900;
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  color: #696969e3;
  font-family: 'IBM Plex Sans';

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Card = styled.div`
  padding: 32px;
`;

const Cover = styled.div`
  background-color: #f8f9fa;
  background: linear-gradient(135deg, #17ead9 0%, #6078ea 100%);
  border: 1px solid #dadce0;

  width: 596px;
  height: 208px;
  margin: 0 0 1.3rem;
  padding: 0;
  text-align: center;

  @media (max-width: 660px) {
    width: 360px;
  }

  & h1 {
    margin: 5rem 0 0;
    color: #fff;
    font: 900 24px / 1.33333 'IBM Plex Sans', sans-serif;
  }
`;

const Description = styled.div`
  & p {
    margin: 16px 0;
  }
`;

export default () => (
  <Wrapper>
    <ProjectWork>
      <Text>
        <H3>PROJECTS</H3>
        <p>Some of my projects.</p>
      </Text>
      <Content>
        <CardWrapper href="https://github.com/thisisadityarao/simple-responsive-grid">
          <Card>
            <Cover>
              <h1>Simple Responsive Grid</h1>
            </Cover>
            <Description>
              <p>Simple responsive grid with max-width of 1440px.</p>
            </Description>
          </Card>
        </CardWrapper>
        <CardWrapper href="https://github.com/thisisadityarao/react-scroll-progress-bar">
          {' '}
          <Card>
            <Cover>
              <h1>React Scroll Progress Bar</h1>
            </Cover>
            <Description>
              <p>React Component for a fixed scroll progress bar.</p>
            </Description>
          </Card>
        </CardWrapper>
        <CardWrapper href="https://github.com/thisisadityarao/adityarao.dev">
          {' '}
          <Card>
            <Cover>
              <h1>Personal Website</h1>
            </Cover>
            <Description>
              <p>This website created using GatsbyJS.</p>
            </Description>
          </Card>
        </CardWrapper>
        <CardWrapper href="https://github.com/thisisadityarao/react-social-media-cards">
          {' '}
          <Card>
            <Cover>
              <h1>React Social Media Cards</h1>
            </Cover>
            <Description>
              <p>Card components used on Socia Media.</p>
            </Description>
          </Card>
        </CardWrapper>
        <CardWrapper href="https://github.com/thisisadityarao/simple-react-calculator">
          {' '}
          <Card>
            <Cover>
              <h1>Simple React Calculator</h1>
            </Cover>
            <Description>
              <p>Simple Calculator App created using React</p>
            </Description>
          </Card>
        </CardWrapper>
      </Content>
    </ProjectWork>
  </Wrapper>
);
