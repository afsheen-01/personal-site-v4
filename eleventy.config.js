import markdownIt from "markdown-it";

export default (eleventyConfig) => {

  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  eleventyConfig.setLibrary("md", markdownIt(options));
  eleventyConfig.addCollection("blogs", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./blogs/*.md");
  });

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
