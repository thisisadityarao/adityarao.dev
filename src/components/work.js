/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const SectionWork = styled.section`
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
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  counter-reset: my-awesome-counter;

  @media (min-width: 880px) {
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

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 440px;
  min-height: auto;
  border-radius: 8px;
  display: block;
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.2s;
  margin: 0 auto;
`;

const Card = styled.div`
  padding: 32px;
`;

const Cover = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #dadce0;
  height: 208px;
  margin: 0 0 1.3rem;
  padding: 0;
  overflow: hidden;
  text-align: center;

  & img {
    height: 100%;
    object-fit: contain;
    width: 100%;
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
  }
`;

const Description = styled.div`
  & h1 {
    counter-increment: my-awesome-counter;
    margin: 0 0 1rem;
    font: 400 24px / 1.33333 'IBM Plex Sans', sans-serif;
  }

  & h1:before {
    content: '0' counter(my-awesome-counter);
    font-weight: bold;
    font-size: 3rem;
    margin-right: 1rem;
    line-height: 1;
    color: #38a169;
  }
  p {
    margin: 16px 0;
  }
`;

export default () => (
  <Wrapper>
    <SectionWork>
      <Text>
        <H3>HOW I WORK</H3>
        <p>
          My development process.
          <span role="img" aria-label="coder">
            👨‍💻
          </span>
        </p>
      </Text>
      <Content>
        <CardWrapper>
          <Card>
            <Cover>
              <img
                src="https://res.cloudinary.com/adityar/image/upload/v1579751054/adityarao/website/planning.png"
                alt=""
              />
            </Cover>
            <Description>
              <h1>Planning</h1>
              <p>
                <b>Client Requirements, Resource Allocation, Selection of Technology Stack.</b> I work to identify all
                your requirements, and make sure that there are no gaps between your expectations and what is delivered.
              </p>
            </Description>
          </Card>
        </CardWrapper>
        <CardWrapper>
          {' '}
          <Card>
            <Cover>
              <img
                src="https://res.cloudinary.com/adityar/image/upload/v1579751054/adityarao/website/prototype.png"
                alt=""
              />
            </Cover>
            <Description>
              <h1>Design/Prototype</h1>
              <p>
                <b>UI, Design Branding, Prototype Approval.</b> I work with design assets such as wireframe, template,
                copywrite, images, branding, provided by client. If not, then we work together with a designer to create
                a fresh, unique brand for you.
              </p>
            </Description>
          </Card>
        </CardWrapper>
        <CardWrapper>
          {' '}
          <Card>
            <Cover>
              <img
                src="https://res.cloudinary.com/adityar/image/upload/v1579751054/adityarao/website/coding.png"
                alt=""
              />
            </Cover>
            <Description>
              <h1>Development</h1>
              <p>
                <b>Environment Setup, Hard-Coding, Follow Best Practices.</b> I code the website while keeping you
                updated adbout the progress. I am a strong proponent of frequent communication, which helps us maintain
                a short feedback loop.
              </p>
            </Description>
          </Card>
        </CardWrapper>
        <CardWrapper>
          {' '}
          <Card>
            <Cover>
              <img
                src="https://res.cloudinary.com/adityar/image/upload/v1579751055/adityarao/website/testing.png"
                alt=""
              />
            </Cover>
            <Description>
              <h1>Testing</h1>
              <p>
                <b>Manual and Automation Testing,Checking Compatibility,W3C & SEO Friendly.</b> I test the website for
                accessibility issues, performance bugs for any opportunity to optimize the website.
              </p>
            </Description>
          </Card>
        </CardWrapper>
        <CardWrapper>
          {' '}
          <Card>
            <Cover>
              <img
                src="https://res.cloudinary.com/adityar/image/upload/v1579751055/adityarao/website/release.png"
                alt=""
              />
            </Cover>
            <Description>
              <h1>Release</h1>
              <p>
                <b>Server Setup, Configuration & Deployment, Key Handover.</b> I make sure that the development of your
                project is always on track, and will be happy to discuss any concerns you might have.
              </p>
            </Description>
          </Card>
        </CardWrapper>
        <CardWrapper>
          {' '}
          <Card>
            <Cover>
              <img
                src="https://res.cloudinary.com/adityar/image/upload/v1579751056/adityarao/website/maintenance.png"
                alt=""
              />
            </Cover>
            <Description>
              <h1>Maintainence</h1>
              <p>
                <b>Bug Fixes, Content Update, Feature Request.</b> Web development project doesn’t stop when the final
                product is delivered. Should you choose to avail the maintainence service I will work to keep your
                website up and running so you can focus on your business goals.
              </p>
            </Description>
          </Card>
        </CardWrapper>
      </Content>
    </SectionWork>
  </Wrapper>
);
