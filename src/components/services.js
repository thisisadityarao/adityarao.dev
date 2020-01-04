/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { between } from 'polished';

const ServiceWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('https://res.cloudinary.com/adityar/image/upload/v1577797341/adityarao/Website%20Assets/so-white.png');
`;

const SectionService = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  @media (min-width: 600px) {
    padding: 5rem 30px;
  }

  @media (min-width: 768px) {
    padding: 6rem 40px;
  }

  & .text p {
    margin-top: 3rem;
    text-align: center;
    font-size: 1rem;
    padding: 0 8%;

    @media (min-width: 900px) {
      font-size: 1.2rem;
      padding: 0 25%;
    }

  & .content {
    display: flex;
    flex-direction: column;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 9rem auto 4rem;

  @media (min-width: 380px) and (max-width: 767px) {
    margin: 4rem 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
`;

const Work = styled.div`
  position: relative;
  width: 100%;
  margin-left: 0;
  margin-right: 0;

  @media (min-width: 768px) {
    flex: 1;
  }

  & p {
    font-size: ${between('16px', '18px')};
    line-height: 1.6;
    text-align: center;
    max-width: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
      text-align: left;
    }
    @media (min-width: 1110px) {
      max-width: 90%;
    }
  }
`;

const ImgContainer = styled.div`
  height: 200px;
  background-position: center center;
  background-size: 200px 200px;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    height: 200px;
    width: 40%;
    margin-right: 1em;
    background-position: center center;
    background-size: 250px 200px;
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

const H4 = styled.h4`
  font-weight: 900;
  font-size: 1.4rem;
  letter-spacing: 1px;
  margin-top: 3.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #38a169;

  @media (min-width: 768px) {
    font-size: 1.8rem;
    margin-top: 0;
    margin-bottom: 3rem;
  }
`;

const Separator = styled.hr`
  border: 0;
  border-bottom: 1px solid #eee;
  background: #eee;
`;

export default () => (
  <ServiceWrapper>
    <SectionService>
      <div className="text">
        <H3>SERVICES I OFFER</H3>
        <p>
          I understand the importance of placing focus on the end goal: delivering a beautiful, functional product to
          the user/client.
        </p>
      </div>
      <div className="content">
        <Section>
          <ImgContainer
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/adityar/image/upload/v1577759414/adityarao/Website%20Assets/dev.svg")',
              backgroundSize: '300px 200px',
            }}
          />

          <Work>
            <H4>
              <span>FRONT-END DEVELOPMENT</span>
            </H4>
            <p>
              {' '}
              <p>
                As a Front End Developer, I am responsible for converting the design to live, high performance,
                interactive website. I create responsive websites that work across a range of devices and browsers. I
                follow industry coding standards and use the latest tools & techniques to create accessible, performant
                websites.
              </p>
            </p>
          </Work>
        </Section>
        <Separator />
        <Section className="reverse">
          <ImgContainer
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/adityar/image/upload/v1577759414/adityarao/Website%20Assets/seo.svg")',
              backgroundSize: '300px 200px',
            }}
          />
          <Work>
            <H4>SEARCH ENGINE OPTIMIZATION</H4>
            <p>
              For increased traffic, enhanced sales and high page rankings you need effective SEO. Every business is
              unique & so the SEO strategy is also unique. Through comprehensive SEO audits & deploying on-page
              optimization techniques to the site, I remove the flaws & optimise the site for search engines and users.
              With an able PPC campaign, you’ll be able to reach out to your target audience and pay only for the clicks
              you get, thereby reducing the total advertising expenditure.
            </p>
          </Work>
        </Section>
        <Separator />
        <Section>
          <ImgContainer
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/adityar/image/upload/v1578114339/adityarao/Website%20Assets/social.svg")',
              backgroundSize: '400px 200px',
            }}
          />
          <Work>
            <H4>SOCIAL MEDIA MARKETING</H4>
            <p>
              Social media has emerged as a powerful marketing tool in recent years. Social media gives you an insight
              into what your customers are looking for. I help you connect with your target audience, manage your
              reputation, and boost your brand image.{' '}
            </p>
          </Work>
        </Section>
      </div>
    </SectionService>
  </ServiceWrapper>
);
