const path = require('path');
const common = require('./common_config');
const glob = require('glob');

class chunk {
    constructor(chunkName, chunkPath) {
        this.chunkName = chunkName;
        this.chunkPath = chunkPath;
    }
}

//自动扫描，同步读取config文件中的entry文件
let entries = {};
let loadEntries = () => {
    const entriesFilesPaths = [common.privatePath.config, common.publicPath.config];
    entriesFilesPaths.forEach(function(entriesFilePath) {
        var files = glob.sync(path.resolve(entriesFilePath, "entry.*.js"), { nodir: true })

        let pathName = files.toString()
        let fileName = pathName.substring(pathName.lastIndexOf("/") + 1);
        let chunkName = fileName.substring(fileName.indexOf(".") + 1, fileName.lastIndexOf("."));
        let newChunk = new chunk(chunkName, pathName);
        entries[chunkName] = newChunk;

    });
}

(function() {
    loadEntries();
})()

module.exports = {
    "entries": entries
}