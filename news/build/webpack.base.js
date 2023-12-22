const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"),//入口文件
  output: {
    filename: "static/js/[name].js",//每个输出的js文件的名称
    path: path.join(__dirname, "../dist"),//打包结果输出的路径
    clean: true,//webapck5内置的，webpack4中需要配置clean-webpack-plugin来删除之前的dist
    publicPath: "/"//打包后文件的公共前缀路径
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,//匹配ts、tsx文件
        use: {
          loader: "babel-loader",
          options: {
            //预设执行顺序由右往左，所以这里是先处理ts再处理jsx
            presets: [
              "@babel/preset-react",
              "@babel/preset-typescript"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),//模板用定义root节点的模板
      inject: true//自动注入静态资源
    })
  ],
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
  }


}
