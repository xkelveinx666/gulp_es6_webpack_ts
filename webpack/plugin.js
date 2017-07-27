const webpack = global.webpack || require('webpack');

const plugins = [
    // new extractTextPlugin({
    //     filename: "css/[name].[contenthash].css"
    // }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
]

module.exports = plugins;