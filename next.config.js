const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  trailingSlash: true,
});

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/contact": { page: "/contact" },
    };
  },
};
