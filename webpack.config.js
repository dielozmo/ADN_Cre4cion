const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    }
                ]
            },
            {
                test: /styles.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    }
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif|pdf|ico)$/,
                loader: 'file-loader'
            }
        ]
    },
    optimization: {},
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mi Webpack App',
            template: './src/index.html',
            filename: './index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/privacy/index.html',
            filename: './privacy/index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/blog/index.html',
            filename: './blog/index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/blog/proyecto-bim/index.html',
            filename: './blog/proyecto-bim/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/'}
            ]
        })
    ]
}