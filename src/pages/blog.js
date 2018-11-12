import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPostLink = styled(Link)`
  color: #29384d;
  text-decoration: none;

  :visited {
    color: #29384d;
  }

  :focus,
  :hover {
    color: #3b92de;
  }

  :active {
    color: #29384d;
  }
`;

const Wrapper = styled.main`
  min-height: 100%;
`;

const BlogList = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const BlogPost = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 576px) {
    margin-bottom: 3rem;
  }
`;

const Date = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.2rem;

  @media (min-width: 576px) {
    font-size: 1rem;
  }
`;

const H2 = styled.h2`
  font-size: 1rem;
  margin-top: 0.3rem;
  margin-bottom: 1.5rem;

  @media (min-width: 576px) {
    font-size: 1.4rem;
  }
`;

export default ({ data }) => (
  <Layout>
    <Wrapper>
      <BlogList>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogPost key={node.id}>
            <BlogPostLink to={node.fields.slug}>
              <Date>{node.frontmatter.date}</Date>
              <H2>{node.frontmatter.title}</H2>
            </BlogPostLink>
          </BlogPost>
        ))}
      </BlogList>
    </Wrapper>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
