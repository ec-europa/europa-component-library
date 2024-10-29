const fs = require('fs');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssFlexbugFixes = require('postcss-flexbugs-fixes');
const selectorPrefixer = require('postcss-prefix-selector');
const frontmatter = require('remark-frontmatter');
const remarkGfm = require('remark-gfm');
const unwrapImages = require('remark-unwrap-images');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const babelConfig = require('./config/babel.config');
const lernaJson = require('../../lerna.json');

const publicUrl = process.env.PUBLIC_URL || '';
const publicPath = `${publicUrl}/`;
const correctCmsImagesPath = require('./src/utils/correctCmsImagesPath')({
  search: /\/cms-images/,
  replace: `${publicPath}cms-images`,
});

const includePaths = [path.resolve(__dirname, '../../node_modules')];
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

const environmentModulePath = require.resolve(
  '@ecl/twig-ec-storybook/.storybook/environment.js',
);

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const eclVersion = lernaJson.version;

let sri = {};
if ('CI' in process.env && process.env.GITHUB_REF.includes('refs/tags/')) {
  try {
    const sriFileName = `/europa-component-library-${process.env.GITHUB_REF.replace(
      'refs/tags/',
      '',
    )}-sri.json`;

    sri = JSON.parse(
      fs.readFileSync(
        `${path.resolve(__dirname, '../../scripts/')}/${sriFileName}`,
      ),
    );

    fs.rename(
      `${path.resolve(__dirname, '../../scripts')}/${sriFileName}`,
      `${path.resolve(__dirname, '../../dist/packages')}/${sriFileName}`,
      (err) => {
        if (err) throw err;
      },
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error);
  }
}

const cssLoader = ({ fixCode = true, prefix } = {}) => [
  {
    loader: MiniCssExtractPlugin.loader,
    options: { esModule: false },
  },
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      sourceMap: shouldUseSourceMap,
      esModule: false,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          ...(prefix ? [selectorPrefixer({ prefix })] : []),
          ...(fixCode
            ? [postcssFlexbugFixes, autoprefixer({ flexbox: 'no-2009' })]
            : []),
        ],
        sourceMap: shouldUseSourceMap,
      },
    },
  },
];

module.exports = {
  mode: 'production',
  // Don't attempt to continue if there are any errors.
  bail: true,
  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  devtool: shouldUseSourceMap ? 'source-map' : false,
  entry: {
    main: [
      path.resolve(__dirname, 'config/polyfills.js'),
      path.resolve(__dirname, 'src/Index.jsx'),
    ],
  },
  output: {
    // The build folder.
    path: path.resolve(__dirname, 'build'),
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: 'dist/scripts/[name].[chunkhash:8].js',
    chunkFilename: 'dist/scripts/[name].[chunkhash:8].chunk.js',
    // We inferred the "public path" (such as / or /my-project) from homepage.
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
      '@ecl/website-components': path.resolve(
        __dirname,
        'src/website-components/',
      ),
      '@ecl/website-utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
  module: {
    // strictExportPresence makes missing exports an error instead of warning
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
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: babelConfig,
            },
          },
          {
            test: /\.css$/,
            use: cssLoader(),
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: { esModule: false },
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                  modules: true,
                  sourceMap: shouldUseSourceMap,
                  esModule: false,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    ident: 'postcss',
                    plugins: [
                      postcssFlexbugFixes,
                      autoprefixer({
                        flexbox: 'no-2009',
                      }),
                    ],
                    sourceMap: shouldUseSourceMap,
                  },
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: shouldUseSourceMap,
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
                options: babelConfig,
              },
              {
                loader: '@mdx-js/loader',
                options: {
                  providerImportSource: '@mdx-js/react',
                  remarkPlugins: [
                    // Removes front-matter from Markdown output
                    frontmatter,
                    { type: 'yaml', marker: '-', fence: '---' },
                    remarkGfm,
                    correctCmsImagesPath,
                    unwrapImages,
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
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /^$/],
            use: {
              loader: 'file-loader',
              options: {
                name: 'dist/media/[name].[hash:8].[ext]',
                esModule: true,
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      (compiler) => {
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          parallel: true,
        }).apply(compiler);
      },
      new CssMinimizerPlugin(),
    ],
    // Automatically split vendor and commons
    // https://twitter.com/wSokra/status/969633336732905474
    // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
    // Keep the runtime chunk seperated to enable long term caching
    // https://twitter.com/wSokra/status/969679223278505985
    runtimeChunk: true,
  },
  plugins: [
    new NodePolyfillPlugin(),
    new ESLintPlugin({
      files: 'src',
      extensions: ['.js', '.jsx', '.mjs'],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          globOptions: {
            ignore: ['**/public/index.html'],
          },
        },
      ],
    }),
    new HtmlWebPackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: publicUrl,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.PUBLIC_URL': JSON.stringify(publicUrl),
      'process.env.ECL_VERSION': JSON.stringify(eclVersion),
      'process.env.ECL_EC_CSS': JSON.stringify(
        (sri['ecl-ec.css'] || []).join(' ') || 'n/a',
      ),
      'process.env.ECL_EC_UTILITIES_CSS': JSON.stringify(
        (sri['ecl-ec-utilities.css'] || []).join(' ') || 'n/a',
      ),
      'process.env.ECL_EC_PRINT_CSS': JSON.stringify(
        (sri['ecl-ec-print.css'] || []).join(' ') || 'n/a',
      ),
      'process.env.ECL_EC_DEFAULT_CSS': JSON.stringify(
        (sri['ecl-ec-default.css'] || []).join(' ') || 'n/a',
      ),
      'process.env.ECL_EC_JS': JSON.stringify(
        (sri['ecl-ec.js'] || []).join(' ') || 'n/a',
      ),
      'process.env.ECL_EU_CSS': JSON.stringify(
        (sri['ecl-eu.css'] || []).join(' ') || 'n/a',
      ),
      'process.env.ECL_EU_UTILITIES_CSS': JSON.stringify(
        (sri['ecl-eu-utilities.css'] || []).join(' ') || 'n/a',
      ),
      'process.env.ECL_EU_PRINT_CSS': JSON.stringify(
        (sri['ecl-eu-print.css'] || []).join(' ') || 'n/a',
      ),
      'process.env.ECL_EU_DEFAULT_CSS': JSON.stringify(
        (sri['ecl-eu-default.css'] || []).join(' ') || 'n/a',
      ),
      'process.env.ECL_EU_JS': JSON.stringify(
        (sri['ecl-eu.js'] || []).join(' ') || 'n/a',
      ),
      'process.env.ECL_RESET_CSS': JSON.stringify(
        (sri['ecl-reset.css'] || []).join(' ') || 'n/a',
      ),
      'process.env.ECL_RTL_CSS': JSON.stringify(
        (sri['ecl-rtl.css'] || []).join(' ') || 'n/a',
      ),
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'dist/styles/[name].[contenthash:8].css',
      chunkFilename: 'dist/styles/[name].[contenthash:8].chunk.css',
    }),
    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath,
    }),
  ],
  performance: {
    hints: 'warning',
  },
};
