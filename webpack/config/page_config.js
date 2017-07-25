const path = require('path');
const common = require('./common_config');
const entries = require('./entries_config').entries;

const HOME_TABLE_CONFIG = {
    "filepath": path.resolve(common.privatePath.pages, "home.art"),
    "title": "校园风貌",
    "icon": "webpack icon",
    "description": "本页面用于华南理工大学广州学院计算机工程学院的迎新助手zero-one",
    "keywords": "GCU assistant, zero-one, GCU",
    "filename": "community.html",
    "chunks": [entries.home_table.chunkName, entries.send.chunkName],
}
module.exports = {
    pages: [HOME_TABLE_CONFIG, ]
}