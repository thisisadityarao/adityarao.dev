import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import '../../static/styles/post.css';

const Wrapper = styled.main`
  min-height: 100%;
  background-color: #fafafa;
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

const List = styled.ul`
  display: flex;
  flex-flow: column wrap;
  list-style: none;
  padding: 3em 1em;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  font-size: 1.2rem;

  @media (min-width: 1000px) {
    flex-flow: row wrap;
  }
`;

const ListItem = styled.li`
  min-width: 270px;
  text-align: center;
  margin-top: 2.5rem;

  &.first {
    margin-top: 0;
  }

  @media (min-width: 1000px) {
    width: 50%;
    margin-top: 0;

    &.first {
      text-align: left;
    }

    &.second {
      text-align: right;
    }
  }
`;

const Date = styled.p`
  font-size: 0.9rem;

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
          <Date>{post.frontmatter.date}</Date>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <Divider />
        <List>
          {previous && (
            <ListItem className="first">
              <Link to={previous.fields.slug} rel="prev" style={{ color: '#F43059' }}>
                ← {previous.frontmatter.title}
              </Link>
            </ListItem>
          )}

          {next && (
            <ListItem className="second">
              <Link to={next.fields.slug} rel="next" style={{ color: '#F43059' }}>
                {next.frontmatter.title} →
              </Link>
            </ListItem>
          )}
        </List>
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
