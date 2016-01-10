/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/white-space-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/white-space-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/white-space-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/white-space-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/white-space-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/white-space-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/white-space-x" title="npm version">
 * <img src="https://badge.fury.io/js/white-space-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * whitespace module.
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 1.0.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module white-space-x
 */

/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:2, maxdepth:4,
  maxstatements:17, maxcomplexity:9 */

/*global module */

;(function () {
  'use strict';

  var ES = require('es-abstract/es6'),
    defProp = require('define-property-x'),
    escapeRx = require('regexp.escape'),
    aReduce = Array.prototype.reduce,
    aIndexOf = Array.prototype.indexOf,
    fromCharCode = String.fromCharCode,
    whiteSpaces = [
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
    ],
    cached = {};

  /**
   * Generate a string of ES5 (non-)whitespaces, optionally escaped for use
   * with `new RegExp`.
   *
   * @param {boolean} [nonWhiteSpace=false] Generate a string of
   * non-whitespaces.
   * @param {boolean} [escaped=false] Generate an escaped string.
   * @return {string} The generated string.
   * @example
   * var generateString = require('white-space-x');
   * var ws = generateString();
   * var nonWs = generateString(true);
   *
   * var re1 = new RegExp('^[' + generateString(false, true) + ']+$)');
   * re1.test(ws); // true
   *
   * var re2 = new RegExp('[' + generateString(false, true) + ']$)');
   * re2.test(nonWs); // false
   */
  module.exports = function generateString(nonWhiteSpace, escaped) {
    var plain = nonWhiteSpace === true ? 'nws' : 'ws',
      esc, count, str;
    if (!cached[plain]) {
      if (nonWhiteSpace === true) {
        count = 65536;
        str = '';
        do {
          count -= 1;
          if (ES.Call(aIndexOf, whiteSpaces, [count]) < 0) {
            str = fromCharCode(count) + str;
          }
        } while (count);
      } else {
        str = ES.Call(aReduce, whiteSpaces, [function (acc, item) {
          return acc + fromCharCode(item);
        }, '']);
      }
      cached[plain] = str;
    }
    if (escaped === true) {
      esc = plain + 'e';
      if (!cached[esc]) {
        cached[esc] = escapeRx(cached[plain]);
      }
      return cached[esc];
    }
    return cached[plain];
  };

  /**
   * An array of the whitespace char codes.
   *
   * @name whiteSpaces
   * @type Array.<number>
   * @property {number} 0 0x0009 // Tab
   * @property {number} 1 0x000a // Line Feed
   * @property {number} 2 0x000b // Vertical Tab
   * @property {number} 3 0x000c // Form Feed
   * @property {number} 4 0x000d // Carriage Return
   * @property {number} 5 0x0020 // Space
   * @property {number} 6 0x00a0 // No-break space
   * @property {number} 7 0x1680 // Ogham space mark
   * @property {number} 8 0x180e // Mongolian vowel separator
   * @property {number} 9 0x2000 // En quad
   * @property {number} 10 0x2001 // Em quad
   * @property {number} 11 0x2002 // En space
   * @property {number} 12 0x2003 // Em space
   * @property {number} 13 0x2004 // Three-per-em space
   * @property {number} 14 0x2005 // Four-per-em space
   * @property {number} 15 0x2006 // Six-per-em space
   * @property {number} 16 0x2007 // Figure space
   * @property {number} 17 0x2008 // Punctuation space
   * @property {number} 18 0x2009 // Thin space
   * @property {number} 19 0x200a // Hair space
   * @property {number} 20 0x2028 // Line separator
   * @property {number} 21 0x2029 // Paragraph separator
   * @property {number} 22 0x202f // Narrow no-break space
   * @property {number} 23 0x205f // Medium mathematical space
   * @property {number} 24 0x3000 // Ideographic space
   * @property {number} 25 0xfeff // Byte Order Mark
   */
  defProp(module.exports, 'whiteSpaces', whiteSpaces);

  /**
   * This method takes a string and puts a backslash in front of every
   * character that is part of the regular expression syntax. This is useful
   * if you have a run-time string that you need to match in some text and the
   * string may contain special regex characters.
   *
   * @function escape
   * @param {string} string The string to be escaped.
   * @return {string} The escaped string.
   */
  defProp(module.exports, 'escape', escapeRx);
}());
