
// export interface ISettings {
// 	apiUrl: string,
// 	apiV0: string,
// 	siteUrl: string
// }

/**********************************
 * settings object gets populated
 * at start time
 *********************************/

const settings = {
	apiUrl: '',
	apiV0: 'v01', 
	siteUrl: ''
}

export const getSettings = () => {
	return settings
}
