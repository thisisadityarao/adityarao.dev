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
  max-width: 780px;
  height: 80%;
  margin: 0 auto;
`;

const Tags = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0 auto;
`;

const H1 = styled.h1`
  font-family: 'Bree Serif', serif;
  width: 80%;
  font-size: 1.8rem;
  margin: 0;
  margin-top: 3rem;
  margin-bottom: 3.5rem;

  @media (min-width: 576px) {
    font-size: 2rem;
  }
`;

const Links = styled(Link)`
  display: inline-block;
  margin: 0.8rem;
  margin-left: 0;
  text-decoration: none;
  font-size: 1.2rem;
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
  text-transform: uppercase;
  letter-spacing: 0.3px;

  &:hover {
    background-image: linear-gradient(rgb(6, 153, 255), rgb(6, 141, 255));
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    transition: all 0.2s ease-in-out 0s;
  }

  @media (min-width: 576px) {
    font-size: 1.4rem;
  }
`;

function TagsPage({ data }) {
  const tagData = data.allMdx.group;

  return (
    <Layout>
      <Wrapper>
        <TagSection>
          <Tags>
            <H1>All tags</H1>
            {tagData.map(tag => (
              <Links to={`/${tag.fieldValue}`} id="tag-link">
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
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
