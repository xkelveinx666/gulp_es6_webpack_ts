const webpack = global.webpack || require("webpack");
const common = global.common || require("../config/common_config");
const HtmlWebpackReloadPlugin = require('./html_reload');

const config = {
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }],
    },
    plugins: [
        //将html写入硬盘
        new HtmlWebpackReloadPlugin(),
        //以下均为hmr用plugins
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
}

module.exports = config;