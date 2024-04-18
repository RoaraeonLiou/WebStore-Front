const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getHtmlPluginConfig = function (name) {
    return {
        template: './src/view/' + name + '.html',
        filename: 'view/' + name + '.html',
        inject: true,
        hash: true,
        chunks: ['common', name],
    };
};

module.exports = {
    // 配置入口
    entry: {
        'index'     : './src/page/index/index.js',
        'user-login': './src/page/user-login/index.js',
        'common'    : './src/page/common/index.js',
    },
    // 配置出口
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'resource/[name][ext][query]',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|gif|hpg|avif|png|webp)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(htm|string)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        // 不当做esModule处理
                        esModule: false
                    }
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(getHtmlPluginConfig('index')),
        new HtmlWebpackPlugin(getHtmlPluginConfig('user-login')),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ],
    // 配置别名
    // __dirname: 获取当前服务器真实路径
    resolve: {
        alias: {
            page: path.resolve(__dirname, './src/page'),
            utils: path.resolve(__dirname, './src/utils'),
            view: path.resolve(__dirname, './src/view'),
            service: path.resolve(__dirname, './src/service'),
            node_modules: path.resolve(__dirname, './node_modules'),
            dist: path.resolve(__dirname, './dist'),
        }
    },
    devServer: {
        static: './dist',
    },
    mode: 'development',
};

