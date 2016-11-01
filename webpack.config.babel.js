import path               from 'path'
import webpack            from 'webpack'
import HtmlWebpackPlugin  from 'html-webpack-plugin'
import webpackLoadPlugins from 'webpack-load-plugins'
import DashboardPlugin    from 'webpack-dashboard/plugin'

const PATHS = {
	app        : path.join(__dirname, 'app'),
	build      : path.join(__dirname, 'build'),
	scss       : path.join(__dirname, 'app/styles/scss'),
	api        : path.join(__dirname, 'app/javascripts/api'),
	utils      : path.join(__dirname, 'app/javascripts/utils'),
	store      : path.join(__dirname, 'app/javascripts/store'),
	config     : path.join(__dirname, 'app/javascripts/config'),
	containers : path.join(__dirname, 'app/javascripts/containers'),
	components : path.join(__dirname, 'app/javascripts/components'),
	redux      : path.join(__dirname, 'app/javascripts/redux/modules')
}

const target                  = 'http://104.199.147.85'
const dashBoardPlugin         = new DashboardPlugin()
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template : PATHS.app + '/index.html',
	filename : 'index.html',
	inject   : 'body'
})

const base = {
	entry : [
		// 'webpack-hot-middleware/client?reload=true',
		'babel-polyfill',
		PATHS.app
	],
	output : {
		path     : PATHS.build,
		filename : "bundle.js"
	},
	module : {
		preLoaders : [{
			test    : /\.jsx$|\.js$/,
			loader  : 'eslint-loader',
			include : PATHS.app,
			exclude : /bundle\.js/
		}],
		loaders: [
			{
				test    : /\.jsx$|\.js$/,
				exclude : /node_modules/,
				loader  : "babel-loader"
			}
		]
	},
	resolve: {
		root: path.resolve('./app'),
		extensions: ['', '.js', '.jsx'],
		alias: {
			'$styles'     : PATHS.scss,
			'$utils'      : PATHS.utils,
			'$store'      : PATHS.store,
			'$config'     : PATHS.config,
			'$redux'      : PATHS.redux,
			'$reducers'   : PATHS.reducers,
			'$containers' : PATHS.containers,
			'$components' : PATHS.components,
			'$api'        : PATHS.api
		}
	}
}

const commonPlugins = [HTMLWebpackPluginConfig, dashBoardPlugin]
const devConf = {
	devtool   : 'cheap-module-inline-source-map',
	devServer : {
		contentBase : PATHS.build,
		hot         : true,
		inline      : true,
		progress    : true,
		proxy : {
			'*' : {
				target : target,
				secure : false
			}
		}
	},
	plugins: commonPlugins.concat([new webpack.HotModuleReplacementPlugin()])
}


export default Object.assign({}, base, devConf)
