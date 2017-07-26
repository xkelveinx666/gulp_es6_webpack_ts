const common = require('./webpack/config/common_config');
const devServer = {
    port: 80,
    host: '0.0.0.0',
    hot: true,
    historyApiFallback: true,
    watchOptions: {
        watch: true,
        aggregateTimeout: 300,
        pool: 1000,
        ignored: /node_modules/,
    },
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false,
    },
    watchOptions: {
        aggregateTimeout: 300,
        pool: 1000,
        ignored: /node_modules/,
    },
    disableHostCheck: true,
    contentBase: common.location.dist,
    publicPath: 'http://0.0.0.0',
}

module.exports = devServer;