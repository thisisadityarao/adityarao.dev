import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const Wrapper = styled.main`
  height: 100%;
  min-height: 702px;
  width: 100%;
  margin: 0 auto;
`;

const TagListing = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 780px;
  margin: 0 auto;
  padding: 2.5rem 0;

  @media (min-width: 576px) {
    padding: 4rem 1.5rem;
  }
`;
const H2 = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 3.5rem;

  @media (min-width: 576px) {
    font-size: 1.6rem;
  }

  & span {
    display: inline-block;
    padding: 4px 16px;
    border-radius: 4px;
    background-color: rgb(255, 246, 187);
    box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 2px;
  }
`;
const Links = styled(Link)`
  margin-bottom: 50px;
  text-decoration: underline;
  &:link {
    color: #345cd5;
  }
  &:focus,
  &:hover {
    color: #5e80de;
  }
  &:active {
    color: #5e80de;
  }
  &:visited {
    color: #345cd5;
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
            Posts tagged in - <span>{tag}</span>
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
