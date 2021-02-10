const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: __dirname,
    entry: {
        calendar: './src/calendar/index.js',
    },
    output: {
        path: path.resolve( __dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: ['css-loader'],
            },
            {
              test: /\.p(ost)?css$/,
              oneOf: [
                /* config.module.rule('postcss').rule('vue') */
                {
                  resourceQuery: /\?vue/,
                  use: [
                      MiniCssExtractPlugin.loader,
                    {
                      loader: 'css-loader',
                      options: {
                        sourceMap: false,
                        importLoaders: 2
                      }
                    },
                    {
                      loader: 'postcss-loader',
                      options: {
                        sourceMap: false
                      }
                    }
                  ]
                }
              ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin(
            {
              filename: "assets/css/styles.css",
              chunkFilename: "assets/css/styles.css"
            }
        )
    ]
};