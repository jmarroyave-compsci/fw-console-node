import assert from 'assert';
import console from '../console.js' 

describe('Console', function() {
  describe('log', function() {
    it('should print "abc"', function() {
      console.log("abc");
    });
  });
  describe('line', function() {
    it('should print a line', function() {
      console.line();
    });
  });
  describe('title', function() {
    it('should print "Title" formatted', function() {
      console.title("Title");
    });
  });
  describe('error', function() {
    it('should print "ERROR" formatted', function() {
      console.error("ERROR");
    });
  });
});