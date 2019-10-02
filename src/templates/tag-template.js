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
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 2.5rem 20px;

  @media (min-width: 576px) {
    padding: 4rem 30px;
  }
`;
const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 3.5rem;

  @media (min-width: 576px) {
    font-size: 1.8rem;
  }

  & span {
    color: #F44336;
    font-weight: 700;
    display: inline-block;
    text-decoration: underline;
  }
`;
const Links = styled(Link)`
  margin-bottom: 50px;
  font-size: 1.1rem;
  text-decoration: underline;
  &:link {
    color: rgb(0, 105, 237);
  }
  &:focus,
  &:hover {
    color: #5e80de;
  }
  &:active {
    color: #5e80de;
  }
  &:visited {
    color: rgb(0, 105, 237);
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

function Tags({ data, pageContext }) {
  const posts = data.allMdx.edges;
  const { tag } = pageContext;
  return (
    <Layout>
      <Wrapper>
        <TagListing>
          <H1>
            Posts tagged in - <span>#{tag}</span>
          </H1>

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
    allMdx(
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
