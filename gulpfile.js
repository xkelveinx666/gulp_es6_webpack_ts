//导入工具包 require('node_modules里对应模块')
const gulp = require('gulp'), //本地安装gulp所用到的地方
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    webpack = require('webpack'),
    browserSync = require("browser-sync").create(),
    webpackDevMiddleware = require("webpack-dev-middleware"),
    webpackHotMiddleware = require("webpack-hot-middleware"),
    del = require('del'),
    assign = require('./config/assign_object');

const loadingConfig = () => {
    global.path = require('path'),
        global.common = require('./config/common_config'),
        global.entries = require('./config/entries_config'),
        global.pages = require('./config/pages_config'),
        global.webpack = require('webpack');
    return {
        devServerConfig: require('./webpack/devServer'),
        hotMiddleware: require('./webpack/hotMiddleware'),
    };
}

gulp.task('plugins', () => {
    console.log(plugins);
    console.log(require('./webpack.config').config);
});

gulp.task('dev', ['clean'], () => {
    process.env.NODE_ENV = 'developing';
    const serverConfig = loadingConfig();
    const devConfig = require('./webpack/webpack.dev');
    const originalConfig = require('./webpack/webpack.config');
    const webpackConfig = assign(devConfig, originalConfig);
    const bundler = webpack(webpackConfig);
    browserSync.init({
        server: {
            baseDir: "./dist",
            middleware: [
                webpackDevMiddleware(bundler, serverConfig.devServerConfig),
                webpackHotMiddleware(bundler, serverConfig.hotMiddleware),
            ],

        },
        online: false,
        port: 80,
        ghostMode: false,
        open: false,
        files: [
            // './src/private/**/**/*.art',
            // './src/public/**/**/*.art',
        ],
    });
    console.log(bundler);
    // bundler.plugin('done', () => {
    //     browserSync.reload();
    // })
});

gulp.task('reload', () => {
    console.log("html reload");
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
    del.sync("./dist");
})