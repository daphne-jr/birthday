const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const THIS_DIR = path.join(__dirname, './');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: THIS_DIR.concat('dist/'),
    publicPath: '/',
    filename: 'static/js/[name]_[fullhash].js',
    chunkFilename: 'static/js/[name]_[fullhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: THIS_DIR.concat('public/index.html'),
      filename: THIS_DIR.concat('dist/index.html'),
      favicon: THIS_DIR.concat('public/icon.svg'),
    }),
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
    maxAssetSize: 512000
  }
};
