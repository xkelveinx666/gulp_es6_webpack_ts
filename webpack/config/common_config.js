const path = require('path');

const pageName = {
    "main": "main",
    "send": "send",
}

const fileType = {
    "html": "html",
    "css": "css",
    "js": "js",
}

const location = {
    "src": path.resolve(__dirname, "../../", "src"),
    "dist": path.resolve(__dirname, "../../", "dist"),
}
const publicPath = {
    "pages": path.resolve(location.src, "public", "pages"),
    "scripts": path.resolve(location.src, "public", "scripts"),
    "styles": path.resolve(location.src, "public", "styles"),
    "config": path.resolve(location.src, "public", "config"),
}

const privatePath = {
    "pages": path.resolve(location.src, "private", "pages"),
    "scripts": path.resolve(location.src, "private", "scripts"),
    "styles": path.resolve(location.src, "private", "styles"),
    "config": path.resolve(location.src, "private", "config"),
}

const templateDefault = {
    "filename": "main.html",
    "title": "webpack title",
    "icon": "webpack icon",
    "description": "本页面用于华南理工大学广州学院计算机工程学院的短信成绩发送系统",
    "keywords": "GCU send, send, GCU",
    "copyright": "本页版权归天高科技工作室所有。All Rights Reserved",
    "ie8fix": `<!--[if lt IE 9]><script src="./ie8fix.bundle.js"></script><![endif]-->`
}

module.exports = {
    pageName,
    fileType,
    location,
    publicPath,
    privatePath,
    templateDefault,
}