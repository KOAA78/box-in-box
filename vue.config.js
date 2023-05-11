const { defineConfig } = require('@vue/cli-service')

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
  },
  devServer: {
    host: "0.0.0.0",
    port: "8080",
    proxy: {
      '/box': {
        target: 'http://localhost:8081',
        ws: true,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/box': ''
        }
      },
      '/sm': {
        target: 'https://smms.app/api/v2/upload',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/sm': ''
        },
      },
    },
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws'
    }
  }
})
