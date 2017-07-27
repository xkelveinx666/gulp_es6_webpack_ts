// const extractTextPlugin = require("extract-text-webpack-plugin");
const rules = [{
    test: /\.art$/,
    use: {
        loader: "art-template-loader",
    },
}, {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
    // use: ['css-hot-loader'].concat(extractTextPlugin.extract({
    //     fallback: "style-loader",
    //     use: "css-loader"
    // })),
}, {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['es2015']
        }
    }
}, {
    test: /\.(png|jpg)$/,
    use: {
        loader: 'url-loader',
    }
}]

module.exports = { "rules": rules };