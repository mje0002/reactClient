import {Express, NextFunction, Request, Response} from 'express'

const routeLoggerMiddleware = (app: any, logger: any) => {
	
	app.use('/*', (req: any, res: any, next: any) => { 
		logger.debug(`${req.originalUrl}`)
		next()
	})
}

export default routeLoggerMiddleware
