module.exports = {
  // 解决打包后不能直接运行index.html的问题（真正布置服务器不需要这个配置）
  publicPath: './',
  // 解决向本地服务器请求数据的跨域问题
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
};
