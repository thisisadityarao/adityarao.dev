/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { Reveal, Animation } from "react-genie";

const SectionWork = styled.section`
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 9rem auto 4rem;

  @media (min-width: 380px) and (max-width: 768px) {
    margin: 4rem 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
`;

const Work = styled.div`
  width: 100%;
  margin-left: 0;
  margin-right: 0;

  & p {
    font-size: 1.1rem;
    line-height: 1.6;
    text-align: center;
    max-width: 35rem;
    margin: 0 auto;

    @media (min-width: 768px) {
      text-align: left;
      max-width: 65%;
    }

    @media (min-width: 1024px) {
      font-size: 1.3rem;
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
    background-position: center center;
    background-size: 250px 200px;
  }

  @media (min-width: 1200px) {
    height: 200px;
    background-size: 250px 200px;
  }
`;

const H3 = styled.h3`
  position: relative;
  letter-spacing: 0.1rem;
  font-weight: 900;
  font-size: 1.8rem;
  margin: 0;
  margin-bottom: 8.5rem;
  padding: 0 0 15px 0;

  &:after {
    display: block;
    width: 100px;
    height: 5px;
    background: #ff6433;
    position: absolute;
    bottom: 5px;
    left: 0;
    content: "";
  }

  @media (min-width: 768px) {
    font-size: 3rem;

    &:after {
      width: 165px;
    }
  }
`;

const H4 = styled.h4`
  font-weight: 900;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  margin-top: 3.5rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.6rem;
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
  <>
    <SectionWork>
      <Reveal animation={Animation.FadeIn}>
        <H3>SERVICES</H3>
      </Reveal>
      <Reveal animation={Animation.SlideInLeft}>
        <Section>
          <ImgContainer
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/adityar/image/upload/v1571462366/adityarao/Website%20Assets/developer.svg")',
              backgroundSize: "275px 180px"
            }}
          />

          <Work>
            <H4>
              <span>FRONT-END DEVELOPMENT</span>
            </H4>
            <p>
              As a Front End Developer, I am responsible for converting the
              design to live, high performance, interactive website. I create
              responsive websites that work across a range of devices and
              browsers. I follow industry coding standards and use the latest
              tools & techniques to create accessible, performant websites.
            </p>
          </Work>
        </Section>
      </Reveal>
      <Separator />
      <Reveal animation={Animation.SlideInLeft}>
        <Section className="reverse">
          <ImgContainer
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/adityar/image/upload/v1571462366/adityarao/Website%20Assets/seo_asset.svg")'
            }}
          />
          <Work>
            <H4>SEARCH ENGINE OPTIMIZATION</H4>
            <p>
              For increased traffic, enhanced sales and high page rankings you
              need effective SEO. Every business is unique & so the SEO strategy
              is also unique. Through comprehensive SEO audits & deploying
              on-page optimization techniques to the site, I remove the flaws &
              optimise the site for search engines and users. With an able PPC
              campaign, you’ll be able to reach out to your target audience and
              pay only for the clicks you get, thereby reducing the total
              advertising expenditure.
            </p>
          </Work>
        </Section>
      </Reveal>
      <Separator />
      <Reveal animation={Animation.SlideInLeft}>
        <Section className="reverse">
          <ImgContainer
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/adityar/image/upload/v1571462366/adityarao/Website%20Assets/social_media.svg")'
            }}
          />
          <Work>
            <H4>SOCIAL MEDIA MARKETING</H4>
            <p>
              {" "}
              Social media has emerged as a powerful marketing tool in recent
              years. Social media gives you an insight into what your customers
              are looking for. I help you connect with your target audience,
              manage your reputation, and boost your brand image.{" "}
            </p>
          </Work>
        </Section>
      </Reveal>
    </SectionWork>
  </>
);
