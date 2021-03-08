//const path = require('path');
module.exports = {
  mode: 'development',
  //entry: './app/js/App.js',
  output: {
    filename: 'scripts.js',
    //path: path.resolve(__dirname, 'app/js')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    }]
  }
}