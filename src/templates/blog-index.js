/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'styled-icons/fa-solid/ArrowRight';
import { Link, graphql } from 'gatsby';
import { Reveal, Animation } from 'react-genie';
import Layout from '../components/layout';

const Wrapper = styled.main`
  height: 100%;
  /* min-height for pages with one or two posts */
  min-height: 702px;
  background: rgb(250, 250, 250);
  padding-top: 3rem;

  & .paginationLink {
    cursor: pointer;
    font-size: 1.1rem;
  }

  & .paginationLink:hover,
  & .paginationLink:active & .paginationLink:focus {
    color: rgb(255, 255, 255);
    background: rgb(0, 105, 237);
  }

  @media (min-width: 576px) {
    padding: 2rem;

    & .paginationLink {
      font-size: 1.3rem;
    }
  }
`;

const BlogListing = styled.section`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;

  @media (min-width: 576px) {
    padding: 4rem 1.5rem;
  }
`;

const H1 = styled.h1`
  font-weight: 900;
  font-size: 2.5rem;
  color: #234361;
  margin-bottom: 3.5rem;
  text-align: center;

  @media (min-width: 576px) {
    font-size: 3rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 1200px) {
    margin-bottom: 5rem;
  }
`;

const Post = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgb(255, 255, 255);
  border: 1px solid #eeeeee;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
    transform: translateY(-3px);
    border-radius: 4px;
    transition: all 0.2s ease-in-out 0s;
  }

  & a {
    font-size: 1.1rem;
  }

  @media (min-width: 576px) {
    padding: 3rem 2rem;
    & a {
      font-size: 1.3rem;
    }
  }
`;

const H2 = styled.h2`
  font-size: 1.8rem;
  font-weight: 900;
  line-height: 1.2;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #4a5a6a;

  @media (min-width: 576px) {
    font-size: 2rem;
  }
`;

const BlogPost = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;

  @media (min-width: 576px) {
    font-size: 1.3rem;
  }
`;

const Arrow = styled(ArrowRight)`
  width: 14px;
  height: 14px;
  margin-left: 2px;
  margin-top: 1px;
`;

const Links = styled(Link)`
  &:link {
    text-decoration: none;
    color: #2a3a4a;
  }
  &:focus,
  &:hover {
    color: #2a3a4a;
  }
  &:active {
    color: #2a3a4a;
  }
  &:visited {
    color: #2a3a4a;
  }
`;

export default ({ data, pageContext }) => {
  const posts = data.allMdx.edges;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/blog' : (currentPage - 1).toString();
  const nextPage = `/blog/${(currentPage + 1).toString()}`;

  return (
    <Layout>
      <Wrapper>
        <BlogListing>
          <H1>Latest Blog Posts</H1>
          {posts.map(({ node }) => {
            return (
              <Reveal animation={Animation.FadeInUp} delay={400}>
                <Links to={node.fields.slug}>
                  <Post key={node.fields.slug}>
                    <H2>{node.frontmatter.title}</H2>
                    <BlogPost>{node.excerpt}</BlogPost>
                    <Links to={node.fields.slug} style={{ color: '#0069ed', fontWeight: '500' }}>
                      Read More <Arrow />
                    </Links>
                  </Post>
                </Links>
              </Reveal>
            );
          })}
        </BlogListing>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyle: 'none',
            maxWidth: '760px',
            margin: 'auto',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            marginBottom: '3rem',
            height: '50px',
          }}
          id="pagination-links"
        >
          {!isFirst && (
            <Links
              to={prevPage}
              rel="prev"
              className="paginationLink"
              style={{
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
              }}
            >
              ← Previous Page
            </Links>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Links
                to={`blog/${i === 0 ? '' : i + 1}`}
                style={{
                  padding: '0.3rem 0.7rem',
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#0069ed' : '',
                  borderRadius: '4px',
                }}
                className="paginationLink"
              >
                {i + 1}
              </Links>
            </li>
          ))}
          {!isLast && (
            <Links
              to={nextPage}
              rel="next"
              className="paginationLink"
              style={{
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
              }}
            >
              Next Page →
            </Links>
          )}
        </ul>
      </Wrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  query PageQuery($skip: Int!, $limit: Int!) {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
