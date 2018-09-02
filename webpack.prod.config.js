var HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const ROOT_DIR = path.resolve(__dirname)
const SRC_DIR = path.resolve(__dirname, 'dist/temp')
const NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules/')

module.exports = {
	cache: true,
	context: __dirname,
	mode: 'production',
	devtool: 'source-map',
	entry: {
		app: './src/client/index.tsx'
	},
	module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname + '/dist/public')//,
		//publicPath: '/'  //Hot reloading won’t work as expected for nested routes without it
	},
	plugins: [
		//HtmlWebpackPlugin will generate the index.html file
		new HtmlWebpackPlugin({
			favicon: 'public/favicon.ico',
			template: 'src/client/index.ejs',
			title: 'Node React App',
			libraryTarget: 'window'
		})
	],
	resolve: {
			// Add '.ts' and '.tsx' as resolvable extensions.
			extensions: [".ts", ".tsx", ".js", ".json"]
	},
	externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}
