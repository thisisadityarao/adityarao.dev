import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import '../../static/styles/blog-post.css';

const Wrapper = styled.main`
  min-height: 100%;
`;

const Date = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.2rem;

  @media (min-width: 576px) {
    font-size: 1rem;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Wrapper>
        <article>
        <h1>{post.frontmatter.title}</h1>
        <Date>{post.frontmatter.date}</Date>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
