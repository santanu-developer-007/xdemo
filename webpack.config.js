const path = require('path');

module.exports = {
	watch : true,
	entry: './index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["css-loader"],
			},
		],
	},
	optimization: {
        minimize: false
    },
};