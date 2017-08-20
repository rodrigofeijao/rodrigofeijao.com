var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    'babel-polyfill',
    path.join(__dirname, '../src/index.prod.js')
  ],

  output: {
    path: path.join(__dirname, '/../dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
      new ExtractTextPlugin({ 
          filename: 'styles.css', 
          disable: false, 
          allChunks: true 
      }),
  ],

  module: {
    rules: [
      {
          test : /\.scss$/,
          exclude : /(node_modules|bower_components)/,
          use: ExtractTextPlugin.extract({ 
              fallback: 'style-loader', 
              use: 'css-loader!sass-loader!postcss-loader' 
          })
      },
      {
        test : /\.js$/,
        exclude : /(node_modules|bower_components|css)/,
        use : [{
            loader : 'babel-loader',
            options : { 
                presets : [ 'es2015', 'react' ], 
                plugins: [ 'transform-decorators-legacy', 'transform-class-properties' ] 
            }
        }]
      }
    ]
  }
}