const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const isProduction = process.env.NODE_ENV == 'production';

const config = {
    // https://webpack.js.org/concepts/#entry
    entry: [
        './resources/src/main.js',
    ],
    // https://webpack.js.org/configuration/output/
    output: {
        filename: './chunks/src/[name].js?id=[chunkhash]',
    },
    optimization: {
        // https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            // https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks
            chunks: 'async',
            // https://webpack.js.org/plugins/split-chunks-plugin/#splitchunksmaxasyncrequests
            maxAsyncRequests: 30,
            // https://webpack.js.org/plugins/split-chunks-plugin/#splitchunksmaxinitialrequests
            maxInitialRequests: 30,
            // https://webpack.js.org/plugins/split-chunks-plugin/#splitchunksminsize
            minSize: 0,
            // https://webpack.js.org/plugins/split-chunks-plugin/#splitchunksmaxsize
            maxSize: 50000,
            // https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkscachegroups
            cacheGroups: {
                defaultVendors: {
                    // https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkscachegroupscachegroupreuseexistingchunk
                    reuseExistingChunk: true,
                },          
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name (module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `vendor.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    },
    resolve: {
        // https://webpack.js.org/configuration/resolve/#resolvealias
        alias: {
            vue: 'vue/dist/vue.js'
        },
        // https://webpack.js.org/configuration/resolve/#resolveextensions
        extensions: [".js", ".jsx"]
    },
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        // https://webpack.js.org/configuration/dev-server/#devserveropen
        open: true,
        // https://webpack.js.org/configuration/dev-server/#devserverhost
        host: 'localhost',
        // https://webpack.js.org/configuration/dev-server/#devserverwatchfiles
        watchFiles: [
            'webpack.config.js',
            'resources/common/*.html', 
            'resources/src/*.js',
            'resources/src/vue/*.js',
            'resources/src/vue/components/**/*.vue',
            'resources/src/react/*.js',
            'resources/src/react/components/**/*.js',
            'resources/styles/sass/*.scss',
            'resources/styles/css/*.css'
        ],
    },
    plugins: [
        // https://webpack.js.org/plugins/html-webpack-plugin/
        new HtmlWebpackPlugin({
            // https://github.com/jantimon/html-webpack-plugin#options
            template: 'resources/common/index.html',
            inject: 'body',
            favicon: ''
        }),
        // https://webpack.js.org/plugins/mini-css-extract-plugin/
        new MiniCssExtractPlugin({
            // https://webpack.js.org/plugins/mini-css-extract-plugin/#options
            linkType: "text/css",
            filename: isProduction ? "./resources/styles/css/[name].css?id=[contenthash]" : "./resources/styles/css/[name].css"
        }),
        // https://vue-loader.vuejs.org/guide/#manual-setup
        new VueLoaderPlugin()
    ],
    // https://webpack.js.org/configuration/devtool/
    devtool: "eval",
    // https://webpack.js.org/configuration/module/
    module: {
        rules: [
            // https://webpack.js.org/loaders/
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    // process.env.NODE_ENV !== "production"
                    // ? "style-loader" : 
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "resolve-url-loader",
                        options: {},
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
                use: [
                    // process.env.NODE_ENV !== "production"
                    // ? "style-loader" : 
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'postcss-loader', 
                    'vue-style-loader'
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                exclude: /node_modules/,
                type: 'asset',
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
