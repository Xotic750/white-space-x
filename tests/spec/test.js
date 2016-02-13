/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:2, maxdepth:3,
  maxstatements:14, maxcomplexity:3 */

/*global JSON:true, expect, module, require, describe, it, returnExports */

(function () {
  'use strict';

  var lib;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham');
    if (typeof JSON === 'undefined') {
      JSON = {};
    }
    require('json3').runInContext(null, JSON);
    require('es6-shim');
    lib = require('../../index.js');
  } else {
    lib = returnExports;
  }

  var whiteSpaces = [
    0x0009, // Tab
    0x000a, // Line Feed
    0x000b, // Vertical Tab
    0x000c, // Form Feed
    0x000d, // Carriage Return
    0x0020, // Space
    //0x0085, // Next line - Not ES5 whitespace
    0x00a0, // No-break space
    0x1680, // Ogham space mark
    0x180e, // Mongolian vowel separator
    0x2000, // En quad
    0x2001, // Em quad
    0x2002, // En space
    0x2003, // Em space
    0x2004, // Three-per-em space
    0x2005, // Four-per-em space
    0x2006, // Six-per-em space
    0x2007, // Figure space
    0x2008, // Punctuation space
    0x2009, // Thin space
    0x200a, // Hair space
    //0x200b, // Zero width space - Not ES5 whitespace
    0x2028, // Line separator
    0x2029, // Paragraph separator
    0x202f, // Narrow no-break space
    0x205f, // Medium mathematical space
    0x3000, // Ideographic space
    0xfeff // Byte Order Mark
  ];

  var ws = whiteSpaces.reduce(function reducer(acc, item) {
    return acc + String.fromCharCode(item);
  }, '');

  var nws = (function () {
    var count = 0x110000,
      str = '';
    do {
      count -= 1;
      if (whiteSpaces.indexOf(count) < 0) {
        str = String.fromCodePoint(count) + str;
      }
    } while (count);
    return str;
  }());

  describe('Basic tests', function () {
    it('should be equal', function () {
      expect(lib.whiteSpaces).toEqual(whiteSpaces);
      expect(lib.ws).toBe(ws);
    });

    it('should be equal', function () {
      var re = new RegExp('[' + lib.ws + ']', 'g');
      expect((ws + nws).replace(re, '')).toEqual(nws);
      expect((nws + ws).replace(re, '')).toEqual(nws);
    });

    it('should be equal', function () {
      var re = new RegExp('[^' + lib.ws + ']', 'g');
      expect((ws + nws).replace(re, '')).toEqual(ws);
      expect((nws + ws).replace(re, '')).toEqual(ws);
    });

    it('should be `true`', function () {
      var re = new RegExp('^[' + lib.ws + ']+$');
      expect(re.test(ws)).toBe(true);
    });

    it('should be `false`', function () {
      var re = new RegExp('[' + lib.ws + ']');
      expect(re.test(nws)).toBe(false);
    });

    it('should be `true`', function () {
      var re = new RegExp('^[^' + lib.ws + ']+$');
      expect(re.test(nws)).toBe(true);
    });

    it('should be `false`', function () {
      var re = new RegExp('[^' + lib.ws + ']');
      expect(re.test(ws)).toBe(false);
    });
  });
}());
