//导入工具包 require('node_modules里对应模块')
(function() {
    global.path = require('path'),
        global.common = require('./config/common_config'),
        global.entries = require('./config/entries_config'),
        global.pages = require('./config/pages_config'),
        global.webpack = require('webpack');
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
    webpackHotMiddleware = require("webpack-hot-middleware"),
    del = require('del'),
    assign = require('./config/assign_object');

gulp.task('plugins', () => {
    console.log(plugins);
    console.log(require('./webpack.config').config);
});

gulp.task('dev', ['clean'], () => {
    const devConfig = require('./webpack/webpack.dev');
    const webpackConfig = assign(devConfig, originalConfig);
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
            // './dist/*.html',
            './src/private/**/**/*.art',
            './src/public/**/**/*.art',
        ],
        reloadDelay: 1000,
    });
});

gulp.task('build', ['clean'], () => {
    const buildConfig = require('./webpack/webpack.build');
    const webpackConfig = assign(buildConfig, originalConfig);
    const bundler = webpack(webpackConfig);
    bundler.run((err, stats) => {
        if (err) {
            console.log(err);
        }
    });
})

gulp.task('clean', () => {
    del.sync(common.location.dist);
})