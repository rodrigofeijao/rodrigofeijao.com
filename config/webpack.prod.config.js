var path = require('path')
var webpack = require('webpack')

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
  module: {
    rules: [
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