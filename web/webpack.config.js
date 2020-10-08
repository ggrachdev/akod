const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function isDevEnvironment() {
    return process.env.NODE_ENV === 'development';
}

module.exports = {
    entry: './assets/src/js/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: isDevEnvironment()
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: isDevEnvironment()
                            }
                        }],
                    fallback: "style-loader"
                })
            },

        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "bundle.css"
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('./assets/dist/')
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
};


/*

 const webpack = require('webpack');
 const path = require('path');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");

 config = {
 entry: {
 'main': ['./assets/src/js/index.ts', './assets/src/css/app.scss']
 }
 ,
 output: {
 filename: '[name].js',
 path: path.resolve(__dirname, './assets/desc/')
 },
 resolve: {
 // Add '.ts' and '.tsx' as a resolvable extension.
 extensions: ['.ts', '.tsx', '.js'],
 alias: {}
 },
 module: {
 rules: [
 {
 test: /\.(sass|scss)$/,
 use: ExtractTextPlugin.extract({
 use: [
 'css-loader',
 'sass-loader'
 ]
 })
 },
 {
 test: /\.tsx?$/,
 use: 'ts-loader'
 }
 ],
 },
 plugins: [
 new ExtractTextPlugin({
 filename: './assets/desc/style.bundle.css',
 allChunks: true,
 })
 ]
 };

 module.exports = config;

 */
