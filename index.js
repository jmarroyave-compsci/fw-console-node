import console from './console.js'
import files from './files.js'
import proc from './proc.js'
import * as language from './data/language.js'
import * as country from './data/country.js'
import * as date from './data/date.js'

const data = {
	country, 
	language,
	date,
}

export {
	console, proc, files, data, 
};