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

const Posts = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;

  .note {
    margin-right: 0.7rem;
  }
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
  margin-bottom: 5rem;

  @media (min-width: 576px) {
    font-size: 1.8rem;
  }

  & span {

    color: #ff6433;
    font-weight: 700;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    display: inline-block;
  }
`;
const Links = styled(Link)`
  margin-bottom: 50px;
  font-size: 1.2rem;
  text-decoration: none;

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
    font-size: 1.5rem;
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
            <Posts>
              <span className="note">📝</span>
              <Links to={node.fields.slug} key={i}>
                {node.frontmatter.title}
              </Links>
            </Posts>
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
