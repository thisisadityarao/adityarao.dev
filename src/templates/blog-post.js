import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import '../../static/styles/post.css';

const Wrapper = styled.main`
  min-height: 100%;
`;

const Divider = styled.div`
  height: 2px;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  margin-top: 0.5em;
  display: block;
  background: linear-gradient(
    to right,
    #e52f45 0%,
    #e52f45 25%,
    #b42b3e 25%,
    #b42b3e 50%,
    #8ab2ff 50%,
    #8ab2ff 75%,
    #4d71b7 75%,
    #4d71b7 100%
  );
`;

const Date = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.2rem;

  @media (min-width: 576px) {
    font-size: 1rem;
  }
`;

export default ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <Wrapper>
        <article>
          <h1>{post.frontmatter.title}</h1>
          <Date>{post.frontmatter.date}</Date>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <Divider />
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: '1.5em',
            width: '100%',
            maxWidth: '1000px',
            marginBottom: '1.5rem',
            margin: 'auto',
            fontSize: '1.2rem',
          }}
        >
          {previous && (
            <li style={{ marginTop: '10px' }}>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li style={{ marginTop: '10px' }}>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </Wrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
