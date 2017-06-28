import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'cheap-inline-module-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js'),
        path.join(__dirname, '/client/assets/styles/styles.scss')
    ],
    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: ['react-hot-loader', 'babel-loader']
            },
            {
                test: /\.(css)/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.(scss)/,
                include: path.join(__dirname, '/client/assets/styles'),
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 25000,
                    name: "./img/[name].[ext]"
                },
                include: path.join(__dirname, '/client/assets/images/')
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 50000,
                    mimetype: 'application/font-woff',
                    name: './fonts/[name].[ext]'
                },
                include: path.join(__dirname, '/client/assets/fonts/')
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}