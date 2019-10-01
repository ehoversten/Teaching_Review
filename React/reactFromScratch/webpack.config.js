/* 
PURPOSE OF THIS FILE:

It's a module bundler for modern JavaScript applications. When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into a small number of bundles - often only one - to be loaded by the browser.

aka Webpack allows you to package dependencies into bundles that will be understood by browsers.
*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //this package creates the bundled html file

module.exports = {
	//Where to look when starting the app
	entry: './src/index.js',
	//Where bundled files will be at, run `npm run build`
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		/* 
		The rules have `test`s that looks for file extension names by using regex.
		Adding `?` makes the left character optional in regex. First test looks for .js AND .jsx files
		*/
		rules: [
			{
				test: /\.jsx?$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader'
				}
			},
			{
				/* 
				style-loader: adds css to the DOM by injecting a <style> tag

				css-loader: interprets `@import` and url() and will resolve them

				postcss-loader: loader for webpack to process css

				sass-loader: webpack loads .scss/sass files
				*/
				test: /\.(scss|sass)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: function() {
								return [require('autoprefixer')];
							}
						}
					}
				]
			},
			{
				/* 
				You can't import files by default with webpack, file-loader allows you to import images and actually display it.
				*/
				test: /\.(svg|png|jpg|jpeg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: './public/assets/img'
					}
				}
			}
		]
	},
	/* 
	We specify we want the app to run on port 3001 

	historyApiFallback: serves a 404 page if can't find. Also useful when doing client-side routing with <Switch>
	*/
	devServer: {
		port: 3001,
		historyApiFallback: true
	},

	/* 
	Tells where to look for the template file (the div#root)
	*/
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
};
