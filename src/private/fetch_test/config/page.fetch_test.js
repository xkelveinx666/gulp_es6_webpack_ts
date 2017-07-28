const path = global.path || require('path'),
    common = global.common || require(path.resolve(__dirname, './common_config')),
    fetch_test = {
        "filepath": path.resolve(common.location.private, 'fetch_test', 'pages', 'fetch_test' + '.art'),
        "title": "天高科技工作室",
        "icon": "天高科技工作室logo",
        "description": "华南理工大学广州学院计算机工程学院天高科技工作室",
        "keywords": "tentcoo, GCU",
        "filename": 'fetch_test.html',
        "chunks": path.resolve(common.location.private, 'fetch_test', 'entry.' + 'fetch_test' + '.js'),
    }

module.exports = fetch_test;