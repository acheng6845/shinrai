var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: '#source-map',
	entry: {
		app: './public/index.js'
	},
	output: {
		filename: 'public/build/bundle.js',
		sourceMapFilename: 'public/build/bundle.map'
	},
	module: {
		rules: [
		{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loaders: ['babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0,plugins[]=transform-class-properties,plugins[]=transform-decorators-legacy']
		}
		]
	},
	plugins: process.env.NODE_ENV === 'production' ?
		[
			new webpack.optimize.CommonsChunkPlugin({
				name: 'vendor',
				children: true,
				minChunks: 2,
				async: true,
			})
		] : []
};