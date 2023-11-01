// https://github.com/kentaroi/eleventy-sass
const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/css/fonts/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addPassthroughCopy("./src/.htaccess");
  eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
  return {
    dir: {
      input : "src",
      output: "public",
      layouts: '_layouts'
    },
  };
};
