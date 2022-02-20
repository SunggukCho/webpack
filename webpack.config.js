const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    main: './js/A.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
};