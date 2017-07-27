const common = global.common || require('../config/common_config');

const devServer = {
    port: 80,
    host: '0.0.0.0',
    historyApiFallback: true,
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false,
    },
    disableHostCheck: true,
    contentBase: common.location.dist,
    publicPath: 'http://0.0.0.0',
}

module.exports = devServer;