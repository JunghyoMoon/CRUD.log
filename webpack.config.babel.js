import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

export default {
	entry: {
		main: path.resolve(__dirname, "client/src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "client/dist"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "CRUD.log",
			template: path.resolve(__dirname, "client/src/index.html"),
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, "client/dist"),
		compress: true,
		port: 3000,
		open: true,
	},
};
