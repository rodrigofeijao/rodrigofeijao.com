var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

    devtool: 'eval-source-map',
    
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, '../src/index.js')
    ],
    
    output: {
        path: path.join(__dirname, '/../dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
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
            use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({ 
                fallback: 'style-loader', 
                use: 'css-loader!sass-loader!postcss-loader' 
            }))
        },
        {
            test : /\.js$/,
            exclude : /(node_modules|bower_components|scss)/,
            use : [{
                loader : 'babel-loader',
                options : { 
                    presets : [ 'es2015', 'react', 'react-hmre' ], 
                    plugins: [ 'transform-decorators-legacy', 'transform-class-properties' ] 
                }
            }]
        }
        ]
    },

    devServer: {
        host: 'localhost',
        port: 3000,

        historyApiFallback: {
            index: 'index.html',
        },
        contentBase: 'dist',

        hot: true,
    },

}