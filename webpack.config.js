const webpack = require("webpack");
const path = require("path");

let config = {
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "./bundle.js"
	},
	node: {
		fs: 'empty',
	}
}

module.exports = config;