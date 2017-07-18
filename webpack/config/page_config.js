const path = require('path');
const common = require('./common_config');
const HOME_TABLE_CONFIG = {
    "filepath": path.resolve(common.privatePath.pages, "test.art"),
    "title": "webpack title",
    "icon": "webpack icon",
    "description": "本页面用于华南理工大学广州学院计算机工程学院的短信成绩发送系统",
    "keywords": "GCU send, send, GCU",
    "filename": "main.html",
}

const HOME_SEND_CONFIG = {
    "filepath": path.resolve(common.privatePath.pages, "test.art"),
    "title": "webpack title",
    "icon": "webpack icon",
    "description": "本页面用于华南理工大学广州学院计算机工程学院的短信成绩发送系统",
    "keywords": "GCU send, send, GCU",
    "filename": "main.html",
}

module.exports = {
    pages: [HOME_TABLE_CONFIG,
        HOME_SEND_CONFIG,
    ]
}