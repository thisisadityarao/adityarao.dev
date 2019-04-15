/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'styled-icons/fa-solid/ArrowRight';
import get from 'lodash/get';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const Wrapper = styled.main`
  height: 100%;
  min-height: 702px;
  background: rgb(250, 250, 250);
`;

const Arrow = styled(ArrowRight)`
  width: 14px;
  height: 14px;
  margin-left: 2px;
  margin-top: 1px;
`;

const BlogListing = styled.section`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 2.5rem 0.5rem;

  @media (min-width: 576px) {
    padding: 4rem 1.5rem;
  }
`;

const BlogPost = styled.p`
  margin-bottom: 1rem;
`;

const H2 = styled.h2`
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #4a5a6a;

  @media (min-width: 576px) {
    font-size: 1.5rem;
  }

  &.page-header {
    font-weight: 900;
    font-size: 1.4rem;
    color: #234361;
    margin-bottom: 3.5rem;
    padding-left: 16px;

    @media (min-width: 576px) {
      margin-bottom: 4rem;
      font-size: 1.8rem;
    }

    @media (min-width: 1200px) {
      margin-bottom: 5rem;
    }
  }
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

const Post = styled.div`
  margin-bottom: 3rem;
  padding: 24px 16px;
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
`;

export default ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? '/blog' : (currentPage - 1).toString();
  const nextPage = `/blog/${(currentPage + 1).toString()}`;

  return (
    <Layout>
      <Wrapper>
        <BlogListing>
          <H2 className="page-header">Latest Blog Posts</H2>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug;
            return (
              <Links to={node.fields.slug}>
                <Post key={node.fields.slug}>
                  <H2>
                    <Links style={{ boxShadow: 'none' }} to={node.fields.slug}>
                      {title}
                    </Links>
                  </H2>
                  <BlogPost
                    dangerouslySetInnerHTML={{ __html: node.excerpt }}
                  />
                  <Links
                    to={node.fields.slug}
                    style={{ color: '#345cd5', fontWeight: '500' }}
                  >
                    Read More <Arrow />
                  </Links>
                </Post>
              </Links>
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
            <Links to={prevPage} rel="prev" style={{ cursor: 'pointer' }}>
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
                  cursor: 'pointer',
                  padding: '0.2em 0.6em',
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#f94949' : '',
                  borderRadius: '4px',
                }}
              >
                {i + 1}
              </Links>
            </li>
          ))}
          {!isLast && (
            <Links to={nextPage} rel="next" style={{ cursor: 'pointer' }}>
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
