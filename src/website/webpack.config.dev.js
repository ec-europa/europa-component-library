const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const postcssFlexbugFixes = require('postcss-flexbugs-fixes');
// const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

const babelConfig = require('./config/babel.config');
const browsers = require('./config/browserslist');

const includePaths = [path.resolve(__dirname, '../node_modules')];
const publicPath = '/';
const publicUrl = publicPath.slice(0, -1);

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    path.resolve(__dirname, 'config/polyfills.js'),
    path.resolve(__dirname, 'src/index.jsx'),
  ],
  output: {
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    filename: 'static/js/bundle.js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: 'static/js/[name].chunk.js',
    // This is the URL that app is served from. We use "/" in development.
    publicPath,
  },
  resolve: {
    // These are the reasonable defaults supported by the Node ecosystem.
    // We also include JSX as a common component filename extension to support
    // some tools, although we do not recommend using it, see:
    // https://github.com/facebookincubator/create-react-app/issues/290
    // `web` extension prefixes have been added for better support
    // for React Native Web.
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: ['eslint-loader'],
        include: [path.resolve(__dirname, 'src')],
      },
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: Object.assign({}, babelConfig, {
                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
                babelrc: false,
              }),
            },
          },
          {
            test: /\.css$/,
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    postcssFlexbugFixes,
                    autoprefixer({
                      browsers,
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
            ],
          },
          {
            test: /\.scss$/,
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    postcssFlexbugFixes,
                    autoprefixer({
                      browsers,
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  includePaths,
                },
              },
            ],
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            use: {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          },
          {
            test: /\.(md|mdx)$/,
            include: [
              path.resolve(__dirname, 'src'),
              path.resolve(__dirname, '../src'),
            ],
            use: [
              {
                loader: 'babel-loader',
                options: babelConfig,
              },
              '@mdx-js/loader',
            ],
          },
          {
            // Exclude `js` files to keep "css" loader working as it injects
            // its runtime that would otherwise processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            use: {
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new InterpolateHtmlPlugin(process.env),
    new HtmlWebPackPlugin({
      inject: true,
      template: './public/index.html',
      // filename: './index.html',
    }),
    // Add module names to factory functions so they appear in browser profiler.
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.PUBLIC_URL': JSON.stringify(publicUrl),
    }),
  ],
  // Turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed. These warnings become
  // cumbersome.
  performance: {
    hints: false,
  },
};

// Dev server config
module.exports.serve = {
  content: [path.resolve(__dirname, 'public')],
  add: app => {
    app.use(convert(history({})));
  },
};
