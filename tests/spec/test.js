/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:1, maxdepth:2,
  maxstatements:11, maxcomplexity:3 */

/*global JSON:true, expect, module, require, describe, it, returnExports */

(function () {
  'use strict';

  var whitespaces;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham');
    if (typeof JSON === 'undefined') {
      JSON = {};
    }
    require('json3').runInContext(null, JSON);
    require('es6-shim');
    whitespaces = require('../../index.js');
  } else {
    whitespaces = returnExports;
  }

  describe('Basic tests', function () {
    it('should be equal', function () {
      expect(whitespaces).toEqual('\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E' +
        '\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A' +
        '\u202F\u205F\u3000\u2028\u2029\uFEFF');
    });
  });
}());
