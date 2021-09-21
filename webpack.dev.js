var path = require('path');
var fileName = 'pdf-annotate';

module.exports = {
  devtool: 'source-map',
  entry: './index.js',
  mode: 'development',
  output: {
    filename: fileName + '.js',
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
