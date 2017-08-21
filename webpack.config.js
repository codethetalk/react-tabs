const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { optimize: { CommonsChunkPlugin }, ProvidePlugin, NoEmitOnErrorsPlugin, HotModuleReplacementPlugin } = require('webpack')

const HOST = process.env.HOST || "127.0.0.1"
const PORT = process.env.PORT || "3000"

module.exports = {
    context: __dirname,
    entry: ['./src/index.jsx'],
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /(node_modules|dist\/)/, loader: 'babel-loader' },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            { test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader', options: { limit: 8192 } },
            { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
            { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
            { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' },
        ]
    },
    plugins: [
        new CommonsChunkPlugin({ name: 'common' }),
        new NoEmitOnErrorsPlugin(),
        new HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'styles.[contenthash].css',
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: PORT,
        host: HOST
    }
}
