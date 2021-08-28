const {merge} = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    // Set the mode to production
    mode: 'production',
    // Control how source maps are generated
    devtool: false,
    plugins: [
        // Customizing Extracts CSS
        new MiniCssExtractPlugin(
            {
                filename: 'css/[name].min.css',
            },
        ),
    ],
    module: {
        rules: [
            // Extracts CSS into separate files
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    optimization: {
        minimize: true,
        // Minification of CSS and JS files
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: {removeAll: true},
                        },
                    ],
                },
            }),
        ],
    },
})
