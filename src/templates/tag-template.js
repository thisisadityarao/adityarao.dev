import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const Wrapper = styled.main`
  min-height: 100%;
  width: 100%;
  margin: 0 auto;
`;

const TagListing = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  @media (min-width: 576px) {
    padding: 4rem 1.5rem;
  }
`;
const H2 = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 3.5rem;

  @media (min-width: 576px) {
    font-size: 1.6rem;
  }

  & span {
    display: inline-block;
    padding: 1px 8px;
    border-radius: 5px;
    background-color: rgb(255, 246, 187);
    color: #333;
  }
`;
const Links = styled(Link)`
  margin-bottom: 50px;
  text-decoration: underline;
  &:link {
    color: #f43059;
  }
  &:focus,
  &:hover {
    color: #f43059;
  }
  &:active {
    color: #f43059;
  }
  &:visited {
    color: #f43059;
  }
`;

function Tags({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges;
  const { tag } = pageContext;
  return (
    <Layout>
      <Wrapper>
        <TagListing>
          <H2>
            Available posts in - <span>{tag}</span>
          </H2>

          {posts.map(({ node }, i) => (
            <Links to={node.fields.slug} key={i}>
              {node.frontmatter.title}
            </Links>
          ))}
        </TagListing>
      </Wrapper>
    </Layout>
  );
}

export default Tags;

export const query = graphql`
  query TagsQuery($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
