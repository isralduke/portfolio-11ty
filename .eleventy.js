module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/sass/fonts/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
  // Get only content that matches a tag
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByTag("interactive");
  });
  return {
    dir: {
      input : "src",
      output: "public",
    },
  };
};
