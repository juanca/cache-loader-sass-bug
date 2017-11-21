module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'cache-loader',
          { loader: 'css-loader', options: { modules: true } },
        ],
      },
    ],
  },
};