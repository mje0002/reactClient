import config from '../config/config'
import * as winston from 'winston'

const loggerNameFormat = (info: any, data: {name: string}) => {
	info.name = data.name
	return info
}

let transports = []
transports.push(new winston.transports.Console())

const logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format(loggerNameFormat)({name: config.ENVIRONMENT.APP_NAME}),
		winston.format.json()),
	level: config.LOGGER.LOGGER_LEVEL,
	transports
})	

export default logger