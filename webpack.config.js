const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        hot: true,
        port: 9000,
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.sass', '.png'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@BLL': path.resolve(__dirname, 'src/BLL'),
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }

}