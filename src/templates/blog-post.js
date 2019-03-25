/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { Calendar } from 'styled-icons/octicons/Calendar';
import Layout from '../components/layout';
import '../../static/styles/post.css';

const Wrapper = styled.main`
  min-height: 100%;
  background-color: #fff;
`;

const Divider = styled.div`
  height: 2px;
  width: 100%;
  max-width: 968px;
  margin: auto;
  margin-top: 4rem;
  display: block;
  background: #eeeeee;
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

const Date = styled.span`
  display: inline-block;
  font-size: 1rem;
  text-decoration: underline;
`;

const TagSection = styled.div`
  width: 100%;
  max-width: 760px;
  padding-left: 20px;
  padding-right: 20px;
  height: 48px;
  line-height: 40px;
  margin: 2rem auto;
  margin-top: 0;

  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const PostTagLink = styled(Link)`
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  line-height: 1.4;
  font-variant: small-caps;

  &:link {
    text-decoration: none;
    color: rgb(249, 73, 73);
  }
  &:focus,
  &:hover {
    color: rgb(249, 73, 73);
    border-bottom: 2px solid rgb(249, 73, 73);
  }
  &:active {
    color: rgb(249, 73, 73);
  }
  &:visited {
    color: rgb(249, 73, 73);
  }
`;

const PostTags = styled(Link)`
  display: inline-block;
  margin-left: 0.5rem;
  text-decoration: underline;
  font-size: 16px;
  white-space: nowrap;
  word-break: keep-all;
  cursor: pointer;
  line-height: 1.1;
  position: relative;
  text-align: center;
  color: #345cd5;
  transition: all 0.2s ease-in-out 0s;
  padding: 5px 10px;

  &:hover {
    color: #fff;
    background-color: #5e80de;
    border-radius: 3px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const DateIcon = styled(Calendar)`
  width: 20px;
  height: 20px;
  margin-right: 4px;
  margin-top: -2px;
  color: #888;

  @media (min-width: 576px) {
    width: 22px;
    height: 22px;
  }
`;

export default ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { tags } = data.markdownRemark.frontmatter;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <Wrapper>
        <article>
          <h1>{post.frontmatter.title}</h1>
          <div className="date">
            {' '}
            <DateIcon />
            <Date>{post.frontmatter.date}</Date>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <TagSection>
          <PostTagLink to="/tags/">
            TAGS <span>&#8594;</span>
          </PostTagLink>
          {tags.map((tag, i) => (
            <PostTags to={`/${tag}`} key={i}>
              #{tag}
            </PostTags>
          ))}
        </TagSection>
        <Divider />
        <List>
          {previous && (
            <ListItem className="first">
              <Link
                to={previous.fields.slug}
                rel="prev"
                style={{ color: '#345cd5' }}
              >
                ← {previous.frontmatter.title}
              </Link>
            </ListItem>
          )}

          {next && (
            <ListItem className="second">
              <Link
                to={next.fields.slug}
                rel="next"
                style={{ color: '#345cd5' }}
              >
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
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
