'use strict';
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const extractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const common = require('./webpack/config/common_config');

const HOME_TABLE_CONFIG = {
    "filepath": path.resolve(common.privatePath.pages, "test.art"),
    "filename": "main.html",
}

const HOME_SEND_CONFIG = {
    "filepath": path.resolve(common.privatePath.pages, "test.art"),
    "filename": "main.html",
}


module.exports = {
    context: __dirname,
    entry: {
        ie8fix: path.resolve(common.publicPath.scripts, "ie8fix.js"),
        home_table: path.resolve(common.privatePath.config, "entry_home_table.js"),
    },
    output: {
        filename: "[name].bundle.js",
        path: common.location.dist,
    },
    module: {

        rules: [{
            test: /\.art$/,
            use: {
                loader: "art-template-loader",
            },
        }, {
            test: /\.css$/,
            use: extractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            }),
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }],
    },
    // plugins: [
    //     new htmlWebpackPlugin({
    //         title: 'Webpack Study',
    //         filename: pageName.main + fileType.html,
    //         template: path.resolve(privatePath.pages, "homt_table.html"),
    //     }),
    //     new extractTextPlugin({
    //         filename: "css/[name].[contenthash].css"
    //     }),
    //     new cleanWebpackPlugin(['/dist']),
    // ],
    plugins: [
        new cleanWebpackPlugin(common.location.dist),
        new extractTextPlugin({
            filename: "css/[name].[contenthash].css"
        }),
        new htmlWebpackPlugin({
            title: common.templateDefault.title,
            icon: common.templateDefault.icon,
            copyright: common.templateDefault.copyright,
            descriptions: common.templateDefault.description,
            keywords: common.templateDefault.keywords,
            filename: HOME_TABLE_CONFIG.filename,
            template: HOME_TABLE_CONFIG.filepath,
            ie8fix: common.templateDefault.ie8fix,
            chunks: ['home_table'],
            // hash: true,
            // cache: true,
            // showErrors: true,
        }),
    ],
    devServer: {
        port: 80,
        host: '10.11.3.196',
        contentBase: common.location.dist,
        publicPath: 'http://localhost',
    },
};