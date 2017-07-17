//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    fs = require('fs'),
    path = require('path'),
    del = require('del');
var browserSync = require('browser-sync').create();

var reload = browserSync.reload;

gulp.task('serve', ['copyImage', 'jquery', 'ie8FixJS', 'css', 'js', 'ejs'], function() {

    browserSync.init({
        server: {
            baseDir: "./dist/pages",
            index: "./app/home_table.html"
        }
    });

    gulp.watch(["./src/**/**.css", "./src/**/**.sass"], ['css', 'ejs']);
    gulp.watch(["./src/pages/scripts/**/**.js", "./src/pages/**/**.ts"], ['js']);
    gulp.watch(["./src/public/scripts/**.js"], ['ie8FixJS']);
    gulp.watch(["./src/public/img/**.img", "./src/public/img/**.png"], ['copyImage']);
    gulp.watch(["./src/**/**.ejs", "./test/**.json"], ['ejs']);
    gulp.watch("./dist/*.html").on('change', reload);
});


gulp.task('default', ['serve']);

gulp.task('ie8FixJS', function() {
    return gulp.src([
            'src/public/scripts/es5-shim.js',
            'src/public/scripts/es5-sham.js',
            'src/public/scripts/json3.js',
            'src/public/scripts/HTML5shiv29.js',
            'src/public/scripts/jquery.placeholder.js',
            'src/public/scripts/ie8.js',
            'src/public/scripts/console.js'
        ])
        .pipe(plugins.plumber())
        .pipe(plugins.concat('IE8Fix.js'))
        .pipe(gulp.dest('./build/pages/js'))
        .pipe(gulp.dest('./dist/pages/js'));
});

gulp.task('jquery', function() {
    return gulp.src(["src/public/scripts/jquery.1.12.4.js", 'src/public/scripts/ajaxfileupload.js'])
        .pipe(plugins.plumber())
        .pipe(plugins.concat('jquery.js'))
        .pipe(gulp.dest('./build/pages/js'))
        .pipe(gulp.dest('./dist/pages/js'));
});

gulp.task('copyImage', function() {
    return gulp.src('src/public/images/**')
        .pipe(gulp.dest('./build/pages/img/'))
        .pipe(gulp.dest('./dist/pages/img/'));
});

gulp.task('css', function() {
    return gulp.src(['src/**/**.css'])
        .pipe(plugins.plumber())
        .pipe(plugins.concat('home_table.css'))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('./build/pages/css'))
        .pipe(gulp.dest('./dist/pages/css'));
});

gulp.task('js', ['ie8FixJS'], function() {
    return gulp.src(['src/public/scripts/template-web.js', 'src/pages/scripts/**/**.js', 'src/public/scripts/regex.js', 'src/public/scripts/ajax.js', 'src/pages/configs/**.js'])
        .pipe(plugins.plumber())
        .pipe(plugins.concat('home_table.js'))
        .pipe(gulp.dest('./build/pages/js'))
        .pipe(gulp.dest('./dist/pages/js'))
        .pipe(reload({ stream: true }));
});
/*
gulp.task('art-template', ['ejs'], function() {
    return gulp.src("./src/test/studentData.js")
        .pipe(gulp.dest('./dist/'))
        .pipe(plugins.plumber())
        .pipe(plugins.arttemplate(fs.readFileSync("./build/pages/app/home_main.html")))
        .pipe(plugins.rename("home_main.html"))
        .pipe(plugins.minifyHtml())
        .pipe(gulp.dest('./dist/pages/app'))
        .pipe(reload({ stream: true }));
});*/

gulp.task('ejs', function() {
    return gulp.src(["./src/**/app/home_main.ejs", "!./src/public/**"])
        .pipe(plugins.ejs())
        .pipe(plugins.plumber())
        .pipe(plugins.htmlBeautify())
        .pipe(plugins.rename({
            extname: ".tpl"
        }))
        .pipe(gulp.dest('./build'))
        .pipe(plugins.rename('/pages/app/home_table.html'))
        .pipe(gulp.dest('./build'))
        .pipe(gulp.dest('./dist'))
        .pipe(reload({ stream: true }));
});

gulp.task('plugins', function() {
    console.log(plugins);
});


gulp.task('webpack', function() {

})