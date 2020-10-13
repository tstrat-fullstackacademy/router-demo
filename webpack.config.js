module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
}
