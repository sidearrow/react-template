'use strict'

const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development'
  const isEnvProduction = webpackEnv === 'production'

  const distDir = path.resolve(__dirname, 'dist')

  return {
    entry: './src/index.tsx',
    output: {
      filename: 'index.js',
      path: distDir
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
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
      })
    ],
  }
}
