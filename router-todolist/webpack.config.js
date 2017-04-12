var webpack = require('webpack');
var proxy = require('http-proxy-middleware');


var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

const context = ['/api/*'];

module.exports = {
    entry: APP_DIR + '/main.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3000,
        historyApiFallback: true,
        proxy: [
            {
                context: '/api',
                target: 'http://localhost:8080/ShoppingCart',
                secure: false
            }
        ]
    },

    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react',  'stage-2'],
                    plugins: [
                        ["transform-class-properties"]
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jp[e]?g)$/,
                loader: 'url-loader?limit=8192&name=img/[name].[ext]'
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                loader: "url-loader?limit=8192&name=fonts/[name].[ext]"
            },
            {
                test: /\.json$/,
                loader: 'json-loader!json-loader'
            }
        ]
    }
};