// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.jsx'], // Entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output path
    clean: true, // Clears old files in dist folder
  },
  mode: 'development', // Switch to 'production' for production builds
  devServer: {
    static: './dist', // Serve files from the dist folder
    open: true, // Automatically opens the browser
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx'], // Resolve .ts and .js files
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/, // Load CSS files
        use: ['style-loader', 'css-loader'],
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html', // Template HTML file
      filename: 'index.html',
    }),
  ],
};
