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
const staticPath = path.resolve(__dirname, 'public')

app.use(express.static(staticPath))

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const versionInfo = version()

app.listen(config.ENVIRONMENT.PORT, () => {
	logger.info(`${config.ENVIRONMENT.APP_NAME} version ${versionInfo.value} listening on port ${config.ENVIRONMENT.PORT} using ${config.ENVIRONMENT.NODE_ENV} configuration`)	
})
