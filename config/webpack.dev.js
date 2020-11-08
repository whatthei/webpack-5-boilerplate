const paths = require('./paths');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    // Set the mode to development
    mode: 'development',
    // Control how source maps are generated
    devtool: 'inline-source-map',
    // Spin up a server for quick development
    devServer: {
        historyApiFallback: true,
        contentBase: paths.src + "/templates",
        watchContentBase: true,
        open: 'firefox',
        overlay: true,
        compress: true,
        hot: true,
        inline: true,
    },
    plugins: [
        // Only update what has changed on hot reload
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            // Styles: Inject CSS into the head with source maps
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    }
})
