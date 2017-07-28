const webpack = global.webpack || require('webpack');

const plugins = [
    // new extractTextPlugin({
    //     filename: "css/[name].[contenthash].css"
    // }),
    // new webpack.NamedModulesPlugin(),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.DefinePlugin({
    //     'process.env': {
    //         NODE_ENV: '"developing"'
    //     }
    // })
]

module.exports = plugins;