const { defineConfig } = require('@vue/cli-service')


module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/data'
        }
      }
    }
  },
  configureWebpack:{ 
    resolve:{
        alias:{
            'common':'@/common',
        }
    }
  }
})

