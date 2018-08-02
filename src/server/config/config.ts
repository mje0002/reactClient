import * as dotenv from 'dotenv'

dotenv.config()

const config = {
	ENVIRONMENT: {
		API_URL: process.env.API_URL,
		APP_NAME: process.env.APP_NAME || 'rendezous-local',
		NODE_ENV: process.env.NODE_ENV || 'local',
		PORT: process.env.PORT || 9000,
		VERSION_FILE_NAME: 'version.txt'
	},
	ENVIRONMENT_NAMES: {
		DEVELOPMENT: 'development',
		LOCAL: 'local',
		MAIN: 'main',
		PROD: 'production',
		QA: 'qa'
	},
	LOGGER: {
		LOGGER_LEVEL: process.env.LOGGER_LEVEL || 'debug'
	}
}

export default config
