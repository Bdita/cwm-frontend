module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/src/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        loaders: ['eslint-loader'],
        exclude: /(node_modules)/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        }
      },
      {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }
    ]
  },
  devServer: {
     contentBase: "./public",
     historyApiFallback: true,
     inline: true,
     port: '3000'
   }
}
