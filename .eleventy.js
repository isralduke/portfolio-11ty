module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/sass/fonts/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
