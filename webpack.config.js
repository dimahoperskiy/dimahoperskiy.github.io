const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlMinimizerWebpackPlugin = require('html-minimizer-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const analyze = true;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.tsx',
  },
  devServer: {
    port: 3000,
    hot: isDev,
    static: {
      directory: path.join(__dirname, 'src'),
    },
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  devtool: isDev && 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|svg|ico)$/,
        type: 'asset/resource',
      },
      {
        test: /\.ttf$/,
        type: 'asset/resource',
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new HtmlMinimizerWebpackPlugin(),
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new ESLintPlugin(),
    analyze && new BundleAnalyzerPlugin(),
  ],
};
