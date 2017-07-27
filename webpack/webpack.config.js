const webpack = require("webpack");
const common = global.common || require('../config/common_config');
const entries = global.entries || require('../config/entries_config');
const path = global.path || require('path');
const moduleConfig = global.module || require('./module');
const devServerConfig = global.devServer || require('./devServer');
const pluginsConfig = global.pluginConfig || require('./plugin')

const config = {
    context: __dirname,
    cache: true,
    entry: entries,
    output: {
        filename: "[name].bundle.js",
        path: common.location.dist,
        publicPath: '/',
    },
    module: moduleConfig,
    plugins: pluginsConfig,
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