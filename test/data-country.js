import assert from 'assert';
import * as country from '../data/country.js' 

describe('Country', function() {
  describe('parse', function() {
    var tests = ["🇺🇬", "en-ug"];
    var respOK = country.parse("ug");
    tests.forEach( test => {
      it(`should parse ${test} to ${respOK}`, function() {
        var resp = country.parse(test);
        assert.equal(resp, respOK);
      });      
    })
  });
});