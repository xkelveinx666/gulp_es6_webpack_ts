const webpack = require("webpack");
const common = global.common || require('../config/common_config');
const entries = global.entries || require('../config/entries_config');
const path = global.path || require('path');

const config = {
    context: __dirname,
    cache: true,
    entry: entries,
    output: {
        filename: "[name].bundle.js",
        path: common.location.dist,
        publicPath: '/',
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
    // devServer: {
    //     // hot: true,
    //     publicPath: '/',
    //     historyApiFallback: true,
    //     stats: "errors-only"
    // },
    devServer: {
        port: 80,
        host: '0.0.0.0',
        hot: true,
        historyApiFallback: true,
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false,
        },
        disableHostCheck: true,
        contentBase: common.location.dist,
        publicPath: 'http://0.0.0.0',
    },
}

module.exports = config;


//动态读取page_config中的html配置实现多页面加载
let injectHTML = () => {
    const pagesConfig = global.pages;
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