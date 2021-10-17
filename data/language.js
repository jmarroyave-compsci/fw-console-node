import locale from 'locale-codes'


export const parse = (str) => {
	var resp = "?";

	if(!str || str.trim() === ""){
		return null;
	}

	switch(str){
		case "english":
		case "en-intl":
		case "eng":
		case "en-":
			str = "en"
			break;
	}

	str = str.trim().toLowerCase();
	str = str.replace("_", "-")

	if(str.length == 2 || (str.length == 5 && str[2] === "-") ){
		var c = locale.getByTag(str)
		if (c){
			resp = c.name;
		}
		return resp;
	}

	return resp;
}
