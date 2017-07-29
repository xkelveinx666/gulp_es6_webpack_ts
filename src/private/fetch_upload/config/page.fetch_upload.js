const path = global.path || require('path'),
    common = global.common || require(path.resolve(__dirname, './common_config')),
    fetch_upload = {
        "filepath": path.resolve(common.location.private, 'fetch_upload', 'pages', 'fetch_upload' + '.art'),
        "title": "天高科技工作室",
        "icon": "天高科技工作室logo",
        "description": "华南理工大学广州学院计算机工程学院天高科技工作室",
        "keywords": "tentcoo, GCU",
        "filename": 'fetch_upload.html',
        "chunks": ['more'],
    }

module.exports = fetch_upload;