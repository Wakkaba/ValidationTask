const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "/dist"),
        filename: "[name].[hash].bundle.js",
        chunkFilename: "[name].[hash].bundle.js",
        publicPath: "/"
    },
    devServer: {
        inline: true,
        port: 4000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]']
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
            filename: './index.html',
            favicon: './public/favicon.ico',
            manifest: './public/manifest.json'
        })
    ],

};
