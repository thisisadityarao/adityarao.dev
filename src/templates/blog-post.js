import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { Calendar } from 'styled-icons/octicons/Calendar';
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

const Date = styled.span`
  display: inline-block;
  font-size: 0.9rem;
  text-decoration: underline;

  @media (min-width: 576px) {
    font-size: 1rem;
  }
`;

const TagSection = styled.div`
  width: 100%;
  max-width: 43em;
  height: 48px;
  line-height: 40px;
  margin: 2rem auto;
  margin-top: 0;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const PostTagLink = styled(Link)`
  border-bottom: 2px solid #f43059;
  padding-bottom: 2px;
  font-size: 1.2rem;
  &:link {
    text-decoration: none;
    color: #f43059;
  }
  &:focus,
  &:hover {
    color: #f43059;
  }
  &:active {
    color: #f43059;
  }
  &:visited {
    color: #f43059;
  }
`;

const PostTags = styled(Link)`
  display: inline-block;
  height: 28px;
  line-height: 26px;
  position: relative;
  margin: 0 12px 8px 0;
  padding: 0 12px 0 10px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 2px;
  color: rgb(255, 255, 255);
  background-color: rgb(6, 132, 248);
  background-image: linear-gradient(rgb(6, 132, 248), rgb(6, 122, 228));
  font-size: 12px;
  text-decoration: none;
  text-shadow: rgba(0, 0, 0, 0.08) 0px 1px 1px;
  margin-left: 15px;
  transition: all 0.2s ease-in-out 0s;

  &:before {
    content: '';
    position: absolute;
    top: 12px;
    right: 1px;
    float: left;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fff;
    box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.4);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: -12px;
    width: 0;
    height: 0;
    border-color: transparent transparent transparent rgb(6, 132, 248);
    border-style: solid;
    border-width: 14px 0 14px 12px;
  }

  &:link {
    text-decoration: none;
  }

  &:hover {
    background-image: linear-gradient(rgb(6, 153, 255), rgb(6, 141, 255));
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    transition: all 0.2s ease-in-out 0s;
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
          <DateIcon />
          <Date>{post.frontmatter.date}</Date>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <TagSection>
          <PostTagLink to="/tags/">Tags :</PostTagLink>
          {tags.map((tag, i) => (
            <PostTags to={`/${tag}`} key={i} style={{ color: '#fff' }}>
              {tag}
            </PostTags>
          ))}
        </TagSection>
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
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
