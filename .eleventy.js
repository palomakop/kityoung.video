import Image from "@11ty/eleventy-img";
import path from "path";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./assets");

  eleventyConfig.addShortcode("vimeoEmbed", function(videoId) {
    return `<video-embed><iframe src="https://player.vimeo.com/video/${videoId}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe></video-embed>`;
  });

  eleventyConfig.addShortcode("youtubeEmbed", function(videoId) {
    return `<video-embed><iframe width="1920" height="1080" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></video-embed>`;
  });

  eleventyConfig.addAsyncShortcode("optimizedImage", async function(src, alt, sizes = "100vw") {
    let metadata = await Image(src, {
      widths: [1000],
      formats: ["webp", "jpeg"],
      outputDir: "./_site/img/",
      urlPath: "/img/",
      filenameFormat: function (id, src, width, format, options) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);
        const dirName = path.basename(path.dirname(src));
        return `${dirName}-${name}-${width}w.${format}`;
      }
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  });
}
