import locale from 'locale-codes'
import ccl from 'country-code-lookup';
import cEmo from 'country-emoji'


export const parse = (str) => {
	var resp = "?";

	//console.log( str, str.length)

	if(!str || str.trim() === ""){
		return null;
	}

	if( str.length == 4 ){	
		var emo = cEmo.name(str)
		if( emo ){
			return emo;
		}
	}

	if( str.length == 2 ){	
		var iso = ccl.byIso(str);
		if( iso ){
			return iso.country;
		}
	}

	if( str.length == 5 && str[2] === "-" ){
		var c = locale.getByTag(str)
		if (c){
			resp = c.location;
		}
		return resp;
	}

	return resp;
}
