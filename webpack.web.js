var path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const relativePath = (extraPath) => path.resolve(__dirname, extraPath);

module.exports = {
  entry: './docs/main.js',
  mode: "development",
  output: {
    filename: 'index.js',
    path: relativePath("docs")
  },
  
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "node_modules/pdfjs-dist/build/pdf.js", to: "shared"},
        { from: "node_modules/pdfjs-dist/build/pdf.worker.js", to: "shared"},
        { from: "node_modules/pdfjs-dist/web/pdf_viewer.js", to: "shared"},
        { from: "node_modules/pdfjs-dist/web/pdf_viewer.css", to: "shared"}
      ]
    })
  ],

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      ]
    }
  ]
  }
};
