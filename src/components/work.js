import React from 'react';
import styled from 'styled-components';

const SectionWork = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 2rem auto;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem auto;

  @media (min-width: 380px) and (max-width: 768px) {
    margin: 4rem 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  &.reverse {
    @media (min-width: 768px) {
      flex-direction: row-reverse;
      text-align: justify;
      hyphens: auto;
    }
  }

  &:not(.reverse) {
    @media (min-width: 768px) {
      height: 284px;
    }
  }
`;

const Work = styled.div`
  width: 100%;
  margin-left: 0;
  margin-right: 0;

  & p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    text-align: left;
    word-break: keep-all;
    hyphens: none;

    @media (max-width: 442px) {
      text-align: left;
    }

    @media (min-width: 380px) and (max-width: 992px) {
      font-size: 1.2rem;
      line-height: 1.6;
    }

    @media (min-width: 992px) {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }

  @media (min-width: 768px) {
    max-width: 55%;
  }
`;

const ImgContainer = styled.div`
  height: 200px;
  background-position: center center;
  background-size: 200px 200px;

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
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const H4 = styled.h4`
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin-top: 3.5rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-top: 0;
  }
`;

const Separator = styled.hr`
  border: 0;
  border-bottom: 1px solid #eee;
  background: #eee;
`;

const HR = styled.hr`
  height: 5px;
  max-width: 60px;
  border: none;
  margin: 1rem;
  margin-left: 0;
  margin-bottom: 5rem;
  background: #f43059;
`;

export default () => (
  <>
    <SectionWork>
      <H3>SERVICES</H3>
      <HR />

      <Section>
        <ImgContainer
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/adityar/image/upload/v1544967290/raoaditya.com/Website%20Asset/front-end-development.svg")',
            backgroundSize: '275px 180px',
          }}
        />
        <Work>
          <H4>
            <span>FRONT-END DEVELOPMENT</span>
          </H4>
          <p>
            As a Front End Developer, I am responsible for converting the design to live, high
            performance, interactive website. I create responsive websites that work across a range
            of devices and browsers. I follow industry coding standards and use the latest tools &
            techniques to create accessible, performant websites.
          </p>
        </Work>
      </Section>
      <Separator />

      <Section className="reverse">
        <ImgContainer
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/adityar/image/upload/v1544967290/raoaditya.com/Website%20Asset/seo.svg")',
          }}
        />
        <Work>
          <H4>SEARCH ENGINE OPTIMIZATION</H4>
          <p>
            For increased traffic, enhanced sales and high page rankings you need effective SEO.
            Every business is unique & so the SEO strategy is also unique. Through comprehensive SEO
            audits & deploying on-page optimization techniques to the site, I remove the flaws &
            optimise the site for search engines and users. With an able PPC campaign, you’ll be
            able to reach out to your target audience and pay only for the clicks you get, thereby
            reducing the total advertising expenditure.
          </p>
        </Work>
      </Section>
      <Separator />

      <Section>
        <ImgContainer
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/adityar/image/upload/v1544967290/raoaditya.com/Website%20Asset/email-marketing.svg")',
          }}
        />
        <Work>
          <H4>EMAIL MARKETING</H4>
          <p>
            {' '}
            Email marketing helps you connect with your audience to promote your brand and increase
            sales. You can sell your product, tell a story, or keep prospective clients/customers
            updated with the latest news. I help you build and maintain an engaged subscriber list,
            made up of people who want to receive your messages.
          </p>
        </Work>
      </Section>
      <Separator />

      <Section className="reverse">
        <ImgContainer
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/adityar/image/upload/v1544967290/raoaditya.com/Website%20Asset/social-media-marketing.svg")',
          }}
        />
        <Work>
          <H4>SOCIAL MEDIA MARKETING</H4>
          <p>
            {' '}
            Social media has emerged as a powerful marketing tool in recent years. Social media
            gives you an insight into what your customers are looking for. I help you connect with
            your target audience, manage your reputation, and boost your brand image.{' '}
          </p>
        </Work>
      </Section>
    </SectionWork>
  </>
);
