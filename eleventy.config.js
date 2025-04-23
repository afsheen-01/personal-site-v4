export default async (eleventyConfig) => {
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
