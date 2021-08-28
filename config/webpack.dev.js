const paths = require('./paths');
const {merge} = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    // Set the mode to development
    mode: 'development',
    // Control how source maps are generated
    devtool: 'inline-cheap-module-source-map',
    // Spin up a server for quick development
    devServer: {
        watchFiles: [paths.src + '/templates/*.html'],
        open: true,
        hot: true,
    },
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
