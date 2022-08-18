const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                }
            },
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [{
                loader: 'file-loader',
            },],
        },
        {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        },
        {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
            },],
        },
        {
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            },
                'css-loader',
            ],
        },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
            scriptLoading: "module",
            'charset=utf-8 id=appscript inline data-script-inline=true': /app/
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
    experiments: {
        // WebAssembly as async module (Proposal)       
        outputModule: true,
        // Allow to output ESM
        topLevelAwait: true,
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
}