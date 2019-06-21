var path = require('path');

//导入html-webpack-plugin
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    app: './app/app.js'
  },

  output: {
    path: path.resolve(__dirname + '/public')
  },

  module: {
    rules: [

      //处理图片loader
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {loader: 'url-loader', options: {limit: 8024}}
        ]
      },

      //处理模板图片
      {
        test: /\.html?$/,
        use: [
          {loader: 'html-withimg-loader'}
        ]
      }
    ]
  },

  //插件
  plugins: [

    //处理htm模板
    new htmlWebpackPlugin({
      //处理模板路径
      template: './index.html',

      /*
        inject: true, 表示将入口脚本插入到body结束标签之前，默认为true
        inject: false, 不要入口脚本(几乎用不上)
        inject: 'head', 表示将入口脚本插入到head结束标签之前
        inject: 'body', 表示将入口脚本插入到body结束标签之前
      */
      inject: 'body',

      //输出文件名称
      filename: 'pro.html',

      //压缩html
      minify: {
        //移除html模板注释
        removeComments: true,

        //除属性引号
        removeAttributeQuotes: true,

        //移除空白字符
        collapseWhitespace: true
      }
    })

  ]
}