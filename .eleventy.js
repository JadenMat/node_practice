const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/styles");
  

  const isProduction = process.env.ELEVENTY_ENV === "production";

  eleventyConfig.addGlobalData("pathPrefix", "/node_practice/");


  eleventyConfig.addFilter("prefixedUrl", (url, prefix) => {
    const finalPrefix = prefix || (isProduction ? "/node_practice/" : "/");
    return finalPrefix + url.replace(/^\/+/, "");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    },
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"]
  };
};

