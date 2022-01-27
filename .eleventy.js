/**
 * .eleventy.js
 *
 * Project:	Producten bevindingen.
 * GitHub:	https://github.com/producten-bevindingen.
 * Authors:	Rian Rietveld.
 */

const slugify         = require("slugify");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const isProduction 		= process.env.NODE_ENV === 'production';

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addWatchTarget("./src/assets/");

    /**
     * Universal slug filter that strips unsafe chars from URLs.
     */
    eleventyConfig.addFilter("slugify", function (str) {
        return slugify(str.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, ""), {
            lower: true,
            replacement: "-",
            remove: /[*+~.·,()'"`´%!?¿:@»]/g,
        });
    });

    /**
     * Sort the collection with the products by the tag number.
     */
    eleventyConfig.addCollection("products", (collection) =>
        collection.getFilteredByGlob("./src/sc/*.njk").sort((b, a) => {
            if (a.data.number > b.data.number) return -1;
            else if (a.data.number < b.data.number) return 1;
            else return 0;
        })
    );


    /**
     * Return the Object options.
     */
    return {
        "passthroughFileCopy": true,
        "dir": {
            "input": "src",
            "includes": "_includes",
            "data": "_data",
            "output": "docs",
        },
        pathPrefix: isProduction ? '/producten-bevindingen/' : '/',
    }
};
