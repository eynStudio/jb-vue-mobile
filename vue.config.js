const fs = require("fs");
const version = require("./package.json").version;
const revision = require("child_process")
  .execSync("git rev-parse --short HEAD")
  .toString()
  .trim();
const dirty = require("child_process")
  .execSync("git status -s")
  .toString()
  .trim();

process.env.VUE_APP_VERSION =
  version.slice(0, 3) + "." + revision + (dirty ? "*" : "");

module.exports = {
  productionSourceMap: false,
  pages: {
    index: "./src/main.ts",
    demo: "./src/mobile.ts"
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: ["vue-loader", "@vant/markdown-loader"]
        }
      ]
    }
  },
  pwa: {
    name: "JB VUE MOBILE",
    themeColor: "#000000",
    assetsVersion: process.env.VUE_APP_VERSION,
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "default",
    workboxOptions: {
      skipWaiting: true
    },
    workboxPluginMode: "GenerateSW"
  }
};
