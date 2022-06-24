import console from './console.js'
import files from './files.js'
import proc from './proc.js'
import format from './format.js'
import * as language from './data/language.js'
import * as country from './data/country.js'
import * as date from './data/date.js'
import * as mongo from './data/mongo/index.js'
import { loop } from './processor/loop.js'

const data = {
	country, 
	language,
	date,
	mongo,
}

const processor = {
	loop
}

export {
	console, proc, files, data, processor, format,
};