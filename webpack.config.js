const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/main.js',
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      cp: path.resolve(__dirname, 'src/components/'),
      js: path.resolve(__dirname, 'src/js/'),
      css: path.resolve(__dirname, 'src/css/')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
    ]
  },
  resolve: {
    alias: {
      cp: path.resolve(__dirname, 'src/components/'),
      js: path.resolve(__dirname, 'src/js/'),
      css: path.resolve(__dirname, 'src/css/')
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  }
};
