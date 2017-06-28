const webpack = require('webpack');
const path = require('path');

// NODE_ENV
const NODE_ENV = process.env.NODE_ENV || 'development';

// Plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Paths
const paths = {
    entryJS: path.resolve(__dirname, 'client/index.js'),
    entryCSS: path.resolve(__dirname, 'client/assets/styles/styles.scss'),
    images: path.resolve(__dirname, 'client/assets/images'),
    fonts: path.resolve(__dirname, 'client/assets/fonts'),
    output: path.resolve(__dirname, 'build')
};

module.exports = {
    devtool: 'cheap-inline-module-source-map',
    entry: {
        app: [paths.entryJS, paths.entryCSS]
    },
    output: {
        path: paths.output,
        filename: './js/bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [path.join(__dirname, 'client')],
                loaders: ['babel-loader']
            }, {
                test: /\.(css)/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }, {
                test: /\.(scss)/,
                include: path.join(__dirname, '/client/assets/styles'),
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader', {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => {
                                    return [require('autoprefixer')({browsers: 'last 2 versions'})]
                                }
                            }
                        },
                        'sass-loader'
                    ]
                })
            }, {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 25000,
                    name: "./img/[name].[ext]"
                },
                include: paths.images
            }, {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 50000,
                    mimetype: 'application/font-woff',
                    name: './fonts/[name].[ext]'
                },
                include: paths.fonts
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new ExtractTextPlugin({filename: './css/[name].css'}),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(NODE_ENV)
            }
        }),
        new webpack
            .optimize
            .OccurrenceOrderPlugin(),
        new webpack.LoaderOptionsPlugin({minimize: true, debug: false})
    ]
}