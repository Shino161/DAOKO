const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { resolve } = require('path');

module.exports = {
	entry: './src/index.js', 
  module: {
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
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
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