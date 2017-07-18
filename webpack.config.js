'use strict';
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const extractTextPlugin = require("extract-text-webpack-plugin");

const common = require('./webpack/config/common_config');
const pagesConfig = require('./webpack/config/page_config');
const entriesConfig = require('./webpack/config/entries_config');

const moduleContext = {
    context: __dirname,
    cache: true,
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
    plugins: [
        new extractTextPlugin({
            filename: "css/[name].[contenthash].css"
        }),
    ],
    devServer: {
        port: 80,
        host: '10.11.3.196',
        contentBase: common.location.dist,
        publicPath: 'http://localhost',
    },
}

module.exports = {
    "config": moduleContext,
};

//动态读取page_config中的html配置实现多页面加载
let injectHTML = () => {
    pagesConfig.pages.forEach(function(page) {
        let htmlConfig = new htmlWebpackPlugin({
            title: page.title,
            icon: common.templateDefault.icon,
            copyright: common.templateDefault.copyright,
            descriptions: page.description,
            keywords: page.keywords,
            filename: page.filename,
            template: page.filepath,
            ie8fix: common.templateDefault.ie8fix,
            chunks: page.chunks,
        });
        moduleContext.plugins.push(htmlConfig);
    });
};

//动态读取entries_config中的entry配置实现多页面加载
let injectEntiries = () => {
    const entries = entriesConfig.entries;
    let entryObject = {};
    let entriesKeys = Object.keys(entries);
    entriesKeys.forEach(function(key) {
        let chunkName = entries[key].chunkName;
        let chunkPath = entries[key].chunkPath;
        entryObject[chunkName] = chunkPath;
    });
    moduleContext.entry = entryObject;
}

(function() {
    injectEntiries();
    injectHTML();
})();