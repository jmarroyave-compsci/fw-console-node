import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import parse from 'csv-parse/lib/sync.js';

const append = (f, data) => {
  fs.appendFileSync(f, data);
}
const get = (f) => fs.readFileSync(f).toString();
const save = (f, data) => fs.writeFileSync(f, data);
const getJSON = (f, ifNull) => {
  if(ifNull && !exists(f)) return ifNull
  return JSON.parse(get(f));
}
const saveJSON = (f, data) => save(f, JSON.stringify(data, null, 2));
const exists = f => fs.existsSync(f)
const getDirname = () => {
  return path.resolve(path.dirname(getFilename()));  
}

const getFilename = () => {
  return fileURLToPath(getCallerFile());
}

const getCallerFile = () => {
    var originalFunc = Error.prepareStackTrace;

    var callerfile;
    try {
        var err = new Error();
        var currentfile;

        Error.prepareStackTrace = function (err, stack) { return stack; };

        currentfile = err.stack.shift().getFileName();

        while (err.stack.length) {
            callerfile = err.stack.shift().getFileName();

            if(currentfile !== callerfile) break;
        }
    } catch (e) {}

    Error.prepareStackTrace = originalFunc; 

    return callerfile;
}

const copy = ( source, target ) => fs.copyFileSync( source, target );

const getFiles = ( path ) => {
  return fs.readdirSync( path );
}

const getCSV = ( file, options={} ) => {
  return parse( get(file), {
    columns: options?.columns ?? true,
    skip_empty_lines: true,
    delimiter: options?.delimiter ?? ",",
    quote: ("quote" in options ) ? options.quote : "\"",
  })
}

const mkdir = ( path ) => {
  if( !exists(path) )
    fs.mkdirSync( path, { recursive: true } );
}


const isDirectory = ( path ) => {
  return fs.lstatSync(path).isDirectory() 
}

const rename = ( path, npath ) => {
  return move(path, npath)
}

const move = ( path, npath ) => {
  return fs.renameSync(path, npath) 
}

const getSize = ( path ) => {
  var stats = fs.statSync( path )
  return stats.size;
}

const isEmpty = ( path ) => {
  return getSize( path ) == 0
}


export default {
  isEmpty, getSize, move, rename, isDirectory, mkdir, get, save, getJSON, saveJSON, exists, getDirname, getCallerFile, getFilename, append, copy, getFiles, getCSV
};