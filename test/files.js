import assert from 'assert';
import files from '../files.js' 
const __dirname = files.getDirname();

describe('Files', function() {
  describe('getFilename', function() {
    const filename = 'C:\\dev\\projects\\framework\\node\\test\\files.js';
    it(filename, function() {
      assert.equal(files.getFilename(), filename);
    });
  });
  describe('getDirname', function() {
    const dirname = 'C:\\dev\\projects\\framework\\node\\test';
    it(dirname, function() {
      assert.equal(files.getDirname(), dirname);
    });
  });
  describe('getFiles', function() {
    it("files from data", function() {
      var f = files.getFiles(`${__dirname}/data/getFiles`);
      assert.equal(f.length, 1);
    });
  });
  describe('getCSV', function() {
    it("data", function() {
      var f = files.getCSV(`${__dirname}/data/getCSV/test.csv`);
      assert.equal(f.length, 13);
    });
  });
});