//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    webpack = require('webpack'),
    lodash = require('lodash'),
    common = require('./webpack/config/common_config.js'),
    webpackDevServer = require('webpack-dev-server');
gulp.task('plugins', function() {
    console.log(plugins);
    console.log(require('./webpack.config').config);
    // console.log(lodash.merge(require('./webpack.config.js')()));
});

gulp.task('dev', function() {
    webpack(require('./webpack.config').config, function(err, stats) {
        if (err) {
            throw new plugins.util.PluginError("webpack", err);
        }
        plugins.util.log("[webpack]", stats.toString());

    })
})

gulp.task('watch', function() {
    var compiler = webpack(require('./webpack.config.js').config)

    var server = new webpackDevServer(compiler, {

        hotOnly: true,
        disableHostCheck: true,
        contentBase: common.location.dist,
    })

    server.listen(80, "0.0.0.0");
})

gulp.task("webpack-dev-server", function() {
    var compiler = webpack(require('./webpack.config.js').config)

    var server = new webpackDevServer(compiler, {
        hotOnly: true,
        disableHostCheck: true,
        contentBase: common.location.dist,
    })

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