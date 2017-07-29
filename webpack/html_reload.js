'use strict';

//此插件用于在html编译完成时自动刷新browsersync页面，防止hmr不会自动刷新

const browserSync = global.browserSync;

function HtmlWebpackReloadPlugin() {}

HtmlWebpackReloadPlugin.prototype.apply = function(compiler) {
    // Hook into the html-webpack-plugin processing
    compiler.plugin('compilation', function(compilation) {
        compilation.plugin('html-webpack-plugin-after-emit', function(htmlPluginData, callback) {
            const originalHTML = global[htmlPluginData.outputName];
            const newHTML = htmlPluginData.html.source()
            if (originalHTML !== newHTML) {
                browserSync.reload();
                global[htmlPluginData.outputName] = newHTML;
            }
            callback();
        });
    });
};

module.exports = HtmlWebpackReloadPlugin;