import assert from 'assert';
import * as lang from '../data/language.js' 

describe('Language', function() {
  describe('parse', function() {
    var tests = ["eng", "english", "en-us"];
    var respOK = lang.parse("en");
    tests.forEach( test => {
      it(`should parse '${test}' to '${respOK}'`, function() {
        var resp = lang.parse(test);
        assert.equal(resp, respOK);
      });      
    })
  });
});