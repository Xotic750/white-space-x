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

whitespace module. A list of ES5 whitespaces, when `\s` doesn't cut it.

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

**Version**: 1.0.0  
**Author:** Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_white-space-x--module.exports"></a>
### `module.exports` : <code>string</code> ⏏
A string of ES5 whitespaces.

**Kind**: Exported member  
**Default**: <code>&quot;&#x27;\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF&#x27;&quot;</code>  
**Example**  
```js
var whitespaces = require('white-space-x');

var re = new RegExp('^(a[' + wsRegexChars + ']*b$)');
var str = 'a' + whitespaces + 'b';
re.test(str); // true
```
