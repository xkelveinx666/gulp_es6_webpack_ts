const webpack = global.webpack || require("webpack");
const common = global.common || require("../config/common_config");

const config = {
    plugins: [
        //以下均为hmr用plugins
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"developing"'
            }
        })
    ],
}

module.exports = config;