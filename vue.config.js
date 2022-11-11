const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  /*configureWebpack: {
    resolve: {
      fallback: {
        fs: false,
        tls: false,
        net: false,
        path: false,
        zlib: false,
        url: false,
        http: false,
        https: false,
        stream: false,
        assert: false,
      },
    },
  },*/
});
