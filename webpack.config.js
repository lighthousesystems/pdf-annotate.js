var path = require('path');
var fileName = 'pdf-annotate';
var terser = require('terser-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './index.js',
  mode: 'production',
  optimization: {
    minimizer: [
      new terser({
        extractComments: false
      })
    ]
  },
  output: {
    filename: fileName + '.min.js',
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
