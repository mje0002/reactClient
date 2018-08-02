import {Express, NextFunction, Request, Response, Router} from 'express'
import version from '../lib/version'

const versionRouter = (app: any) => {
	app.get('/version', getVersion)
}

export default versionRouter

const getVersion = (req: any, res: any) => {
	return res.status(200).send(version())
}
