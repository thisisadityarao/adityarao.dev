import React from 'react';
import styled from 'styled-components';

const SectionAbout = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1.5rem;

  @media (min-width: 576px) {
    padding-top: 4rem;
  }

  & p {
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.5;
    max-width: 35em;
    @media (min-width: 576px) {
      font-size: 1.6rem;
      line-height: 1.6;
    }
  }

  p + p {
    margin-top: 1.2em;

    @media (min-width: 576px) {
      margin-top: 1em;
    }
  }

    & span {
      padding-left: 5px;
      padding-right: 5px;
    }

    & + p {
      font-size: 1.2rem;
      margin-top: 1.2rem;

      @media (min-width: 576px) {
        font-size: 1.5rem;
      }
    }
`;

const SectionWork = styled.section`
  width: 100%;
`;

const Work = styled.div`

  @media (min-width: 1220px) {
    display: flex;
    margin: 0;
    margin-bottom: 4rem;
    padding: 0;
    flex-flow: row wrap;
    justify-content: space-between;

    .work {
      max-width: 850px;
    }
  }
`;

const ImgContainer = styled.div`
  @media (min-width: 1220px) {
    flex: auto;
    background-position: bottom ${props => props.side};
    background-size: 280px 280px;
  }

  @media (min-width: 1300px) {
    background-size: 400px 280px;
  }
`;

const H3 = styled.h3.attrs({
  margin: props => props.size || '1.5rem',
})`
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  margin-top: ${props => props.margin};

  @media (min-width: 576px) {
    font-size: 1.8rem;
  }
`;

const H4 = styled.h4.attrs({
  margin: props => props.size || '2rem',
})`
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 1px;
  margin-top: 3.5rem;
  margin-bottom: ${props => props.margin};

  @media (min-width: 576px) {
    font-size: 1.5rem;
  }
`;

const HR = styled.hr.attrs({
  margin: props => props.size || '3rem',
})`
  height: 6px;
  max-width: 100px;
  border: none;
  margin: 0;
  margin-bottom: ${props => props.margin};
  background: #ff4b6e;
`;

export default () => (
  <SectionAbout id="about">
    <H3>ABOUT ME</H3>
    <HR />
    <p>I’m Aditya Rao, a Front-End Developer.</p>
    <p>
      I help people & organization get the positive attention they deserve, by creating elegant,
      functional and modern websites. My emphasis is on producing thoughtful, conceptually driven
      work that comes from a close understanding of the client and their audience.
    </p>
    <p>
      I’m passionate about technology, design and making peoples lives easier by solving complex
      problems to create user-friendly, intuitive digital products. I’m constantly trying to expand
      and evolve my set of technical skills and apply them to equally varied methods of problem
      solving and understanding.
    </p>
    <H3 size="4rem">WHAT DO I DO?</H3>
    <HR size="2rem" />
    <SectionWork>
      <Work>
        <div className="work">
          <H4 size="1.5rem">
            <span>FRONT-END DEVELOPMENT</span>
          </H4>
          <p>
            As a Front End Developer, I am responsible for converting the design to live, high
            performance, interactive website. I create responsive websites that work across a range
            of devices and browsers. I follow industry coding standards and use the latest tools &
            techniques to create accessible, performant websites.
          </p>
        </div>
        <ImgContainer
          side="right"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/adityar/image/upload/v1544967290/raoaditya.com/Website%20Asset/front-end-development.svg")',
          }}
        />
      </Work>
      <Work>
        <ImgContainer
          side="left"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/adityar/image/upload/v1544967290/raoaditya.com/Website%20Asset/seo.svg")',
          }}
        />
        <div className="work">
          <H4 size="1.5rem">SEARCH ENGINE MARKETING</H4>
          <p>
            For increased traffic, enhanced sales and high page rankings you need effective SEO.
            Every business is unique & so the SEO strategy is also unique. Through comprehensive SEO
            audits & deploying on-page optimization techniques to the site, I remove the flaws &
            optimise the site for search engines and users. With an able PPC campaign, you’ll be
            able to reach out to your target audience and pay only for the clicks you get, thereby
            reducing the total advertising expenditure.
          </p>
        </div>
      </Work>
      <Work>
        <div>
          <H4 size="1.5rem">EMAIL MARKETING</H4>
          <p>
            {' '}
            Email marketing helps you connect with your audience to promote your brand and increase
            sales. You can sell your product, tell a story, or keep prospective clients/customers
            updated with the latest news. I help you build and maintain an engaged subscriber list,
            made up of people who want to receive your messages.
          </p>
        </div>
        <ImgContainer
          side="right"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/adityar/image/upload/v1544967290/raoaditya.com/Website%20Asset/email-marketing.svg")',
          }}
        />
      </Work>
      <Work>
        <ImgContainer
          side="left"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/adityar/image/upload/v1544967290/raoaditya.com/Website%20Asset/social-media-marketing.svg")',
          }}
        />
        <div>
          <H4 size="1.5rem">SOCIAL MEDIA MARKETING</H4>
          <p>
            {' '}
            Social media has emerged as a powerful marketing tool in recent years. Social media
            gives you an insight into what your customers are looking for. I help you connect with
            your target audience, manage your reputation, and boost your brand image.{' '}
          </p>
        </div>
      </Work>
    </SectionWork>
  </SectionAbout>
);
