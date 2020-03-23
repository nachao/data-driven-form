const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'index.js'
	},
	context: path.resolve(__dirname, 'src'),
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader","css-loader","sass-loader"]
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html') //使用一个模板
        })
    ]
}