import * as fs from 'fs'
import * as path from 'path'
import config from '../config/config'

// interface IVersionInfo  {
// 	value: string
// }

/***************************************************************
 * VERSION_FILE_NAME: This is a file containting the complete
 * version of the api, that is, a version with a major, a minor
 * and a build number. This file (version.txt) is created and
 * added to the Docker image at the time of building the image
 ***************************************************************/

const versionFilePath = path.join('.', config.ENVIRONMENT.VERSION_FILE_NAME)

const getVersionFromFile = () => {

	// logger.debug(`Looking for version file at ${versionFilePath} ...`)
	
	if ( fs.existsSync(versionFilePath)) {

		// logger.debug(`found file ${versionFilePath}. Retreiving version ...`)

		let versionFromFile = fs.readFileSync(versionFilePath, 'utf8')

		versionFromFile = versionFromFile.replace('\n', '')

		// logger.debug(`version ${versionFromFile} found.`)

		return {value: versionFromFile}
	}
	
	// logger.debug(`No version found. returning default version 0.0.0`)

	return { value: `0.0.0`}
}

const versionInfo = getVersionFromFile()

const version = () => {

	return versionInfo
}

export default version
