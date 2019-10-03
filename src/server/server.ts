import * as express from 'express'
import * as path from 'path'
import config from './config/config'
import version from './lib/version'
import logger from './logger/logger'
import routeLoggerMiddleware from './middleware/route-logger'
import versionRouter from './routers/version'

const app = express()

//Route logger...
routeLoggerMiddleware(app, logger)

//version..Api Version...
versionRouter(app)

// Serve static assets

app.use(express.static('dist/public'))

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
	
	res.sendFile(path.join(__dirname, 'index.html'), { root: 'dist/public' })
	
})

const versionInfo = version()

app.listen(config.ENVIRONMENT.PORT, () => {
	logger.info(`${config.ENVIRONMENT.APP_NAME} version ${versionInfo.value} listening on port ${config.ENVIRONMENT.PORT} using ${config.ENVIRONMENT.NODE_ENV} configuration`)	
})
