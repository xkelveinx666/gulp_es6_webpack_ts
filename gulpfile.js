//导入工具包 require('node_modules里对应模块')
(function() {
    global.path = require('path'),
        global.common = require('./config/common_config'),
        global.entries = require('./config/entries_config'),
        global.pages = require('./config/pages_config'),
        global.webpack = require('webpack'),
        global._ = require('lodash');
})();
const gulp = require('gulp'), //本地安装gulp所用到的地方
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    originalConfig = require('./webpack/webpack.config'),
    webpack = require('webpack'),
    browserSync = require("browser-sync").create(),
    devServerConfig = require('./webpack/devServer'),
    hotMiddleware = require('./webpack/hotMiddleware'),
    webpackDevMiddleware = require("webpack-dev-middleware"),
    webpackHotMiddleware = require("webpack-hot-middleware");

gulp.task('plugins', function() {
    console.log(plugins);
    console.log(require('./webpack.config').config);
});

gulp.task('dev', function() {
    const devConfig = require('./webpack/webpack.dev');
    const webpackConfig = _.merge({}, devConfig, originalConfig);
    const bundler = webpack(webpackConfig);
    browserSync.init({
        server: {
            baseDir: "./dist",
            middleware: [
                webpackDevMiddleware(bundler, devServerConfig),
                webpackHotMiddleware(bundler, hotMiddleware),
            ],

        },
        port: 80,
        ghostMode: false,
        open: false,
        files: [
            './src/private/**/**/*.art',
            './src/public/**/**/*.art',
        ]
    });

});

gulp.task('watch', function() {
    var compiler = webpack(config)

    // compiler.run((rr, stats) => {
    //     console.log(stats.toString({
    //         colors: true,
    //     }));
    // });

    // const watching = compiler.watch({}, (err, stats) => {
    //     // console.log(stats);
    // });

    var server = new webpackDevServer(compiler, {
        publicPath: config.output.publicPath,
        // hot: true,
        historyApiFallback: true,
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    // let server = new webpackDevServer(compiler, {
    //     stats: {
    //         colors: true,
    //         reasons: true,
    //     },
    //     hotOnly: true,
    //     // hotOnly: true,
    //     // watchContentBase: true,
    //     // watchOptions: {
    //     //     aggregateTimeout: 300,
    //     //     pool: 1000,
    //     //     ignored: /node_modules/,
    //     // },
    //     disableHostCheck: true,
    //     // contentBase: common.location.dist,
    //     // publicPath: 'http://0.0.0.0',
    // }, (err, stats) => {
    //     console.log(stats.toString({
    //         color: true,
    //     }));
    // })
    server.listen(80, "0.0.0.0", () => {
        console.log("server running on http://localhost");
    });
})

gulp.task("webpack-dev-server", function() {
    var compiler = webpack(require('./webpack.config.js').config)

    var server = new webpackDevServer(compiler, {
        stats: {
            color: true,
        },
        hotOnly: true,
        watch: true,
        watchContentBase: true,
        watchOptions: {
            aggregateTimeout: 300,
            pool: 1000,
            ignored: /node_modules/,
        },
        disableHostCheck: true,
        contentBase: common.location.dist,
    })
    server.listen(80, "0.0.0.0", () => {
        console.log("server running on http://localhost");
    });
    // let compiler = webpack(require('./webpack.config').config, (err, stats) => {
    //     if (err) {
    //         throw new plugins.util.PluginError("webpack-dev-server", err);
    //     }
    //     // console.log(stats);
    // });

    // // const watching = compiler.watch({}, (err, stats) => {
    // //     // console.log(stats);
    // // });

    // new webpackDevServer(compiler, {
    //     watch: true
    // }).listen(80, "10.11.3.196", (err) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         plugins.util.log("[webpack-dev-server]", "http://localhost/webpack-dev-server/main1.html");
    //     }
    // });

})