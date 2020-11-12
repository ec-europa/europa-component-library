const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const postcssFlexbugFixes = require('postcss-flexbugs-fixes');
const selectorPrefixer = require('postcss-prefix-selector');
const frontmatter = require('remark-frontmatter');
const emoji = require('remark-emoji');

const babelConfig = require('./config/babel.config');
const lernaJson = require('../../lerna.json');

const includePaths = [path.resolve(__dirname, '../../node_modules')];
const publicUrl = process.env.PUBLIC_URL || '';
const publicPath = `${publicUrl}/`;

const environmentModulePath = require.resolve(
  '@ecl/twig-storybook/.storybook/environment.js'
);

const cssLoader = ({ fixCode = true, prefix } = {}) => [
  { loader: 'style-loader' },
  {
    loader: 'css-loader',
    options: { importLoaders: 1 },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        ...(prefix ? [selectorPrefixer({ prefix })] : []),
        ...(fixCode
          ? [postcssFlexbugFixes, autoprefixer({ flexbox: 'no-2009' })]
          : []),
      ],
    },
  },
];

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    path.resolve(__dirname, 'config/polyfills.js'),
    path.resolve(__dirname, 'src/Index.jsx'),
  ],
  output: {
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    filename: 'dist/scripts/bundle.js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: 'dist/scripts/[name].chunk.js',
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
    extensions: ['.mjs', '.js', '.json', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@ecl/website-components': path.resolve(
        __dirname,
        'src/website-components/'
      ),
      '@ecl/website-utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: /\.twig$/,
            use: [
              {
                loader: 'twing-loader',
                options: { environmentModulePath },
              },
            ],
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /preval.*\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                ...babelConfig, // This is a feature of `babel-loader` for webpack (not Babel itself).
                // Disable cache for preval files
                cacheDirectory: false,
                babelrc: false,
              },
            },
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                ...babelConfig, // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
                babelrc: false,
              },
            },
          },
          {
            test: /\.css$/,
            use: cssLoader(),
          },
          {
            test: /\.scss$/,
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                  modules: true,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    postcssFlexbugFixes,
                    autoprefixer({
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sassOptions: {
                    includePaths,
                  },
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
                name: 'dist/images/[name].[hash:8].[ext]',
              },
            },
          },
          {
            test: /\.(md|mdx)$/,
            include: [
              path.resolve(__dirname, 'src'),
              path.resolve(__dirname, '../systems'),
            ],
            use: [
              {
                loader: 'babel-loader',
                options: {
                  ...babelConfig, // This is a feature of `babel-loader` for webpack (not Babel itself).
                  // It enables caching results in ./node_modules/.cache/babel-loader/
                  // directory for faster rebuilds.
                  cacheDirectory: true,
                  babelrc: false,
                },
              },
              {
                loader: '@mdx-js/loader',
                options: {
                  remarkPlugins: [
                    [
                      // Removes front-matter from Markdown output
                      frontmatter,
                      { type: 'yaml', marker: '-', fence: '---' },
                    ],
                    emoji,
                  ],
                },
              },
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
                name: 'dist/media/[name].[hash:8].[ext]',
                esModule: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      files: 'src',
      extensions: ['.js', '.jsx', '.mjs'],
    }),
    // new InterpolateHtmlPlugin(process.env),
    new HtmlWebPackPlugin({
      inject: true,
      template: './public/index.html',
    }),
    new InterpolateHtmlPlugin(HtmlWebPackPlugin, {
      PUBLIC_URL: publicUrl,
    }),
    // Add module names to factory functions so they appear in browser profiler.
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.PUBLIC_URL': JSON.stringify(publicUrl),
      'process.env.ECL_VERSION': JSON.stringify(lernaJson.version),
      'process.env.ECL_EC_PRESET_WEBSITE_CSS': JSON.stringify('n/a'),
      'process.env.ECL_EC_PRESET_WEBSITE_PRINT_CSS': JSON.stringify('n/a'),
      'process.env.ECL_EC_PRESET_WEBSITE_JS': JSON.stringify('n/a'),
      'process.env.ECL_EU_PRESET_WEBSITE_CSS': JSON.stringify('n/a'),
      'process.env.ECL_EU_PRESET_WEBSITE_PRINT_CSS': JSON.stringify('n/a'),
      'process.env.ECL_EU_PRESET_WEBSITE_JS': JSON.stringify('n/a'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  // Turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed. These warnings become
  // cumbersome.
  performance: {
    hints: false,
  },

  devServer: {
    contentBase: [path.resolve(__dirname, 'public')],
    historyApiFallback: true,
    open: true,
    hot: true,
  },
};
