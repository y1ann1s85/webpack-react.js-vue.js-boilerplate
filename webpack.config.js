const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
    entry: [
        './resources/js/vue/main.js',
        './resources/js/react/main.js',
    ],
    output: {
        filename: './builds/chunks/js/[name].js?id=[chunkhash]',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
        extensions: [".js", ".jsx"]
    },
    devServer: {
        open: true,
        host: 'localhost',
        watchFiles: [
            'webpack.config.js',
            'resources/views/*.html', 
            'resources/js/vue/*.js',
            'resources/js/vue/components/**/*.js',
            'resources/js/vue/components/**/*.vue',
            'resources/js/react/*.js',
            'resources/js/react/components/**/*.js',
            'resources/js/react/components/**/*.vue',
            'resources/sass/*.scss',
            'resources/css/*.css'
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'resources/views/index.html',
            inject: 'body',
            favicon: ''
        }),
        new MiniCssExtractPlugin({
            filename: isProduction ? "[name].css?id=[contenthash]" : "[name].css"
        }),
        new VueLoaderPlugin()
    ],
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    stylesHandler, 
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'                                        
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [stylesHandler, 'css-loader', 'postcss-loader', 'vue-style-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                exclude: /node_modules/,
                type: 'asset',
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
