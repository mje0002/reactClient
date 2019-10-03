import {Express, NextFunction, Request, Response} from 'express'

const routeLoggerMiddleware = (app: any, logger: any) => {
	
	app.use('/*', (req: Request, res: any, next: any) => { 
		logger.debug({message: 'RouteLogger', meta: { originalUrl: `${req.originalUrl}`, path: req.path }})
		next()
	})
}

export default routeLoggerMiddleware
