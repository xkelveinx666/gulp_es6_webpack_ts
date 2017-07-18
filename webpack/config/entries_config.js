const path = require('path');
const common = require('./common_config');

class chunk {
    constructor(chunkName, chunkPath) {
        this.chunkName = chunkName;
        this.chunkPath = chunkPath;
    }
}

const ie8fix = new chunk("ie8fix", path.resolve(common.publicPath.scripts, "ie8fix.js"));
const home_table = new chunk("home_table", path.resolve(common.privatePath.config, "entry_home_table.js"));

module.exports = {
    entries: [
        ie8fix,
        home_table
    ]
}