import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const Wrapper = styled.main`
  min-height: 100%;
  flex: 1 0 auto;
`;

const BlogListing = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;

  @media (min-width: 576px) {
    padding: 4rem 1.5rem;
  }
`;

const BlogPost = styled.p`
  margin-bottom: 3rem;
  @media (min-width: 576px) {
    margin-bottom: 3.5rem;
  }
`;

const Date = styled.p`
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
  border-radius: 0.1rem;
  text-decoration: underline;
  line-height: 1.2;
  padding: 0.1rem 0.2rem;

  @media (min-width: 576px) {
    font-size: 1rem;
  }
`;

const H2 = styled.h2`
  font-size: 1rem;
  margin-top: 0.3rem;
  margin-bottom: 0.6rem;

  @media (min-width: 576px) {
    font-size: 1.4rem;
  }
`;

const ArticleLink = styled(Link)`
  &:link {
    text-decoration: none;
    color: rgb(59, 146, 222);
  }
  &:focus,
  &:hover {
    color: rgb(59, 146, 222);
  }
  &:active {
    color: rgb(59, 146, 222);
  }
  &:visited {
    color: rgb(59, 146, 222);
  }
`;

export default ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/blog' : (currentPage - 1).toString();
  const nextPage = `/blog/${(currentPage + 1).toString()}`;

  return (
    <Layout>
      <Wrapper>
        <BlogListing>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug;
            return (
              <div key={node.fields.slug}>
                <H2>
                  <ArticleLink style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </ArticleLink>
                </H2>
                <Date>{node.frontmatter.date}</Date>
                <BlogPost dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
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
            maxWidth: '1000px',
            margin: 'auto',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`blog/${i === 0 ? '' : i + 1}`}
                style={{
                  padding: '0.5em',
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#007acc' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </ul>
      </Wrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
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
