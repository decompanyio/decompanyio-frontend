require('dotenv').config()

/*eslint-disable @typescript-eslint/no-var-requires*/
const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const withOffline = require('next-offline')
const withOptimizedImages = require('next-optimized-images')
const path = require('path')
const dotEnv = require('dotenv-webpack')

module.exports = withPlugins(
  [withSass, withCss, withOffline, withOptimizedImages],
  {
    webpack(config) {
      config.module.rules.push(
        // use img file
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]'
            }
          }
        },
        // use graphql file
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          use: {
            loader: 'graphql-tag/loader'
          }
        }
      )

      config.plugins = config.plugins || []
      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new dotEnv({
          path: path.join(__dirname, '.env'),
          systemvars: true
        })
      ]
      return config
    },
    cssModules: true,
    sassLoaderOptions: {
      prependData: '$env: ' + process.env.NODE_ENV + ';',
      sourceMap: true
    },
    cssLoaderOptions: {
      url: false
    },
    devIndicators: {
      autoPrerender: true
    },
    withOffline: {
      dontAutoRegisterSw: false,
      generateInDevMode: true,
      workboxOpts: {
        swDest: process.env.NEXT_EXPORT
          ? 'service-worker.js'
          : 'static/service-worker.js',
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'offlineCache',
              expiration: {
                maxEntries: 200
              }
            }
          }
        ]
      },
      experimental: {
        async rewrites() {
          return [
            {
              source: '/service-worker.js',
              destination: '/_next/static/service-worker.js'
            }
          ]
        }
      }
    }
  }
)
