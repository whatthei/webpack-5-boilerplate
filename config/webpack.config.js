const paths = require('./paths');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Where webpack looks to start building the bundle
    context: paths.src,
    entry: {
        main: [
            '/app.js'
        ],
    },
    // Where webpack outputs the assets and bundles
    output: {
        path: paths.build,
        filename: 'js/[name].bundle.js',
        clean: true
    },
    // Customize the webpack build process
    plugins: [
        // Add progress bar for build process
        new ProgressBarPlugin(),
        // Generates an HTML file from a template
        new HtmlWebpackPlugin({
            template: "templates/index.html",
            filename: "index.html",
            minify: false
        }),
    ],
    module: {
        rules: [
            // JavaScript: Use Babel to transpile JavaScript files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
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
