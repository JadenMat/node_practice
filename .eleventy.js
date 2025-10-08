module.exports = function(eleventyConfig) {
    // Tell Eleventy to copy the entire styles folder
    eleventyConfig.addPassthroughCopy("styles");
    eleventyConfig.addPassthroughCopy("assets");
  
    return {
      dir: {
        input: ".",
        output: "_site"
      }
    };

    eleventyConfig.addFilter("readableDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj, { zone: "utc" })
        .toFormat("LLLL d, yyyy");
    });
  };