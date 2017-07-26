'use strict';
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const extractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    context: __dirname,
    output: {
        filename: "[name].bundle.js",
        path: common.location.dist,
        publicPath: '/',
    },
    plugins: [
        new extractTextPlugin({
            filename: "css/[name].[contenthash].css"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
}

module.exports = config;


//动态读取page_config中的html配置实现多页面加载
let injectHTML = () => {
    pagesConfig.pages.forEach(function(page) {
        let htmlConfig = new htmlWebpackPlugin({
            hash: false,
            minify: {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                html5: true,
                minifyCSS: true,
                removeComments: true,
                removeEmptyAttributes: true,
            },
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