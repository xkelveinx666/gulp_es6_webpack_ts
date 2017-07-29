const glob = global.glob || require('glob');
const common = global.common || require('./common_config');
const path = global.path || require('path');
const hot = 'webpack-hot-middleware/client';

//自动扫描，同步读取config文件中的entry文件
let entries = {};
let loadEntries = () => {
    const entriesFilesPaths = [common.location.private, common.publicPath.config];
    entriesFilesPaths.forEach(function(entriesFilePath) {
        var files = glob.sync(path.resolve(entriesFilePath, "**/**/entry.*.js"), { nodir: true })
        files.forEach(function(file) {
            let pathName = file.toString();
            let fileName = pathName.substring(pathName.lastIndexOf("/") + 1);
            let chunkName = fileName.substring(fileName.indexOf(".") + 1, fileName.lastIndexOf("."));
            if (process.env.NODE_ENV === "developing") {
                entries[chunkName] = [hot, pathName];
            } else {
                entries[chunkName] = pathName;
            }
        })
    });
}

(function() {
    loadEntries();
    entries = {
        'more': ['webpack-hot-middleware/client', '/Users/xkelvinx666/Documents/workplace/Gulp/es6_wepack_ts/src/private/login_page/config/entry.more.js', ],
    }
})();

module.exports = entries;