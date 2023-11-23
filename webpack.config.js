// NodeJs Code Here!
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require( 'path' )

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template: 'index.html', // вказуєте шлях до вашого HTML-файлу
            filename: 'index.html', // вказуєте назву для вивантаженого файлу
        }
    )],
    module: {
        rules:[
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    devServer: {
        port: 3000
    },
}