const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { resolve } = require('path');

module.exports = {
	entry: './src/index.js', 
  module: {
    noParse: /jquery|lodash/,
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/, 
        loader: "babel-loader"
			},
			{
        test: /\.css$/,
        use: ['css-loader'],
      },
			{
				test: /\.less$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'less-loader'
				]
			},
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
        loader: "url-loader?limit=10240&name=assets/img/[name]_[hash].[ext]",
      }
		],
		
  },
  plugins: [
    new VueLoaderPlugin(),
    new CaseSensitivePathsPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../index.html'),
		}),
	],
	resolve: {
    extensions: ['.js', '.vue'],
    alias: {
        vue: 'vue/dist/vue.esm.js',
        '@': resolve('src'),
    }
  }
};