const {resolve}  = require("path")

module.exports = {
  webpack: {
    alias: {
      "@": resolve(__dirname, "src"),
      "components": resolve(__dirname, "src/components"),
      "assets": resolve(__dirname, "src/assets"),
      "pages": resolve(__dirname, "src/pages"),
      "http": resolve(__dirname, "src/http"),
      "utils": resolve(__dirname, "src/utils"),
    }
  }
};