import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const Wrapper = styled.main`
  min-height: 100%;
  width: 100%;
  margin: 0 auto;
`;

const TagSection = styled.div`
  width: 100%;
  width: 80%;
  max-width: 1000px;
  margin: 2rem auto;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

const Links = styled(Link)`
  list-style: none;
  background-color: #3b92de;
  width: 80%;
  padding: 0.8rem;
  text-decoration: none;
  font-size: 1.1rem;
  color: #fff;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const H2 = styled.h2`
  width: 80%;
  font-size: 1.4rem;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 3.5rem;

  @media (min-width: 576px) {
    font-size: 1.6rem;
  }
`;

function TagsPage({ data }) {
  const tagData = data.allMarkdownRemark.group;

  return (
    <Layout>
      <Wrapper>
        <TagSection>
          <Tags>
            <H2>All tags</H2>
            {tagData.map(tag => (
              <Links to={`/${tag.fieldValue}`}>
                {tag.fieldValue} {`(${tag.totalCount})`}
              </Links>
            ))}
          </Tags>
        </TagSection>
      </Wrapper>
    </Layout>
  );
}

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
