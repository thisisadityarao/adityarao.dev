const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve("./src/templates/blog-post.js");
  const blogPage = path.resolve("./src/templates/blog-index.js");

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.error(result.errors);
          return reject(result.errors);
        }

        // Create blog posts pages.
        const posts = result.data.allMdx.edges;
        const tagsTemplate = path.resolve("./src/templates/tag-template.js");

        // All tags
        let allTags = [];
        // Iterate through each post, putting all found tags into `allTags array`
        _.each(posts, edge => {
          if (_.get(edge, "node.frontmatter.tags")) {
            allTags = allTags.concat(edge.node.frontmatter.tags);
          }
        });
        // Eliminate duplicate tags
        allTags = _.uniq(allTags);

        allTags.forEach((tag, index) => {
          createPage({
            path: `/${_.kebabCase(tag)}/`,
            component: tagsTemplate,
            context: {
              tag
            }
          });
        });

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next
            }
          });
        });

        // Create blog post list pages
        const postsPerPage = 5;
        const numPages = Math.ceil(posts.length / postsPerPage);

        _.times(numPages, i => {
          createPage({
            path: i === 0 ? "/blog/" : `/blog/${i + 1}`,
            component: blogPage,
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1
            }
          });
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: "slug",
      value: `/blog${slug}`
    });
  }
};
