import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import parse from 'csv-parse/lib/sync.js';

const append = (f, data) => {
  fs.appendFileSync(f, data);
}
const get = (f) => fs.readFileSync(f).toString();
const getJSON = (f) => JSON.parse(fs.readFileSync(f));
const saveJSON = (f, data) => fs.writeFileSync(f, JSON.stringify(data, null, 2));
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

const getCSV = ( file ) => {
  return parse( get(file), {
    columns: true,
    skip_empty_lines: true
  })
}

export default {
  get, getJSON, saveJSON, exists, getDirname, getCallerFile, getFilename, append, copy, getFiles, getCSV
};