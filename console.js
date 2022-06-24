import chalk from 'chalk';

const COLS = process.stdout.columns;

const objectArrayToArray = function(obj){
	return Object.keys(obj).map( key => obj[key]);
}

const log = function() {
	console.log.apply(this, arguments)
};

const error = function(){ 
	n()
	n()
	line(chalk.red("*"))
	n()
	const args = Object.keys(arguments).map( k => chalk.red.bold(arguments[k]))
	console.error.apply(this, args)
	n()
	line(chalk.red("*"))
	n()
};

const debug = function(){ 
	n()
	line(chalk.green("-"))
	log(chalk.green("DEBUG"))
	const args = Object.keys(arguments).map( k => chalk.green.bold(arguments[k]))
	console.error.apply(this, args)
	line(chalk.green("-"))
	n()
};


const info = function(){ 
	n()
	line(chalk.blue("-"))
	const args = Object.keys(arguments).map( k => chalk.blue.bold(arguments[k]))
	console.error.apply(this, args)
	line(chalk.blue("-"))
	n()
};

const line = (char="-") => console.log(char.repeat(COLS));

const n = () => console.log("");

const title = (title) => {
	line("*");
	log(title);
	line("*");
	n()
}

const task = function(){
	var arr = objectArrayToArray(arguments); 
	arr = ["  ", "->"].concat(arr);
	log.apply(this, arr)
}

const subtask = function(){
	var arr = objectArrayToArray(arguments); 
	arr = ["  ", "  ", "->"].concat(arr);
	log.apply(this, arr)
}

export default {
	log, debug, info, line, title, error, n, task, subtask
};