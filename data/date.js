import date from 'date-and-time';
import dateAny from 'any-date-parser';

export const parseAny = (str) => {
	if(str.includes("/")) str = str.replace(/\//g, "-");

	return dateAny.fromString(str);
}
