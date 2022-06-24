import assert from 'assert';
import * as date from '../data/date.js' 

describe('Date', function() {
  describe('parse', function() {
    var tests = ["2000-12-31", "2000/12/31"];
    var respOK = date.parseAny("2000-12-31");
    tests.forEach( test => {
      it(`should parse '${test}' to '${respOK}'`, function() {
        var resp = date.parseAny(test);
        assert.equal(resp.toString(), respOK.toString());
      });      
    })
  });
});