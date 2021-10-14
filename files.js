import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const append = (f, data) => {
  fs.appendFileSync(f, data);
}
const get = (f) => fs.readFileSync(f);
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

export default {
  get, getJSON, saveJSON, exists, getDirname, getCallerFile, getFilename, append
};