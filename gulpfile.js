//导入工具包 require('node_modules里对应模块')
const gulp = require('gulp'), //本地安装gulp所用到的地方
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    webpack = require('webpack'),
    browserSync = require("browser-sync").create(),
    webpackDevMiddleware = require("webpack-dev-middleware"),
    webpackHotMiddleware = require("webpack-hot-middleware"),
    proxy = require('http-proxy-middleware'),
    del = require('del'),
    assign = require('./config/assign_object');

const loadingConfig = () => {
    global.path = require('path'),
        global.common = require('./config/common_config'),
        global.entries = require('./config/entries_config'),
        global.pages = require('./config/pages_config'),
        global.webpack = require('webpack'),
        global.browserSync = browserSync;
    if (process.env.NODE_ENV === "developing") {
        return {
            devConfig: require('./webpack/webpack.dev'),
            originalConfig: require('./webpack/webpack.config'),
            devServerConfig: require('./webpack/devServer'),
            hotMiddleware: require('./webpack/hotMiddleware'),
        }
    } else if (process.env.NODE_ENV === "building") {
        return {
            buildConfig: require('./webpack/webpack.build'),
            originalConfig: require('./webpack/webpack.config'),
        }
    };
}

gulp.task('plugins', () => {
    console.log(plugins);
    console.log(require('./webpack.config').config);
});

gulp.task('dev', ['clean'], () => {
    process.env.NODE_ENV = 'developing';
    const serverConfig = loadingConfig();
    const webpackConfig = assign(serverConfig.devConfig, serverConfig.originalConfig);
    const bundler = webpack(webpackConfig);
    const middlewareProxy = proxy('/new_seat/', {
        "target": 'http://localhost:8080',
        "secure": false,
        "changeOrigin": true,
    });
    browserSync.init({
        server: {
            baseDir: "./dist",
            middleware: [
                webpackDevMiddleware(bundler, serverConfig.devServerConfig),
                webpackHotMiddleware(bundler, serverConfig.hotMiddleware),
                middlewareProxy,
            ],
        },
        online: false,
        port: 80,
        ghostMode: false,
        open: false,
    });
});

gulp.task('reload', () => {
    console.log("html reload");
});

gulp.task('build', ['clean'], () => {
    process.env.NODE_ENV = 'building';
    const produceConfig = loadingConfig();
    const webpackConfig = assign(produceConfig.buildConfig, produceConfig.originalConfig);
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