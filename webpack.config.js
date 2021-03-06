module.exports = {
  devServer: {
    inline: false,
    hot: false,
  },

  entry: './index.js',

  output: {
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: false } },
          'cache-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
