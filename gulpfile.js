//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    webpack = require('webpack'),
    lodash = require('lodash'),
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

gulp.task("webpack-dev-server", function() {
    let compiler = webpack(require('./webpack.config').config, function(err, stats) {
        if (err) {
            throw new plugins.util.PluginError("webpack-dev-server", err);
        }
    });
    new webpackDevServer(compiler, {

    }).listen(80, "localhost",
        function(err) {
            if (err) {
                console.log(err);
            } else {
                plugins.util.log("[webpack-dev-server]", "http://localhost/webpack-dev-server/main1.html");
            }
        });

})