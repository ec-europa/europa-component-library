const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// SCSS includePaths
const includePaths = [path.resolve(__dirname, '../../node_modules')];

const cssLoader = () => [
  {
    loader: MiniCssExtractPlugin.loader,
    options: { esModule: false },
  },
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      esModule: false,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        cssnano({
          safe: true,
        }),
        autoprefixer(),
      ],
    },
  },
];

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
    library: 'ECL',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /@ecl/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(ttf|otf|eot|svg\?#icon|woff(2)?)(\?[\da-z]+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[hash].[ext]',
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
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  autoprefixer({
                    flexbox: 'no-2009',
                  }),
                ],
              },
            },
          },
          {
            loader: 'resolve-url-loader',
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
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
};
