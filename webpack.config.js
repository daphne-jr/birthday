const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
const THIS_DIR = path.join(__dirname, './');

module.exports = {
  entry: {
    app: THIS_DIR.concat('src/index.tsx'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          isProd
            ? {
              loader: MiniCssExtractPlugin.loader,
            }
            : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: /\.m\.\w+$/i,
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src/'),
    },
    extensions: ['.ts', '.tsx', '.wasm', '.mjs', '.jsx', '.js', '.json', '.png'],
    plugins: [new TsconfigPathsWebpackPlugin()],
  },
  output: {
    path: THIS_DIR.concat('build'),
    publicPath: isProd ? './' : '/',
    filename: 'static/js/[name]_[fullhash].js',
    chunkFilename: 'static/js/[name]_[fullhash].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: THIS_DIR.concat('public/index.html'),
      filename: THIS_DIR.concat('build/index.html'),
      favicon: THIS_DIR.concat('public/icon.svg'),
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
};
