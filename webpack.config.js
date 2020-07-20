'use strict';

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function (env, argv) {
  const mode = argv.mode;
  const isEnvDevelopment = mode === 'development';
  const isEnvProduction = mode === 'production';

  const distDir = path.resolve(__dirname, 'dist');

  return {
    entry: './src/index.tsx',
    output: {
      filename: 'index.js',
      path: distDir,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
      }),
      new MiniCssExtractPlugin(),
      isEnvProduction && new OptimizeCSSAssetPlugin(),
    ].filter(Boolean),
  };
};
