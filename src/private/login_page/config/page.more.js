const path = global.path || require('path'),
    common = global.common || require('../../../../config/common_config'),
    entries = global.entries || require('../../../../config/entries_config');

const HOME_TABLE_CONFIG = {
    "filepath": path.resolve(common.location.private, "login_page", "pages", "more.art"),
    "title": "更多",
    "icon": "webpack icon",
    "description": "本页面用于华南理工大学广州学院计算机工程学院的迎新助手zero-one",
    "keywords": "GCU assistant, zero-one, GCU",
    "filename": "more.html",
}

module.exports = HOME_TABLE_CONFIG;