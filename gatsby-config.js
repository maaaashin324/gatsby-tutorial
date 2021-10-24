module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "guideline-demo",
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
      __key: "pages",
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};
