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

const TagSection = styled.div`
  width: 80%;
  max-width: 1000px;
  height: 80%;
  margin: 0 auto;
`;

const Tags = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0 auto;
`;

const H2 = styled.h2`
  width: 80%;
  font-size: 1.4rem;
  margin: 0;
  margin-top: 3rem;
  margin-bottom: 3.5rem;

  @media (min-width: 576px) {
    font-size: 1.6rem;
  }
`;

const Links = styled(Link)`
  display: inline-block;
  margin: 0.8rem;
  margin-left: 0;
  text-decoration: none;
  font-size: 1rem;
  white-space: nowrap;
  word-break: keep-all;
  cursor: pointer;
  line-height: 1;
  position: relative;
  text-align: center;
  opacity: 1;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 2px;
  color: rgb(255, 255, 255);
  background-color: rgb(6, 132, 248);
  background-image: linear-gradient(rgb(6, 132, 248), rgb(6, 122, 228));
  text-shadow: rgba(0, 0, 0, 0.08) 0px 1px 1px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out 0s;
  padding: 10px 20px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(6, 122, 228);
  border-image: initial;

  &:hover {
    background-image: linear-gradient(rgb(6, 153, 255), rgb(6, 141, 255));
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    transition: all 0.2s ease-in-out 0s;
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
