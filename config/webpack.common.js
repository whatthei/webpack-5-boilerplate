const paths = require('./paths');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Where webpack looks to start building the bundle
    context: paths.src,
    entry: {
        main: [
            '/scripts/index.js',
            '/styles/styles.scss',
        ],
    },
    // Where webpack outputs the assets and bundles
    output: {
        path: paths.build,
        publicPath: './',
        filename: 'js/[name].bundle.js',
    },
    // Customize the webpack build process
    plugins: [
        // Add progress bar for build process
        new ProgressBarPlugin(),
        // Removes/cleans build folders and unused assets when rebuilding
        new CleanWebpackPlugin(),
        // Add jQuery for global stage
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        // Generates an HTML file from a template
        new HtmlWebpackPlugin({
            title: 'webpack 5 (static) boilerplate',
            template: "templates/index.pug",
            filename: "index.html",
            minify: false,
        }),
    ],
    module: {
        rules: [
            // JavaScript: Use Babel to transpile JavaScript files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            // PUG: Use pug to transpile html files
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true,
                },
            },
            // HTML: Processing links in html files
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false,
                },
            },
            // Images: Copy image files to build folder
            {
                test: /\.(ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]',
                },
            },
            // PDF: Copy pdf files to build folder
            {
                test: /\.(pdf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'upload/[name][ext]',
                },
            },
            // Fonts and SVGs: Inline files
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ]
    },
}
