require('dotenv').config();

const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const path = require("path");
const dot_env = require("dotenv-webpack");


module.exports = withPlugins([withSass, withCss], {
        webpack(config, options) {

            // use css file
            config.module.rules.push({
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: '[name].[ext]'
                    }
                }
            });

            config.plugins = config.plugins || [];
            config.plugins = [
                ...config.plugins,

                // Read the .env file
                new dot_env({
                    path: path.join(__dirname, '.env'),
                    systemvars: true
                })
            ];
            return config;
        },
        cssModules: true,
        sassLoaderOptions: {
            sourceMap: true
        },
        cssLoaderOptions: {
            url: false
        },
        devIndicators: {
            autoPrerender: true,
        },
    }
);

