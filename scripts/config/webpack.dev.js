const { merge } = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const common = require('./webpack.common')
const { PROJECT_PATH, SERVER_HOST, SERVER_PORT } = require('../constant')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  target: 'web',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(PROJECT_PATH, './dist'),
    publicPath: '/'
  },
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    // stats: 'errors-only',     // 设为errors-only表示终端只打印错误类型的日志，不会打印warning以及其他信息影响阅读
    compress: true,           // 设为true表示启用gzip压缩，加快网站打开速度
    open: true,               // 设为true表示第一次启动项目时自动打开默认浏览器
    hot: true,                // 设为true表示启用服务热替换配置
    historyApiFallback: {
      index: path.resolve(PROJECT_PATH, './public/index.html')  // 当路由与真实文件不匹配时，webpack-dev-server 使用指定文件渲染而非 404 错误
    },
    // proxy: {
    //   '/api': ''
    // }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})