const path = require('path')

module.exports = {
  entry: {
    lib: './lib/PrototypeControls.jsx'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'prototype-controls',
    libraryTarget: 'umd'
  },

  externals: {
    'react': 'react'
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
