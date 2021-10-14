import assert from 'assert';
import files from '../files.js' 

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
});