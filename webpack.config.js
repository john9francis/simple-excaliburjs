const path = require('path');

module.exports = {
  entry: './build/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      'actors': path.resolve(__dirname, 'build', 'actors')
    }
  }
};