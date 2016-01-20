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

**Version**: 1.0.4  
**Author:** Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  

* [white-space-x](#module_white-space-x)
    * [`module.exports([nonWhiteSpace], [escaped])`](#exp_module_white-space-x--module.exports) ⇒ <code>string</code> ⏏
        * [`~whiteSpaces`](#module_white-space-x--module.exports..whiteSpaces) : <code>Array.&lt;number&gt;</code>
        * [`~escape(string)`](#module_white-space-x--module.exports..escape) ⇒ <code>string</code>

<a name="exp_module_white-space-x--module.exports"></a>
### `module.exports([nonWhiteSpace], [escaped])` ⇒ <code>string</code> ⏏
Generate a string of ES5 (non-)whitespaces, optionally escaped for use
with `new RegExp`.

**Kind**: Exported function  
**Returns**: <code>string</code> - The generated string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [nonWhiteSpace] | <code>boolean</code> | <code>false</code> | Generate a string of non-whitespaces. |
| [escaped] | <code>boolean</code> | <code>false</code> | Generate an escaped string. |

**Example**  
```js
var generateString = require('white-space-x');
var ws = generateString();
var nonWs = generateString(true);

var re1 = new RegExp('^[' + generateString(false, true) + ']+$)');
re1.test(ws); // true

var re2 = new RegExp('[' + generateString(false, true) + ']$)');
re2.test(nonWs); // false
```
<a name="module_white-space-x--module.exports..whiteSpaces"></a>
#### `module.exports~whiteSpaces` : <code>Array.&lt;number&gt;</code>
An array of the whitespace char codes.

**Kind**: inner property of <code>[module.exports](#exp_module_white-space-x--module.exports)</code>  
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

<a name="module_white-space-x--module.exports..escape"></a>
#### `module.exports~escape(string)` ⇒ <code>string</code>
This method takes a string and puts a backslash in front of every
character that is part of the regular expression syntax. This is useful
if you have a run-time string that you need to match in some text and the
string may contain special regex characters.

**Kind**: inner method of <code>[module.exports](#exp_module_white-space-x--module.exports)</code>  
**Returns**: <code>string</code> - The escaped string.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The string to be escaped. |

