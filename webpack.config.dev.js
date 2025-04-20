const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new ESLintPlugin({
      extensions: ['js'],
      exclude: 'node_modules',
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
});
