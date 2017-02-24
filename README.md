<a name="module_white-space-x"></a>

## white-space-x
<a href="https://travis-ci.org/Xotic750/white-space-x"
title="Travis status">
<img src="https://travis-ci.org/Xotic750/white-space-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/white-space-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/white-space-x.svg"
alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/white-space-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/white-space-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/white-space-x" title="npm version">
<img src="https://badge.fury.io/js/white-space-x.svg"
alt="npm version" height="18">
</a>

whitespace module.

<h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
`es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
methods that can be faithfully emulated with a legacy JavaScript engine.

`es5-sham.js` monkey-patches other ES5 methods as closely as possible.
For these methods, as closely as possible to ES5 is not very close.
Many of these shams are intended only to allow code to be written to ES5
without causing run-time errors in older engines. In many cases,
this means that these shams cause many ES5 methods to silently fail.
Decide carefully whether this is what you want. Note: es5-sham.js requires
es5-shim.js to be able to work properly.

`json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.

`es6.shim.js` provides compatibility shims so that legacy JavaScript engines
behave as closely as possible to ECMAScript 6 (Harmony).

**Version**: 1.1.0  
**Author:** Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  

* [white-space-x](#module_white-space-x)
    * [`~whiteSpaces`](#module_white-space-x..whiteSpaces) : <code>Array.&lt;number&gt;</code>
    * [`~ws`](#module_white-space-x..ws) : <code>string</code>

<a name="module_white-space-x..whiteSpaces"></a>

### `white-space-x~whiteSpaces` : <code>Array.&lt;number&gt;</code>
An array of the whitespace char codes.

**Kind**: inner property of <code>[white-space-x](#module_white-space-x)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| 0 | <code>number</code> | 0x0009 // Tab |
| 1 | <code>number</code> | 0x000a // Line Feed |
| 2 | <code>number</code> | 0x000b // Vertical Tab |
| 3 | <code>number</code> | 0x000c // Form Feed |
| 4 | <code>number</code> | 0x000d // Carriage Return |
| 5 | <code>number</code> | 0x0020 // Space |
| 6 | <code>number</code> | 0x00a0 // No-break space |
| 7 | <code>number</code> | 0x1680 // Ogham space mark |
| 8 | <code>number</code> | 0x180e // Mongolian vowel separator |
| 9 | <code>number</code> | 0x2000 // En quad |
| 10 | <code>number</code> | 0x2001 // Em quad |
| 11 | <code>number</code> | 0x2002 // En space |
| 12 | <code>number</code> | 0x2003 // Em space |
| 13 | <code>number</code> | 0x2004 // Three-per-em space |
| 14 | <code>number</code> | 0x2005 // Four-per-em space |
| 15 | <code>number</code> | 0x2006 // Six-per-em space |
| 16 | <code>number</code> | 0x2007 // Figure space |
| 17 | <code>number</code> | 0x2008 // Punctuation space |
| 18 | <code>number</code> | 0x2009 // Thin space |
| 19 | <code>number</code> | 0x200a // Hair space |
| 20 | <code>number</code> | 0x2028 // Line separator |
| 21 | <code>number</code> | 0x2029 // Paragraph separator |
| 22 | <code>number</code> | 0x202f // Narrow no-break space |
| 23 | <code>number</code> | 0x205f // Medium mathematical space |
| 24 | <code>number</code> | 0x3000 // Ideographic space |
| 25 | <code>number</code> | 0xfeff // Byte Order Mark |

**Example**  
```js
var lib = require('white-space-x');
var count = 0x110000;
var nws = ''; // A string of all the non-whitepaces
do {
  count -= 1;
  if (lib.whiteSpaces.indexOf(count) < 0) {
    nws = String.fromCodePoint(count) + nws;
  }
} while (count);
```
<a name="module_white-space-x..ws"></a>

### `white-space-x~ws` : <code>string</code>
A string of the whitespace characters.

**Kind**: inner property of <code>[white-space-x](#module_white-space-x)</code>  
**Default**: <code>&quot;\\u0009\\u000a\\u000b\\u000c\\u000d\\u0020\\u00a0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff&quot;</code>  
**Example**  
```js
var lib = require('white-space-x');
var ws = '\u0009\u000a\u000b\u000c\u000d\u0020\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff';
var re1 = new RegExp('^[' + lib.ws + ']+$)');
re1.test(ws); // true
```
