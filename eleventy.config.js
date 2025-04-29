import markdownIt from "markdown-it";

export default async (eleventyConfig) => {

  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  eleventyConfig.setLibrary("md", markdownIt(options));

  eleventyConfig.addPassthroughCopy('assets');
  
  return {
    dir: {
      layouts: '_layouts',
      includes: '_includes',
      input: '.',
      output: '_site',
    },
  };
};
