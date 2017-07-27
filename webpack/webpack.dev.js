const webpack = global.webpack || require("webpack");
const common = global.common || require("../config/common_config");

const config = {
    context: __dirname,
    output: {
        filename: "[name].bundle.js",
        path: common.location.dist,
        publicPath: '/',
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
}

module.exports = config;