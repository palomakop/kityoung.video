export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./assets");

  eleventyConfig.addShortcode("vimeoEmbed", function(videoId) {
    return `<vimeo-embed><iframe src="https://player.vimeo.com/video/${videoId}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe></vimeo-embed>`;
  });
}
