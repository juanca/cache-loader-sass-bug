module.exports = {
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
          { loader: 'css-loader', options: { modules: true } },
          'cache-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
