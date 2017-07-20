const path = require('path');
const common = require('./common_config');
const entries = require('./entries_config').entries;

const HOME_TABLE_CONFIG = {
    "filepath": path.resolve(common.privatePath.pages, "test.art"),
    "title": "测试页面1",
    "icon": "webpack icon",
    "description": "本页面用于华南理工大学广州学院计算机工程学院的短信成绩发送系统",
    "keywords": "GCU send, send, GCU",
    "filename": "main1.html",
    "chunks": [entries.home_table.chunkName, entries.send.chunkName],
}

// const HOME_SEND_CONFIG = {
//     "filepath": path.resolve(common.privatePath.pages, "test.art"),
//     "title": "测试页面2",
//     "icon": "webpack icon",
//     "description": "本页面用于华南理工大学广州学院计算机工程学院的短信成绩发送系统",
//     "keywords": "GCU send, send, GCU",
//     "filename": "main2.html",
// }

module.exports = {
    pages: [HOME_TABLE_CONFIG, ]
}