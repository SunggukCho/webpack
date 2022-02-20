const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    main: './src/js/A.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/, // .css 확장자로 끝나는 모든 파일
        use: ["style-loader", "css-loader"], // style-loader를 앞에 추가한다
      },
    ],
  }
};