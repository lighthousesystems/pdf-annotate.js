var webpack = require('webpack');
var fileName = 'pdf-annotate';
var plugins = [];

if (process.env.MINIFY) {
  fileName += '.min'
  plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = {
  devtool: 'source-map',
  optimization: optimization,
  entry: './index.js',
  mode: 'production',
  output: {
    filename: 'dist/' + fileName + '.js',
    path: path.join(__dirname, 'dist'),
    library: 'PDFAnnotate',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['add-module-exports']
        }
      }
    ]
  }
};
