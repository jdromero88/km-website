const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: { //make sure tu run css-nano first
    rules: [
      { // this handle the CSS
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { // this handle the images
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
