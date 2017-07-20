'use strict';
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const extractTextPlugin = require("extract-text-webpack-plugin");

const common = require('./webpack/config/common_config');
const pagesConfig = require('./webpack/config/page_config');
const entriesConfig = require('./webpack/config/entries_config');

const config = {
    context: __dirname,
    cache: true,
    stats: {
        color: true,
        reasons: true,
    },
    output: {
        filename: "[name].bundle.js",
        path: common.location.dist,
    },
    watchOptions: {
        watch: true,
        aggregateTimeout: 300,
        pool: 1000,
        ignored: /node_modules/,
    },
    module: {

        rules: [{
            test: /\.art$/,
            use: {
                loader: "art-template-loader",
            },
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            // use: ['css-hot-loader'].concat(extractTextPlugin.extract({
            //     fallback: "style-loader",
            //     use: "css-loader"
            // })),
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }, {
            test: /\.(png|jpg)$/,
            use: {
                loader: 'url-loader',
            }
        }],
    },
    plugins: [
        // new extractTextPlugin({
        //     filename: "css/[name].[contenthash].css"
        // }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        port: 3000,
        host: '10.11.3.196',
        hotOnly: true,
        contentBase: common.location.dist,
        publicPath: 'http://10.11.3.196',
    },
}

module.exports = config;


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
        config.plugins.push(htmlConfig);
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
    config.entry = entryObject;
}

(function() {
    injectEntiries();
    injectHTML();
})();