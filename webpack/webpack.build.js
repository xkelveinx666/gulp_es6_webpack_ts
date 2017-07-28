const webpack = global.webpack || require("webpack");
const common = global.common || require("../config/common_config");
const extractTextPlugin = global.extractTextPlugin || require("extract-text-webpack-plugin");

const config = {
    module: {
        rules: [{
            test: /\.css$/,
            use: extractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }],
    },
    plugins: [
        new extractTextPlugin({
            filename: "css/[name].[contenthash].css"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"building"'
            }
        })
    ],
}

module.exports = config;